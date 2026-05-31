"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

const ease = [0.22, 1, 0.36, 1] as const

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
}

export type StorySceneProps = {
  imageSrc: string
  imageAlt: string
  heading: string
  description: string
  imagePosition?: "left" | "right"
  children?: ReactNode
  className?: string
}

export function StoryScene({
  imageSrc,
  imageAlt,
  heading,
  description,
  imagePosition = "left",
  children,
  className,
}: StorySceneProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  const imageFirst = imagePosition === "left"

  return (
    <section ref={ref} className={cn("py-20 sm:py-28 lg:py-32", className)}>
      <motion.div
        className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={fadeUpVariants}
          className={cn(
            "relative order-1",
            imageFirst ? "lg:order-1" : "lg:order-2"
          )}
        >
          <motion.div
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-muted/80 p-1 shadow-[0_24px_60px_-20px_rgba(15,23,32,0.18)] ring-1 ring-border/60"
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.45, ease }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] sm:aspect-[5/4]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className={cn(
            "order-2 flex flex-col justify-center gap-6",
            imageFirst ? "lg:order-2" : "lg:order-1"
          )}
        >
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem]">
              {heading}
            </h3>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </section>
  )
}

export type StoryFinaleProps = {
  imageSrc: string
  imageAlt: string
  heading: string
  subheading: string
  ctaDemo: string
  ctaTry: string
  demoHref?: string
  tryHref?: string
}

export function StoryFinale({
  imageSrc,
  imageAlt,
  heading,
  subheading,
  ctaDemo,
  ctaTry,
  demoHref = "mailto:kontakt@chefvision.pl?subject=Demo%20ChefVision",
  tryHref = "https://app.chefvision.pl",
}: StoryFinaleProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-8% 0px" })

  const headingLines = heading.split("\n")

  return (
    <section ref={ref} className="px-6 pb-24 pt-4 sm:pb-32">
      <motion.div
        className="relative mx-auto min-h-[min(85vh,720px)] max-w-7xl overflow-hidden rounded-[2rem] shadow-[0_32px_80px_-24px_rgba(15,23,32,0.35)] ring-1 ring-border/40"
        initial={{ opacity: 0, y: 36 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
        transition={{ duration: 0.75, ease }}
      >
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>

        <motion.div
          className="relative z-10 flex min-h-[min(85vh,720px)] flex-col items-center justify-center px-6 py-20 text-center sm:px-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={fadeUpVariants}
            className="max-w-3xl font-serif text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {headingLines.map((line, i) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h3>
          <motion.p
            variants={fadeUpVariants}
            className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            {subheading}
          </motion.p>
          <motion.div
            variants={fadeUpVariants}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <a
              href={demoHref}
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg shadow-black/25 transition-all hover:brightness-[0.93]"
            >
              {ctaDemo}
            </a>
            <a
              href={tryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              {ctaTry}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
