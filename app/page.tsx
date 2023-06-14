import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          UI Library for Next.js and React, Built with Radix and Tailwind
        </h1>
      </div>
      <div className="flex gap-4">
        <Link href="/buttons"className={buttonVariants()}>
          Buttons
        </Link>
        <Link href="/inputs"className={buttonVariants()}>
          Inputs
        </Link>
      </div>
    </section>
  )
}
