"use client"

import { type ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

export const ease = [0.22, 1, 0.36, 1] as const

export const fadeUp = {
  hidden: { opacity: 1, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
}

/** Subtle reveal for product screenshots only (static after enter). */
export const shotFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
}

/**
 * Scroll reveal bez ryzyka niewidocznej treści:
 * - domyślnie opacity 1,
 * - tylko delikatny translateY,
 * - once: true,
 * - prefers-reduced-motion → od razu stan końcowy.
 */
export function FadeIn({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "0px" }}
      variants={stagger}
    >
      {children}
    </motion.div>
  )
}
