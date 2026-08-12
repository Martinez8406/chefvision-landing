"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { shotFade } from "@/components/hotele/hotele-motion"

/** Static product screenshot frame — no hover zoom, no carousel. */
export function ProductShot({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 90vw, 420px",
}: {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  priority?: boolean
  sizes?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(
        "overflow-hidden rounded-[1.35rem] border border-border/70 bg-background shadow-[0_18px_50px_-28px_rgba(15,23,32,0.45)]",
        className,
      )}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={shotFade}
    >
      <Image
        src={src}
        alt={alt}
        width={480}
        height={980}
        sizes={sizes}
        priority={priority}
        className={cn("h-auto w-full object-cover object-top", imageClassName)}
      />
    </motion.div>
  )
}

/** Encoded paths for screenshot filenames with spaces. */
export const HOTEL_SHOTS = {
  hub1: "/images/hotel%20hub%201%20en.png",
  hub2: "/images/hotel%20hub%202.jpeg",
  hub3: "/images/hotel%20hub%203.jpeg",
  languages: "/images/menu%20z%20jezykami%2014.jpeg",
  recommendations: "/images/menu%20z%20poleceniem.jpeg",
  callStaff: "/images/wezwij%20kelne.jpeg",
  /** Filename has a trailing space before .jpeg */
  callStaffExpanded: "/images/wezwij%20kelner%20.jpeg",
} as const
