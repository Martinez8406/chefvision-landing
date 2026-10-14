"use client"

import { useEffect, useId, useRef, useState, type KeyboardEvent, type RefObject } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export const BENEFIT_LINKS = [
  { label: "QR menu", href: "/qr-menu" },
  { label: "Menu online", href: "/menu-online" },
  { label: "Tłumaczenie menu", href: "/tlumaczenie-menu" },
  { label: "Asystent kelnera", href: "/asystent-kelnera" },
  { label: "Pozyskiwanie gości", href: "/pozyskiwanie-gosci" },
] as const

function useDismissOnOutside(open: boolean, rootRef: RefObject<HTMLElement | null>, onClose: () => void) {
  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) onClose()
    }

    document.addEventListener("mousedown", onPointerDown)
    return () => document.removeEventListener("mousedown", onPointerDown)
  }, [open, rootRef, onClose])
}

export function BenefitsNavDesktop({ label }: { label: string }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const pendingFocus = useRef<number | null>(null)
  const panelId = useId()
  const close = () => setOpen(false)

  useDismissOnOutside(open, rootRef, close)

  useEffect(() => {
    if (!open || pendingFocus.current === null) return
    const index = pendingFocus.current
    pendingFocus.current = null
    itemRefs.current[index]?.focus()
  }, [open])

  const focusItem = (index: number) => {
    const count = BENEFIT_LINKS.length
    const next = (index + count) % count
    itemRefs.current[next]?.focus()
  }

  const onButtonKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault()
      if (open) {
        focusItem(0)
      } else {
        pendingFocus.current = 0
        setOpen(true)
      }
    } else if (event.key === "Escape" && open) {
      event.preventDefault()
      close()
    }
  }

  const onItemKeyDown = (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (event.key === "ArrowDown") {
      event.preventDefault()
      focusItem(index + 1)
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      focusItem(index - 1)
    } else if (event.key === "Home") {
      event.preventDefault()
      focusItem(0)
    } else if (event.key === "End") {
      event.preventDefault()
      focusItem(BENEFIT_LINKS.length - 1)
    } else if (event.key === "Escape") {
      event.preventDefault()
      close()
      buttonRef.current?.focus()
    }
  }

  return (
    <div
      ref={rootRef}
      className="relative"
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node)) close()
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex items-center gap-1 rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={onButtonKeyDown}
      >
        {label}
        <ChevronDown
          size={14}
          aria-hidden
          className={cn("shrink-0 opacity-70 transition-transform", open && "rotate-180")}
        />
      </button>

      {open ? (
        <div
          id={panelId}
          className="absolute left-0 top-full z-50 mt-2 min-w-56 overflow-hidden rounded-xl border border-border bg-background py-1 shadow-lg"
        >
          <ul className="flex flex-col">
            {BENEFIT_LINKS.map((item, index) => (
              <li key={item.href}>
                <Link
                  ref={(node) => {
                    itemRefs.current[index] = node
                  }}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:bg-secondary focus-visible:text-foreground focus-visible:outline-none"
                  onClick={close}
                  onKeyDown={(event) => onItemKeyDown(event, index)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export function BenefitsNavMobile({
  label,
  onNavigate,
}: {
  label: string
  onNavigate: () => void
}) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 rounded-md text-left text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="min-w-0">{label}</span>
        <ChevronDown
          size={16}
          aria-hidden
          className={cn("shrink-0 opacity-70 transition-transform", open && "rotate-180")}
        />
      </button>

      {open ? (
        <ul id={panelId} className="flex flex-col gap-2.5 border-l border-border pl-3">
          {BENEFIT_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
