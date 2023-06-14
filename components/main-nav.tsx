import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 hover:bg-popover md:gap-10" style={{padding: 12, borderRadius: 2 }}>
      <Link href="/" className="text-muted-foreground flex items-center text-sm font-medium">
        Home
      </Link>
    </div>
  )
}
