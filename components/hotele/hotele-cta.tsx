"use client"

import { type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import {
  APP_SIGNUP_URL,
  DEMO_MAILTO_URL,
  trackHoteleCta,
} from "@/lib/hotele-analytics"

export function SignupButton({
  location,
  children,
  className,
  variant = "default",
  size = "lg",
}: {
  location: string
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg"
}) {
  return (
    <Button size={size} variant={variant} className={className} asChild>
      <a
        href={APP_SIGNUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackHoteleCta(location)}
      >
        {children}
      </a>
    </Button>
  )
}

export function DemoButton({
  location,
  children,
  className,
  variant = "default",
  size = "lg",
  href = DEMO_MAILTO_URL,
}: {
  location: string
  children: ReactNode
  className?: string
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg"
  href?: string
}) {
  return (
    <Button size={size} variant={variant} className={className} asChild>
      <a href={href} onClick={() => trackHoteleCta(location)}>
        {children}
      </a>
    </Button>
  )
}
