import { Outlet } from "@remix-run/react"

import { TooltipProvider } from "~/ui/Tooltip"

export default function App() {
  return (
    <TooltipProvider>
      <Outlet />
    </TooltipProvider>
  )
}
