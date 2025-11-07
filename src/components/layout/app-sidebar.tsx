"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Code2, Home, Box, Book, User, LogOut } from "lucide-react"
import Link from "next/link"

const AppSidebar = () => {
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar');

  return (
    <>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg">
            <Code2 className="h-6 w-6" />
          </div>
          <span className="text-xl font-semibold font-headline">Coderyn</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Dashboard" isActive>
              <Link href="/dashboard">
                <Home />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Products">
              <Link href="#">
                <Box />
                <span>Products</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Library">
              <Link href="#">
                <Book />
                <span>Library</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Profile">
              <Link href="#">
                <User />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Logout">
              <Link href="#">
                <LogOut />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarSeparator className="my-2"/>
        <div className="flex items-center gap-3 overflow-hidden">
          <Avatar>
            <AvatarImage src={userAvatar?.imageUrl} data-ai-hint={userAvatar?.imageHint} />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-sm truncate">
            <span className="font-semibold truncate">User Name</span>
            <span className="text-muted-foreground truncate">username@email.com</span>
          </div>
        </div>
      </SidebarFooter>
    </>
  )
}

export default AppSidebar;
