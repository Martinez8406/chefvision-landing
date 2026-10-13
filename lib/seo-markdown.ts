export type SeoMeta = {
  metaTitle: string
  metaDescription: string
  slug: string
  targetPhrase: string
}

export type Inline =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "link"; label: string; href: string }

export type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; content: Inline[] }
  | { type: "ul"; items: Inline[][] }
  | { type: "ol"; items: Inline[][] }

export type SeoDocument = {
  meta: SeoMeta
  blocks: Block[]
}

export type FaqItem = {
  question: string
  answer: string
}

const INLINE_RE = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g

export function parseInlines(input: string): Inline[] {
  const nodes: Inline[] = []
  const re = new RegExp(INLINE_RE.source, "g")
  let last = 0
  let match: RegExpExecArray | null

  while ((match = re.exec(input))) {
    if (match.index > last) {
      nodes.push({ type: "text", value: input.slice(last, match.index) })
    }
    if (match[1] !== undefined) {
      nodes.push({ type: "bold", value: match[1] })
    } else {
      nodes.push({ type: "link", label: match[2], href: match[3] })
    }
    last = match.index + match[0].length
  }

  if (last < input.length) {
    nodes.push({ type: "text", value: input.slice(last) })
  }

  return nodes.filter((node) => node.type !== "text" || node.value.length > 0)
}

export function inlineToText(nodes: Inline[]): string {
  return nodes
    .map((node) => (node.type === "link" ? node.label : node.value))
    .join("")
}

function parseFrontMatter(raw: string): { meta: SeoMeta; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!match) {
    throw new Error("SEO markdown is missing front matter")
  }

  const fields: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z0-9_]+):\s*(?:"(.*)"|(.+))\s*$/)
    if (!field) continue
    fields[field[1]] = field[2] ?? field[3]
  }

  const meta: SeoMeta = {
    metaTitle: requiredField(fields, "meta_title"),
    metaDescription: requiredField(fields, "meta_description"),
    slug: requiredField(fields, "slug"),
    targetPhrase: requiredField(fields, "target_phrase"),
  }

  return { meta, body: raw.slice(match[0].length).replace(/^\r?\n/, "") }
}

function requiredField(fields: Record<string, string>, key: string): string {
  const value = fields[key]
  if (!value) {
    throw new Error(`SEO markdown is missing ${key}`)
  }
  return value
}

function parseBlocks(body: string): Block[] {
  const chunks = body
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)

  return chunks.map((chunk) => {
    const lines = chunk.split("\n")
    const heading = lines.length === 1 ? lines[0].match(/^(#{1,3})\s+(.+)$/) : null
    if (heading) {
      const level = heading[1].length
      const text = heading[2]
      if (level === 1) return { type: "h1", text }
      if (level === 2) return { type: "h2", text }
      return { type: "h3", text }
    }

    if (lines.every((line) => line.startsWith("- "))) {
      return {
        type: "ul",
        items: lines.map((line) => parseInlines(line.slice(2))),
      }
    }

    if (lines.every((line) => /^\d+\.\s+/.test(line))) {
      return {
        type: "ol",
        items: lines.map((line) => parseInlines(line.replace(/^\d+\.\s+/, ""))),
      }
    }

    return { type: "p", content: parseInlines(lines.join(" ")) }
  })
}

export function parseSeoDocument(raw: string): SeoDocument {
  const { meta, body } = parseFrontMatter(raw)
  return { meta, blocks: parseBlocks(body) }
}

export function extractFaq(blocks: Block[]): FaqItem[] {
  const items: FaqItem[] = []
  let inFaq = false

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index]
    if (block.type === "h2") {
      inFaq = block.text === "Najczęstsze pytania"
      continue
    }
    if (!inFaq || block.type !== "h3") continue

    const answerParts: string[] = []
    for (let cursor = index + 1; cursor < blocks.length; cursor += 1) {
      const next = blocks[cursor]
      if (next.type === "h2" || next.type === "h3") break
      if (next.type === "p") answerParts.push(inlineToText(next.content))
    }

    items.push({ question: block.text, answer: answerParts.join("\n\n") })
  }

  return items
}

export function faqPageJsonLd(url: string, items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}
