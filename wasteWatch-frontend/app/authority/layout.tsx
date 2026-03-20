"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Command Center", href: "/authority", icon: "dashboard" },
  { name: "Active Reports", href: "/authority/reports", icon: "report_problem" },
  { name: "Field Crews", href: "/authority/crews", icon: "group" },
  { name: "City View", href: "/authority/map", icon: "map" },
  { name: "Impact Analytics", href: "/authority/analytics", icon: "bar_chart" },
]

export default function AuthorityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex font-display transition-colors">

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary dark:text-primary-alt font-bold text-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-icons-round text-white text-xl">recycling</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-primary dark:text-primary-alt">WasteWatch</span>
            </div>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 p-1 rounded-lg">
            <span className="material-icons-round">close</span>
          </button>
        </div>

        <nav className="mt-2 flex-1 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center space-x-3 p-3 rounded-lg font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary dark:text-primary-alt border border-primary/20"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                )}
              >
                <span className="material-icons-round">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="flex items-center space-x-3 w-full p-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            {mounted && resolvedTheme === "dark" ? (
              <span className="material-icons-round text-yellow-500">light_mode</span>
            ) : (
              <span className="material-icons-round">dark_mode</span>
            )}
            <span>Toggle Theme</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:pl-64 min-h-screen relative w-full overflow-x-hidden">
        {/* Header */}
        <header className="sticky top-0 z-30 flex justify-between items-center p-4 sm:p-8 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg flex-shrink-0"
            >
              <span className="material-icons-round">menu</span>
            </button>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white truncate">Authority Portal</h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm truncate">Monitoring and resolving waste reports across Lagos Metro Area</p>
            </div>
            {/* Mobile Header Title */}
            <div className="sm:hidden flex items-center gap-2">
              <h1 className="text-lg font-bold text-slate-800 dark:text-white truncate">Authority</h1>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full cursor-pointer transition-colors">
              <span className="absolute top-1 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
              <span className="material-icons-round text-slate-500 dark:text-slate-400 text-2xl">notifications</span>
            </div>
            <div className="flex items-center space-x-3 border-l pl-2 sm:pl-4 border-slate-200 dark:border-slate-700">
              <div className="text-right hidden md:block">
                <p className="text-sm font-semibold truncate leading-tight">Admin. Okonjo</p>
                <p className="text-xs text-slate-500 truncate mt-0.5">Regional Director</p>
              </div>
              <img
                alt="Admin Profile"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20 shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUzNQeoBLPljmASRKJzySdXf4DgXTQ2sovb2gSIPz-i6RoFriHiTqjP9ewzO3ggHM-1av4jzoCjPJ1xGNHrs3NSSM7eCyUs0m0T71NSU_6UGlSK8_hmxw1zCy4mBC7ztOllDobc_sbXQrUSrf_Eep-H60Qo4K8bwYM9wCgaAg_dlrEXTWvnsrPJDMruwBeCzroeBVf670oPG4gvXlCJZ1p27t7ZeuneSf0LVJTk5wPJvtO5v7mZ_zK0uxHCmx-5QX71kq85p1bXeg"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-8 flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}
