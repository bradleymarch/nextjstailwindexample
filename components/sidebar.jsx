"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, Film, Tv2, Heart, History, Menu, ChevronDown } from "lucide-react"

export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <div
      className={cn(
        "h-screen bg-sidebar text-sidebar-foreground border-r border-border transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex items-center p-4 border-b border-border">
        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="mr-2">
          <Menu className="h-5 w-5" />
        </Button>
        {!collapsed && <span className="font-bold text-lg">NextTailwindExample</span>}
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        <nav className="px-2 space-y-1">
          <NavItem icon={<Home className="h-5 w-5" />} label="Home" href="#" collapsed={collapsed} />
          <NavItem icon={<Tv2 className="h-5 w-5" />} label="Explore" href="#" collapsed={collapsed} />
          <NavItem icon={<Heart className="h-5 w-5" />} label="Shorts" href="#" collapsed={collapsed} />
          <NavItem icon={<Heart className="h-5 w-5" />} label="TV Mode" href="#" collapsed={collapsed} />
          <hr />
          <NavItem icon={<History className="h-5 w-5" />} label="History" href="#" collapsed={collapsed} />
          <NavItem icon={<History className="h-5 w-5" />} label="Watch Later" href="#" collapsed={collapsed} />
          <NavItem icon={<History className="h-5 w-5" />} label="Liked Videos" href="#" collapsed={collapsed} />
          <div className="pt-2 pb-1">
            <div
              className={cn(
                "flex items-center px-3 py-2 text-sm rounded-md cursor-pointer",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Film className="h-5 w-5 mr-3" />
              {!collapsed && (
                <>
                  <span className="flex-1">Playlists</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </div>

            {!collapsed && (
              <div className="ml-8 mt-1 space-y-1">
                <NavItem label="Movies" href="#" collapsed={collapsed} subItem />
                <NavItem label="TV Shows" href="#" collapsed={collapsed} subItem />
                <NavItem label="New Releases" href="#" collapsed={collapsed} subItem />
              </div>
            )}
          </div>
          <hr />
          <div className="pt-2 pb-1">
            <div
              className={cn(
                "flex items-center px-3 py-2 text-sm rounded-md cursor-pointer",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Film className="h-5 w-5 mr-3" />
              {!collapsed && (
                <>
                  <span className="flex-1">Collections</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </div>

            {!collapsed && (
              <div className="ml-8 mt-1 space-y-1">
                <NavItem label="Movies" href="#" collapsed={collapsed} subItem />
                <NavItem label="TV Shows" href="#" collapsed={collapsed} subItem />
                <NavItem label="New Releases" href="#" collapsed={collapsed} subItem />
              </div>
            )}
          </div>
          <div className="pt-2 pb-1">
            <div
              className={cn(
                "flex items-center px-3 py-2 text-sm rounded-md cursor-pointer",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Film className="h-5 w-5 mr-3" />
              {!collapsed && (
                <>
                  <span className="flex-1">Subscriptions</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </div>

            {!collapsed && (
              <div className="ml-8 mt-1 space-y-1">
                <NavItem label="Movies" href="#" collapsed={collapsed} subItem />
                <NavItem label="TV Shows" href="#" collapsed={collapsed} subItem />
                <NavItem label="New Releases" href="#" collapsed={collapsed} subItem />
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}

function NavItem({ icon, label, href, collapsed, subItem = false }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-3 py-2 text-sm rounded-md",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        subItem && "py-1",
      )}
    >
      {icon && <div className={cn("mr-3", collapsed && "mr-0")}>{icon}</div>}
      {!collapsed && <span>{label}</span>}
    </Link>
  )
}

