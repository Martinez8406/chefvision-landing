import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import {
  extractFaq,
  faqPageJsonLd,
  type Block,
  type Inline,
  type SeoDocument,
} from "@/lib/seo-markdown"

const SITE_URL = "https://www.chefvision.pl"

const HERO_IMAGES: Record<string, { src: string; alt: string }> = {
  "/qr-menu": {
    src: "/images/step-qr-stand-table.png",
    alt: "Stojak z kodem QR na stoliku restauracji",
  },
  "/menu-online": {
    src: "/images/step-create-menu.png",
    alt: "Karta dań na ekranie telefonu",
  },
  "/tlumaczenie-menu": {
    src: "/images/step-menu-languages.png",
    alt: "Menu restauracji w kilku językach",
  },
  "/asystent-kelnera": {
    src: "/images/telefon.png",
    alt: "Telefon gościa z kartą dań przy stoliku",
  },
  "/pozyskiwanie-gosci": {
    src: "/images/story/scene-4-happy-ending.png",
    alt: "Gość przy stoliku po posiłku",
  },
}

const FAQ_HEADING = "Najczęstsze pytania"
const CLOSING_HEADING = "Zobacz, jak to wygląda u gościa"

function RichText({
  content,
  onDark = false,
  contactActions = false,
}: {
  content: Inline[]
  onDark?: boolean
  contactActions?: boolean
}) {
  return content.map((node, index) => {
    if (node.type === "text") {
      return <span key={index}>{node.value}</span>
    }

    if (node.type === "bold") {
      return (
        <strong key={index} className={onDark ? "font-semibold text-white" : "font-semibold text-foreground"}>
          {node.value}
        </strong>
      )
    }

    const isContact = node.href.startsWith("mailto:") || node.href.startsWith("tel:")
    if (contactActions && isContact) {
      return (
        <a
          key={index}
          href={node.href}
          className="mx-1 my-1.5 inline-flex h-12 max-w-full items-center justify-center rounded-md bg-white px-5 align-middle text-sm font-semibold text-[#3f6212] shadow-md transition-colors hover:bg-white/95"
        >
          {node.label}
        </a>
      )
    }

    const className = onDark
      ? "font-semibold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
      : "font-medium text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary"

    if (node.href.startsWith("/")) {
      return (
        <Link key={index} href={node.href} className={className}>
          {node.label}
        </Link>
      )
    }

    return (
      <a key={index} href={node.href} className={className}>
        {node.label}
      </a>
    )
  })
}

function isContactLine(content: Inline[]): boolean {
  return content.some(
    (node) => node.type === "link" && (node.href.startsWith("mailto:") || node.href.startsWith("tel:")),
  )
}

function Prose({ content, className }: { content: Inline[]; className?: string }) {
  const lead = content[0]?.type === "bold"
  return (
    <p className={className ?? (lead ? "border-l-2 border-primary/40 pl-5 text-base leading-relaxed text-muted-foreground sm:text-lg" : "text-base leading-relaxed text-muted-foreground sm:text-lg")}>
      <RichText content={content} />
    </p>
  )
}

function BulletList({ items }: { items: Inline[][] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
        >
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Check size={16} className="text-primary" strokeWidth={2.5} aria-hidden />
          </span>
          <p className="text-base leading-relaxed text-muted-foreground">
            <RichText content={item} />
          </p>
        </li>
      ))}
    </ul>
  )
}

function NumberedList({ items }: { items: Inline[][] }) {
  return (
    <ol className="flex flex-col gap-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {index + 1}
          </span>
          <p className="text-base leading-relaxed text-muted-foreground">
            <RichText content={item} />
          </p>
        </li>
      ))}
    </ol>
  )
}

function SectionBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-6 flex flex-col gap-5">
      {blocks.map((block, index) => {
        if (block.type === "p") return <Prose key={index} content={block.content} />
        if (block.type === "ul") return <BulletList key={index} items={block.items} />
        if (block.type === "ol") return <NumberedList key={index} items={block.items} />
        return null
      })}
    </div>
  )
}

