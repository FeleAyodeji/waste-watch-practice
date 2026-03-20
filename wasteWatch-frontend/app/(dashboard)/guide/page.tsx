"use client"

import React from "react"
import Link from "next/link"

export default function GuidePage() {
  return (
    <main className="p-4 sm:p-8 space-y-12 max-w-7xl mx-auto py-12 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#006e2a] to-[#00d95a] rounded-[2rem] p-8 md:p-16 relative overflow-hidden text-white shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 font-display">
            Your Guide to Maximizing WastePoints
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 font-medium">
            Turn your civic duty into rewards. Learn how to optimize your reports and climb the leaderboard while cleaning your community.
          </p>
          <Link href="/report-waste" className="bg-white text-[#006e2a] font-bold px-8 py-4 rounded-full transition-all hover:bg-opacity-90 active:scale-95 inline-block text-center">
            Start Reporting Now
          </Link>
        </div>
        <div className="absolute right-0 bottom-0 opacity-20 hidden lg:block">
          <span className="material-icons-round text-[300px]" style={{ fontSize: "300px" }}>eco</span>
        </div>
      </section>

      {/* 3-Step Guide (Asymmetric Grid) */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-slate-800 dark:text-white font-display">Getting Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] transition-all hover:bg-slate-100 dark:hover:bg-slate-800 group border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
            <div className="w-14 h-14 bg-[#006e2a] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <span className="material-icons-round text-2xl">add_a_photo</span>
            </div>
            <h3 className="text-xl font-bold mb-3">1. Spot it</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Take a clear photo of the waste issue. Lighting and clarity matter for verification.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] transition-all hover:bg-slate-100 dark:hover:bg-slate-800 group border border-slate-200/50 dark:border-slate-800/50 shadow-sm md:mt-8">
            <div className="w-14 h-14 bg-[#006e2a] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <span className="material-icons-round text-2xl">location_on</span>
            </div>
            <h3 className="text-xl font-bold mb-3">2. Report it</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Add location and details. Precise GPS data ensures quick resolution by officials.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] transition-all hover:bg-slate-100 dark:hover:bg-slate-800 group border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
            <div className="w-14 h-14 bg-[#006e2a] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <span className="material-icons-round text-2xl">payments</span>
            </div>
            <h3 className="text-xl font-bold mb-3">3. Earn it</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Collect points on resolution. Watch your impact score grow as issues are cleared.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid: Earning Potential & Booster */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Earning Potential Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
              <span className="material-icons-round">hd</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white">Photo Quality Bonus</h4>
              <p className="text-sm text-[#006e2a] font-bold">+20 WP</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
              <span className="material-icons-round">my_location</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white">GPS Accuracy Reward</h4>
              <p className="text-sm text-[#006e2a] font-bold">+10 WP</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
              <span className="material-icons-round">thumb_up</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white">Community Upvote Bonus</h4>
              <p className="text-sm text-[#006e2a] font-bold">+5 WP per vote</p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl text-red-600 relative">
              <span className="material-icons-round">warning</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full shadow-[0_0_12px_rgba(220,38,38,0.6)]"></div>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white">High-Risk Report Bonus</h4>
              <p className="text-sm text-[#006e2a] font-bold">+50 WP</p>
            </div>
          </div>
        </div>
        {/* Community Booster */}
        <div className="lg:col-span-4 bg-orange-50 dark:bg-orange-900/20 p-8 rounded-[2rem] border-2 border-orange-100 dark:border-orange-900/30 flex flex-col justify-between shadow-sm">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="material-icons-round text-sm">rocket_launch</span>
              Active Booster
            </div>
            <h3 className="text-2xl font-extrabold text-orange-900 dark:text-orange-400 mb-4 font-display">
              This Week's Community Booster
            </h3>
            <p className="text-orange-800 dark:text-orange-300 font-medium leading-relaxed">
              Double points for reporting illegal dumping on major highways in Lagos Island!
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-orange-200 dark:border-orange-800">
            <div className="flex justify-between items-center text-sm font-bold text-orange-600 dark:text-orange-400">
              <span>Time Remaining</span>
              <span>4d 12h 08m</span>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Spotlight & Impact */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200/50 dark:border-slate-800/50">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-4 font-display">Leaderboard Spotlight</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium">
            Meet the citizens leading the charge in Lagos. Every report counts towards a cleaner future.
          </p>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl flex items-center gap-6 shadow-md border border-slate-100 dark:border-slate-800">
            <div className="relative shrink-0">
              <img
                alt="User Profile"
                className="w-20 h-20 rounded-2xl object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkwOyCrEAMNy4pdblf-g9MyBCkOQH-2zVVgDvnBBP-MOPav1EkMEOsN8HIWFp0BkareoJylW1YV5IKzHxOVfWEpAuBDUF1LBZrp8lGiBVxbzaKuM0by7BjPReZkTX_ys46TBv1lsDFZIiXoaebTcdkvH_LmT7pIM2zJFZA3dwC10WPev_JQtMjrVMlkfh9103fFE5qmb5JAcipZk1bYAD6tvn7-Zj7jVeg0SpNA1PorukDaVATRr_JcV9ciiHFCdk6y4wuVQ1Q8Do"
              />
              <div className="absolute -bottom-2 -right-2 bg-emerald-400 text-slate-900 p-1.5 rounded-lg font-black text-xs shadow-lg">#1</div>
            </div>
            <div>
              <h4 className="font-bold text-xl">Ayo Benson</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Environmental Guardian Level 4</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#006e2a] font-black">14,250 WP</span>
                <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">124 Reports Resolved</span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          {/* Circular Progress/Impact Score */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle
                className="text-slate-200 dark:text-slate-800"
                cx="128" cy="128" r="110"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="24"
              />
              <circle
                className="text-[#006e2a]"
                cx="128" cy="128" r="110"
                fill="transparent"
                stroke="currentColor"
                strokeDasharray="691"
                strokeDashoffset="172"
                strokeWidth="24"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-black text-[#006e2a]">82%</span>
              <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Lagos Goal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900 -mx-4 sm:-mx-8 px-4 sm:px-8 py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div>
            <div className="font-display font-extrabold text-[#006e2a] text-xl mb-4">WasteWatch Digital Conservator</div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mb-6 leading-relaxed">
              Empowering citizens to take control of their environment through data, transparency, and rewards.
            </p>
            <p className="text-sm text-slate-400">© 2024 WasteWatch Digital Conservator. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-4 items-start md:justify-end">
            <nav className="flex flex-col gap-3">
              <a className="text-slate-500 dark:text-slate-400 hover:text-[#006e2a] transition-colors text-sm font-bold" href="#">Privacy Policy</a>
              <a className="text-slate-500 dark:text-slate-400 hover:text-[#006e2a] transition-colors text-sm font-bold" href="#">Terms of Service</a>
            </nav>
            <nav className="flex flex-col gap-3">
              <a className="text-slate-500 dark:text-slate-400 hover:text-[#006e2a] transition-colors text-sm font-bold" href="#">Help Center</a>
              <a className="text-slate-500 dark:text-slate-400 hover:text-[#006e2a] transition-colors text-sm font-bold" href="#">Careers</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  )
}
