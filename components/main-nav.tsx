'use client'

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { NavigationMenu, NavigationMenuItem, NavigationMenuContent, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 hover:bg-popover md:gap-10" style={{padding: 12, borderRadius: 2 }}>
      <Link href="/" className="text-muted-foreground flex items-center text-sm font-medium">
        Home
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2">
                {items?.map((item) => (
                  <li
                  style={{width: '100%'}}
                  className="row-span-3"
                  key={item.title}>
                    <NavigationMenuLink href={item.href} key={item.title}>
                      {item.title}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