function FaqBlock({ heading, blocks }: { heading: string; blocks: Block[] }) {
  const pairs: { question: string; answer: Inline[] }[] = []

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index]
    if (block.type !== "h3") continue
    const next = blocks[index + 1]
    pairs.push({
      question: block.text,
      answer: next?.type === "p" ? next.content : [],
    })
  }

  return (
    <section className="bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-balance text-foreground sm:text-4xl">{heading}</h2>
        <div className="mt-8 flex flex-col gap-4">
          {pairs.map((item) => (
            <article key={item.question} className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
              <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
              {item.answer.length > 0 ? (
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  <RichText content={item.answer} />
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClosingBlock({ heading, blocks }: { heading: string; blocks: Block[] }) {
  return (
    <section className="bg-[#5a8f0a] py-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-6 text-center sm:gap-6">
        <h2 className="text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">{heading}</h2>
        {blocks.map((block, index) => {
          if (block.type !== "p") return null
          if (isContactLine(block.content)) {
            return (
              <p key={index} className="max-w-xl text-center text-base font-medium text-white">
                <RichText content={block.content} onDark contactActions />
              </p>
            )
          }
          return (
            <p key={index} className="max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
              <RichText content={block.content} onDark />
            </p>
          )
        })}
      </div>
    </section>
  )
}

type Section = {
  heading: string
  blocks: Block[]
}

function splitDocument(blocks: Block[]) {
  const h1 = blocks.find((block): block is Extract<Block, { type: "h1" }> => block.type === "h1")
  const firstHeading = blocks.findIndex((block) => block.type === "h2")
  const intro = (firstHeading === -1 ? blocks.slice(1) : blocks.slice(1, firstHeading)).filter(
    (block): block is Extract<Block, { type: "p" }> => block.type === "p",
  )
  const sections: Section[] = []

  for (const block of blocks.slice(Math.max(firstHeading, 0))) {
    if (block.type === "h2") {
      sections.push({ heading: block.text, blocks: [] })
      continue
    }
    if (block.type === "h1") continue
    sections.at(-1)?.blocks.push(block)
  }

  return { h1, intro, sections }
}

export function SeoLanding({ doc }: { doc: SeoDocument }) {
  const { h1, intro, sections } = splitDocument(doc.blocks)
  const hero = HERO_IMAGES[doc.meta.slug]
  const faqs = extractFaq(doc.blocks)
  const jsonLd = faqPageJsonLd(`${SITE_URL}${doc.meta.slug}`, faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative overflow-hidden bg-background pt-24 lg:pt-28">
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 pb-12 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-20">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              {doc.meta.targetPhrase}
            </span>
            {h1 ? (
              <h1 className="max-w-xl text-4xl font-bold leading-[1.08] text-balance text-foreground sm:text-5xl lg:text-[3.15rem]">
                {h1.text}
              </h1>
            ) : null}
            <div className="flex max-w-xl flex-col gap-4">
              {intro.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <RichText content={paragraph.content} />
                </p>
              ))}
            </div>
          </div>

          {hero ? (
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl overflow-hidden rounded-2xl lg:max-w-none">
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  width={760}
                  height={640}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {sections.map((section, index) => {
        if (section.heading === FAQ_HEADING) {
          return <FaqBlock key={section.heading} heading={section.heading} blocks={section.blocks} />
        }
        if (section.heading === CLOSING_HEADING) {
          return <ClosingBlock key={section.heading} heading={section.heading} blocks={section.blocks} />
        }

        const band = index % 2 === 0 ? "border-y border-border/60 bg-background" : "bg-secondary/30"

        return (
          <section key={section.heading} className={`py-16 lg:py-24 ${band}`}>
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="text-3xl font-bold text-balance text-foreground sm:text-4xl">{section.heading}</h2>
              <SectionBlocks blocks={section.blocks} />
            </div>
          </section>
        )
      })}
    </>
  )
}
