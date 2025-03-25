"use client"

import { useState } from "react"
import Sidebar from "./sidebar"
import DashboardContent from "./dashboard-content"

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <DashboardContent collapsed={collapsed} />
    </div>
  )
}

