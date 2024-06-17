import { BarChart4, MonitorPlay } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
    const sidebarRoutes = [
        { icon: <MonitorPlay/>, label: "Courses", path: "/instructor/courses" },
        { icon: <BarChart4/>, label: "Performace", path: "/instoructor/performace" },
    ]
  return (
    <div className="max-sm:hidden flex flex-col w-64 border-r shadow-md px-3 my-4 gap-4 text-sm font-md "></div>
  )
}

export default Sidebar