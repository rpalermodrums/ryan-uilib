'use client'

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { NavigationMenu, NavigationMenuItem, NavigationMenuContent, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

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
              <div className="flex items-center text-sm font-medium">
              <NavigationMenuContent>
                <ul className="grid min-w-full gap-2">
                  {items?.map((item) => (
                    <li
                    style={{width: '100%'}}
                    className="row-span-3 p-2 min-w-max hover:bg-gray-50"
                    key={item.title}>
                      <NavigationMenuLink href={item.href} key={item.title}>
                        {item.title}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </div>
            </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
