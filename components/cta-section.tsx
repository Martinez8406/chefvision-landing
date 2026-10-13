"use client"

import { useState, type ReactNode } from "react"
import { Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const APP_PRICING_URL = "https://app.chefvision.pl/#/cennik"

type Billing = "monthly" | "yearly"

export function CtaSection() {
  const { t } = useLanguage()
  const c = t.cta
  const [billing, setBilling] = useState<Billing>("monthly")
  const yearly = billing === "yearly"

  return (
    <section id="beta-testing" className="scroll-mt-16 bg-[#f4f6f8] py-16 sm:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-[#d9dee6] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#3d4a3a]">
            {c.badge}
          </span>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl">
            {c.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#626b75]">{c.sub}</p>
        </div>

        <div className="mt-10 flex justify-center">
          <div
            className="inline-flex rounded-full bg-[#e7eaef] p-1"
            role="group"
            aria-label={c.billing.label}
          >
            <BillingButton
              active={billing === "monthly"}
              onClick={() => setBilling("monthly")}
            >
              {c.billing.monthly}
            </BillingButton>
            <BillingButton
              active={billing === "yearly"}
              onClick={() => setBilling("yearly")}
            >
              {c.billing.yearly}
            </BillingButton>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl items-stretch gap-5 md:grid-cols-2">
          <PlanCard
            amount={yearly ? c.startPlan.yearlyPrice : c.startPlan.price}
            currency={c.startPlan.currency}
            period={yearly ? c.startPlan.periodYear : c.startPlan.periodMonth}
            note={yearly ? c.startPlan.yearlyActiveNote : c.startPlan.yearlyNote}
            title={c.startPlan.label}
            description={c.startPlan.desc}
            features={c.startPlan.features}
            cta={c.startPlan.buyBtn}
          />
          <PlanCard
            popular
            badge={c.regular.badge}
            amount={yearly ? c.regular.yearlyPrice : c.regular.price}
            currency={c.regular.currency}
            period={yearly ? c.regular.periodYear : c.regular.periodMonth}
            note={yearly ? c.regular.yearlyActiveNote : c.regular.yearlyNote}
            title={c.regular.label}
            description={c.regular.desc}
            includes={c.regular.includesStart}
            features={c.regular.features}
            cta={c.regular.buyBtn}
          />
        </div>

        <div className="mx-auto mt-5 grid max-w-5xl items-stretch gap-5 md:grid-cols-2">
          <ServiceCard
            eyebrow={c.menuService.eyebrow}
            amount={c.menuService.price}
            currency={c.menuService.currency}
            period={c.menuService.billingLabel}
            note={c.menuService.freeNote}
            title={c.menuService.label}
            features={c.menuService.features}
            cta={c.menuService.buyBtn}
          />
          <ServiceCard
            eyebrow={c.flyerService.eyebrow}
            amount={c.flyerService.price}
            currency={c.flyerService.currency}
            period={c.flyerService.billingLabel}
            note={c.flyerService.freeNote}
            title={c.flyerService.label}
            features={c.flyerService.features}
            cta={c.flyerService.buyBtn}
          />
        </div>
      </div>
    </section>
  )
}

function BillingButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
        active ? "bg-[#1c2330] text-white shadow-sm" : "text-[#5c6570] hover:text-[#1c2330]"
      }`}
    >
      {children}
    </button>
  )
}

function PlanCard({
  popular,
  badge,
  amount,
  currency,
  period,
  note,
  title,
  description,
  includes,
  features,
  cta,
}: {
  popular?: boolean
  badge?: string
  amount: string
  currency: string
  period: string
  note: string
  title: string
  description: string
  includes?: string
  features: string[]
  cta: string
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-[1.75rem] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,32,0.05)] sm:p-8 ${
        popular ? "border-2 border-[#3dcf8e]" : "border border-[#e6e8ee]"
      }`}
    >
      {popular && badge ? (
        <span className="mb-4 inline-flex w-fit rounded-full bg-[#22c55e] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          {badge}
        </span>
      ) : null}

      <PriceRow amount={amount} currency={currency} period={period} />
      <p className="mt-2 text-sm text-[#6b7280]">{note}</p>
      <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#111827]">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-[#626b75]">{description}</p>
      {includes ? (
        <p className="mt-5 text-sm font-bold text-[#111827]">{includes}</p>
      ) : null}
      <FeatureList features={features} className={includes ? "mt-3" : "mt-5"} />
      <CtaLink>{cta}</CtaLink>
    </article>
  )
}

function ServiceCard({
  eyebrow,
  amount,
  currency,
  period,
  note,
  title,
  features,
  cta,
}: {
  eyebrow: string
  amount: string
  currency: string
  period: string
  note: string
  title: string
  features: string[]
  cta: string
}) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-[#e6e8ee] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,32,0.05)] sm:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8b939e]">
        {eyebrow}
      </p>
      <div className="mt-3">
        <PriceRow amount={amount} currency={currency} period={period} />
      </div>
      <p className="mt-2 text-sm text-[#6b7280]">{note}</p>
      <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#111827]">{title}</h2>
      <FeatureList features={features} className="mt-5" />
      <CtaLink>{cta}</CtaLink>
    </article>
  )
}

function PriceRow({
  amount,
  currency,
  period,
}: {
  amount: string
  currency: string
  period: string
}) {
  return (
    <p className="flex flex-wrap items-baseline gap-x-1.5">
      <span className="text-[2.65rem] font-extrabold leading-none tracking-tight text-[#111827]">
        {amount} {currency}
      </span>
      <span className="text-lg font-medium text-[#111827]">{period}</span>
    </p>
  )
}

function FeatureList({ features, className }: { features: string[]; className?: string }) {
  return (
    <ul className={`flex flex-1 flex-col gap-3 ${className ?? ""}`}>
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#1f2937]">
          <Check size={18} className="mt-0.5 shrink-0 text-[#22c55e]" strokeWidth={2.75} />
          {feature}
        </li>
      ))}
    </ul>
  )
}

function CtaLink({ children }: { children: ReactNode }) {
  return (
    <a
      href={APP_PRICING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 flex h-12 w-full items-center justify-center rounded-2xl bg-[#3dcf8e] text-base font-bold text-[#102117] transition-colors hover:bg-[#34c484]"
    >
      {children}
    </a>
  )
}
