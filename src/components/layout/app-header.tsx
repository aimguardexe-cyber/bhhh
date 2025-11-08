
"use client"

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { User, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

const AppHeader = () => {
  const pathname = usePathname();

  const pageTitle = useMemo(() => {
    const segment = pathname.split('/').filter(Boolean).pop();
    if (!segment) return "Dashboard";
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  }, [pathname]);

  const pageDescription = useMemo(() => {
    switch (pathname) {
      case '/dashboard':
        return "Welcome back! Here's your overview.";
      case '/profile':
        return "Manage your account settings.";
      case '/products':
        return "Browse and manage your products.";
      case '/library':
        return "Explore your saved resources.";
      case '/chatbot':
        return "Ask me anything about our products or your account.";
      default:
        return "View your account information and platform statistics.";
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-10 flex h-20 items-center gap-4 border-b bg-background px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">{pageTitle}</h1>
        {pageDescription && (
          <p className="text-sm text-muted-foreground">
            {pageDescription}
          </p>
        )}
      </div>
      <div className="ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Lokesh Prajapat</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default AppHeader
