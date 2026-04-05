"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      setPosition((x / rect.width) * 100)
    },
    []
  )

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (dragging) updatePosition(e.clientX)
    },
    [dragging, updatePosition]
  )

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      if (dragging) updatePosition(e.touches[0].clientX)
    },
    [dragging, updatePosition]
  )

  const stopDrag = useCallback(() => setDragging(false), [])

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", stopDrag)
    window.addEventListener("touchmove", onTouchMove)
    window.addEventListener("touchend", stopDrag)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", stopDrag)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", stopDrag)
    }
  }, [onMouseMove, onTouchMove, stopDrag])

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 flex flex-col items-center gap-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance font-serif">
            Zobacz Różnice Przed i Po
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            Przeciągnij i porównaj efekt przed i po.
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-3xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize border border-border select-none shadow-2xl"
            onMouseDown={(e) => {
              setDragging(true)
              updatePosition(e.clientX)
            }}
            onTouchStart={(e) => {
              setDragging(true)
              updatePosition(e.touches[0].clientX)
            }}
          >
            {/* After (full width, behind) - restaurant setting */}
            <Image
              src="/images/lody-after.png"
              alt="Zdjęcie po ulepszeniu przez AI - lody w eleganckim wnętrzu restauracji"
              fill
              className="object-cover"
            />

            {/* Before (clipped to left side) - kitchen setting */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              {/* Inner div matches the full container width so fill renders correctly */}
              <div className="absolute inset-0 w-[100vw] max-w-3xl">
                <Image
                  src="/images/lody-before.jpeg"
                  alt="Zdjęcie przed ulepszeniem - lody w kuchni"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Divider line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-lg"
              style={{ left: `${position}%` }}
            />

            {/* Handle */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center cursor-ew-resize z-10 border-2 border-primary"
              style={{ left: `${position}%` }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6 4L2 9L6 14" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 4L16 9L12 14" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Labels */}
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-lg border border-border">
              PRZED
            </div>
            <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-lg">
              PO
            </div>
          </div>
        </div>

        {/* CTA and Trust Text */}
        <div className="flex flex-col items-center gap-4 mt-10">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-3 rounded-lg text-base transition-colors shadow-md shadow-primary/20">
            Wypróbuj za darmo
          </button>
          <p className="text-xs text-muted-foreground">
            Bez fotografa • Bez studia • Efekt w kilka sekund
          </p>
        </div>
      </div>
    </section>
  )
}
