"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export default function AuthorityPortal() {
  const [isResolutionModalOpen, setIsResolutionModalOpen] = useState(false)
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null)

  const openResolveModal = (reportId: string) => {
    setSelectedReportId(reportId)
    setIsResolutionModalOpen(true)
  }

  return (
    <>
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wider relative z-10 transition-colors group-hover:text-primary">Unresolved Reports</span>
            <span className="material-icons-round text-primary relative z-10 opacity-80 group-hover:scale-110 transition-transform">pending_actions</span>
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold relative z-10 group-hover:text-primary transition-colors">142</p>
          <div className="mt-3 flex items-center text-red-500 bg-red-50 dark:bg-red-900/20 px-2 py-1 w-fit rounded-lg text-xs font-semibold relative z-10">
            <span className="material-icons-round text-[14px] mr-1">trending_up</span>
            +12% from yesterday
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wider relative z-10 transition-colors group-hover:text-red-500">High Risk Items</span>
            <span className="material-icons-round text-red-500 relative z-10 opacity-80 group-hover:scale-110 transition-transform">warning</span>
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold relative z-10 group-hover:text-red-500 transition-colors">28</p>
          <div className="mt-3 flex items-center text-slate-500 bg-slate-50 dark:bg-slate-900/50 px-2 py-1 w-fit rounded-lg text-xs font-medium relative z-10">
            <span className="material-icons-round text-[14px] mr-1">timer</span>
            Immediate dispatch req.
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wider relative z-10 transition-colors group-hover:text-blue-500">Crews En Route</span>
            <span className="material-icons-round text-blue-500 relative z-10 opacity-80 group-hover:scale-110 transition-transform">local_shipping</span>
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold relative z-10 group-hover:text-blue-500 transition-colors">14</p>
          <div className="mt-3 flex items-center text-slate-500 bg-slate-50 dark:bg-slate-900/50 px-2 py-1 w-fit rounded-lg text-xs font-medium relative z-10">
            <span className="material-icons-round text-[14px] mr-1">public</span>
            Across 6 zones
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wider relative z-10 transition-colors group-hover:text-green-500">Resolved (24h)</span>
            <span className="material-icons-round text-green-500 relative z-10 opacity-80 group-hover:scale-110 transition-transform">task_alt</span>
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold relative z-10 group-hover:text-green-500 transition-colors">56</p>
          <div className="mt-3 flex items-center text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 w-fit rounded-lg text-xs font-semibold relative z-10">
            <span className="material-icons-round text-[14px] mr-1">verified</span>
            100% photo verified
          </div>
        </div>
      </div>

      {/* Main Reports Table Area */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden mb-8">
        {/* Filters/Actions Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-auto min-w-[180px] flex items-center">
              <span className="material-icons-round absolute left-3 top-1.5 text-slate-400 text-[12px]">location_on</span>
              <select className="pl-10 pr-8 py-2 w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none transition-shadow">
                <option>All Areas (Lagos)</option>
                <option>Ikeja</option>
                <option>Lekki Phase 1</option>
                <option>Mushin</option>
                <option>Surulere</option>
                <option>Yaba</option>
              </select>
              <span className="material-icons-round absolute right-3 top-1.5 text-slate-400 pointer-events-none">expand_more</span>
            </div>
            <div className="relative w-full sm:w-auto min-w-[180px]">
              <span className="material-icons-round absolute left-3 top-1.5 text-slate-400 text-[12px]">category</span>
              <select className="pl-10 pr-8 py-2 w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none transition-shadow">
                <option>All Waste Types</option>
                <option>Organic</option>
                <option>Plastic/Recyclables</option>
                <option>Hazardous/Chemical</option>
                <option>Medical Waste</option>
                <option>Construction Debris</option>
              </select>
              <span className="material-icons-round absolute right-3 top-1.5 text-slate-400 pointer-events-none">expand_more</span>
            </div>
            <div className="relative w-full sm:w-auto min-w-[200px]">
              <span className="material-icons-round absolute left-3 top-1.5 text-slate-400 text-[12px]">sort</span>
              <select className="pl-10 pr-8 py-2 w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none transition-shadow">
                <option>Sort by: Risk (High to Low)</option>
                <option>Sort by: Age (Newest)</option>
                <option>Sort by: Age (Oldest)</option>
              </select>
              <span className="material-icons-round absolute right-3 top-1.5 text-slate-400 pointer-events-none">expand_more</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 w-full md:w-auto justify-end">
            <button className="bg-primary text-white w-full md:w-auto px-5 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center hover:bg-primary/90 transition-all shadow-md active:scale-95 gap-2">
              <span className="material-icons-round text-[18px]">refresh</span>
              Update Feed
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-300 dark:hover:scrollbar-thumb-slate-600">
          <table className="w-full text-left min-w-[900px]">
            <thead className="bg-slate-50 dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 text-xs uppercase font-bold sticky top-0">
              <tr>
                <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 w-[300px]">Report Details</th>
                <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">Area</th>
                <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">Waste Type</th>
                <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">Health Risk</th>
                <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">Age</th>
                <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700/80">

              {/* Row 1 */}
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-slate-200 dark:bg-slate-700 overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <img
                        alt="Waste photo"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9c66WECapkuCDz8nmavvIWiUC2Nwtu1rPIgbRnTacr2eF18vYSa-7SHF_PLF4AAzIhi3R-txWfoiZNOEcjuo8gHrvF4vVwKfhGuOo6cVRd5cK7EW3yCdqV_pvUBOKg2i8RoavLcig672J-FrFkuqiK5Lw1e2LMlNXPYYxNm_mt2MXTYj_0RC3XFTyAZR38LqsHaBnBpFrA4tPt9XkU8NkyTXEl0JLFPIg8H81bp5PQmChb-HUxoFfSJGidGm4wwupCW1CmFNw9is"
                      />
                    </div>
                    <div>
                      <p className="font-extrabold text-[15px] group-hover:text-primary transition-colors">REP-7829</p>
                      <p className="text-xs text-slate-500 mt-1 max-w-[200px] truncate" title="Opposite Zenith Bank, Herbert Macaulay Way">Opposite Zenith Bank, Herbert Macaulay Way</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span>
                    Yaba
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-md text-xs font-bold border border-purple-200 dark:border-purple-800">
                    <span className="material-icons-round text-[14px] mr-1 inline-block pb-[1px]">medication</span>
                    Medical Waste
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2 bg-red-50 dark:bg-red-900/10 px-3 py-1.5 rounded-lg border border-red-100 dark:border-red-900/50 w-fit">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                    <span className="text-red-600 dark:text-red-400 text-xs font-black uppercase tracking-wider">Critical</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">42m ago</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-bold hover:bg-primary/20 hover:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all active:scale-95 shadow-sm">
                      Assign
                    </button>
                    <button className="px-3 py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors active:scale-95 shadow-sm" title="View Details">
                      <span className="material-icons-round text-sm pointer-events-none">visibility</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-slate-200 dark:bg-slate-700 overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <img
                        alt="Waste photo"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMtn77RkyuP_OHaUkcThHMHYw47sm13E1CiHmszg9aROJNP6GuXetAH4uIZzX4pDayGI3VGgtiG5CqNLDxY9Vra6BTxNaKIsfi-dKTfSJHJYYHZiCvylZ-gZ-pcXnqD1a1QT4WLOgphxY71do5cBigHmouXZZn6wf6jl-_b6HatKo7d-HFVEk0ZovndNI6Zsh1z9v9w3k6krjNul8HS7K-P1yWO0vZTYEjl_UPyKpfUA9DAkMGi8iDETo_tmwEDUBUAF-xW05fd50"
                      />
                    </div>
                    <div>
                      <p className="font-extrabold text-[15px] group-hover:text-primary transition-colors">REP-7825</p>
                      <p className="text-xs text-slate-500 mt-1 max-w-[200px] truncate" title="Block 4, Jakande Estate">Block 4, Jakande Estate</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span>
                    Lekki
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-md text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                    <span className="material-icons-round text-[14px] mr-1 inline-block pb-[1px]">compost</span>
                    Organic
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2 bg-amber-50 dark:bg-amber-900/10 px-3 py-1.5 rounded-lg border border-amber-100 dark:border-amber-900/30 w-fit">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.4)]"></span>
                    <span className="text-amber-600 dark:text-amber-500 text-xs font-black uppercase tracking-wider">Medium</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">2h ago</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button className="px-4 py-2 bg-white dark:bg-slate-900 text-primary border border-primary/40 rounded-lg text-xs font-bold hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary/20 transition-all active:scale-95 shadow-sm">
                      Assign
                    </button>
                    <button
                      onClick={() => openResolveModal('REP-7825')}
                      className="px-4 py-2 border border-slate-200 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-bold hover:border-green-500 hover:text-green-600 transition-colors active:scale-95 shadow-sm"
                    >
                      Resolve
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 3 - Processing */}
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group opacity-85">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-14 h-14 rounded-xl bg-slate-200 dark:bg-slate-700 overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex-shrink-0">
                      <img
                        alt="Waste photo"
                        className="w-full h-full object-cover grayscale brightness-75 transition-all"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUrTbJW3SqTkDTnIOkMGC8ak6Kq8f5fvYZRrH9cCOQYFj88c6_r0mm8e9_k2-k_eFo0gOnMk44DynyTrLBE0aA62Ua34_4bVsOsQNRKVp_UFV8jCp_NhNSUMC3e_LkmZ_oTR3qO4lRUMzuKKJQxNzmsXJzbiwPDvwfPusvAZKQ7L5VaolB3lBTFo80noorqyolgMsaOzcLPWCfjw6VfN4eu2_OE2NvwuUUu4VZSxtaISVDz7SnrKMHE-y2EYkKzYLDXbmd2LS5nsM"
                      />
                      <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center backdrop-blur-[1px]">
                        <span className="material-icons-round text-white/90 drop-shadow-md">local_shipping</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-extrabold text-[15px] text-slate-600 dark:text-slate-300 line-through decoration-slate-400">REP-7812</p>
                      <p className="text-xs text-slate-500 mt-1 max-w-[200px] truncate" title="Allen Avenue Junction">Allen Avenue Junction</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span>
                    Ikeja
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-md text-xs font-bold border border-blue-200 dark:border-blue-800">
                    <span className="material-icons-round text-[14px] mr-1 inline-block pb-[1px]">recycling</span>
                    Plastic
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 w-fit">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    <span className="text-slate-600 dark:text-slate-400 text-xs font-black uppercase tracking-wider">Low</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">5h ago</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <div className="flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 border border-blue-200 dark:border-blue-800/50 rounded-lg text-xs font-bold shadow-sm">
                      <span className="material-icons-round text-[16px] mr-1.5 animate-bounce">local_shipping</span>
                      CREW 04 ARRIVING
                    </div>
                  </div>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-slate-200 dark:bg-slate-700 overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <img
                        alt="Waste photo"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0sSAmZ6jca17KKziDecmkgTB-39AfMNrUmnvu-9XcxFBBPNTAOS-T2fpEPu-ZaPWofZNsvuqidSU9vTD7bbIHl_equJ_2nP3OE4nV0i4s4JGCe2T1cShwlOUQrzHVKC04Po4icBk51teJVg0cQ_M_OObD3LEVOEfEP_iVmQDRrLXrXezmoAQN9Bg72IpGC-CbUsUzUaxglZoDG4-HbKf1FegecBxOovo5vGz6JJo-MgbrWgMFFkHIsHKBLxkMlKolUQZc-SMmwwc"
                      />
                    </div>
                    <div>
                      <p className="font-extrabold text-[15px] group-hover:text-primary transition-colors">REP-7798</p>
                      <p className="text-xs text-slate-500 mt-1 max-w-[200px] truncate" title="Iyana-Ipaja Market Entrance">Iyana-Ipaja Market</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span>
                    Alimosho
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-md text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                    <span className="material-icons-round text-[14px] mr-1 inline-block pb-[1px]">compost</span>
                    Organic
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2 bg-red-50 dark:bg-red-900/10 px-3 py-1.5 rounded-lg border border-red-100 dark:border-red-900/50 w-fit">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                    <span className="text-red-500 text-xs font-black uppercase tracking-wider">High</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">1d ago</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-bold hover:bg-primary/20 hover:border-primary/40 focus:ring-2 focus:ring-primary/20 transition-all active:scale-95 shadow-sm">
                      Assign
                    </button>
                    <button className="px-3 py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors active:scale-95 shadow-sm" title="View Details">
                      <span className="material-icons-round text-sm pointer-events-none">visibility</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination/Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing <span className="font-bold text-slate-700 dark:text-slate-200">1-4</span> of <span className="font-bold text-slate-700 dark:text-slate-200">142</span> reports
          </p>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg text-sm font-semibold disabled:opacity-50 text-slate-400 dark:text-slate-500 cursor-not-allowed" disabled>
              Previous
            </button>
            <button className="px-4 py-2 border border-primary bg-primary/10 text-primary dark:bg-primary/20 rounded-lg text-sm font-bold shadow-inner">
              1
            </button>
            <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm">
              2
            </button>
            <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Map & Crews */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">

        {/* Geospatial Density Map */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-extrabold text-lg flex items-center">
              <span className="material-icons-round text-primary mr-2 bg-primary/10 p-1.5 rounded-lg">location_searching</span>
              Geospatial Density Map
            </h3>
            <span className="text-xs font-bold px-2.5 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded border border-green-200 dark:border-green-800 uppercase tracking-wider">Live</span>
          </div>
          <div className="w-full flex-1 min-h-[300px] bg-slate-100 dark:bg-slate-900 rounded-xl relative overflow-hidden group shadow-inner border border-slate-200 dark:border-slate-800">
            {/* Map Grid Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1b5e20_1.5px,transparent_1.5px)] [background-size:24px_24px] dark:opacity-[0.15]"></div>

            {/* Pulsing Dots / Heatmap points */}
            <div className="absolute top-1/4 left-1/3 w-10 h-10 bg-red-500/30 rounded-full animate-ping z-10"></div>
            <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-600 rounded-full z-20 translate-x-[14px] translate-y-[14px] shadow-lg shadow-red-500/50"></div>

            <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-amber-500/30 rounded-full animate-ping z-10" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-amber-500 rounded-full z-20 translate-x-[18px] translate-y-[18px] shadow-lg shadow-amber-500/50"></div>

            <div className="absolute top-1/2 left-2/3 w-8 h-8 bg-primary/30 rounded-full animate-ping z-10" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-2/3 w-2.5 h-2.5 bg-primary rounded-full z-20 translate-x-[11px] translate-y-[11px] shadow-lg shadow-primary/50"></div>

            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-slate-300 dark:border-slate-600">
                <span className="text-slate-800 dark:text-slate-200 font-bold text-sm tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Map System Online
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Available Crews Container */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col shadow-sm">
          <h3 className="font-extrabold text-lg mb-6 flex items-center">
            <span className="material-icons-round text-primary mr-2 bg-primary/10 p-1.5 rounded-lg">person_pin</span>
            Available Crews
          </h3>
          <div className="space-y-4 flex-1">
            <div className="flex items-center justify-between p-4 border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 rounded-xl group hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/20 text-primary rounded-lg flex items-center justify-center font-black text-sm border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">C01</div>
                <div>
                  <p className="text-[15px] font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">Crew Alpha</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                    Stationary (Ikeja)
                  </p>
                </div>
              </div>
              <button onClick={() => alert('Assigned Crew Alpha to new mission')} className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 flex items-center justify-center shadow-sm group-hover:border-primary group-hover:text-primary transition-colors text-slate-400">
                <span className="material-icons-round text-[18px]">add</span>
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-100 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-900/50 rounded-xl opacity-90 cursor-not-allowed">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-lg flex items-center justify-center font-black text-sm">C04</div>
                <div>
                  <p className="text-[15px] font-bold text-slate-800 dark:text-slate-400">Crew Delta</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-bold flex items-center mt-0.5 animate-pulse">
                    <span className="material-icons-round text-[12px] mr-1">local_shipping</span>
                    Active - On Mission
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 flex items-center justify-center text-slate-300 dark:text-slate-600">
                <span className="material-icons-round text-[20px]">lock</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 rounded-xl group hover:border-primary/50 transition-colors cursor-pointer shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/20 text-primary rounded-lg flex items-center justify-center font-black text-sm border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">C09</div>
                <div>
                  <p className="text-[15px] font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">Crew Zulu</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                    Stationary (Yaba)
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 flex items-center justify-center shadow-sm group-hover:border-primary group-hover:text-primary transition-colors text-slate-400">
                <span className="material-icons-round text-[18px]">add</span>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 py-3 border-2 border-dashed border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 rounded-xl text-sm font-bold hover:border-primary hover:text-primary hover:bg-primary/5 transition-all outline-none focus:ring-4 focus:ring-primary/10 tracking-wide uppercase">
            Manage All Field Staff
          </button>
        </div>
      </div>

      {/* Resolution Modal Overlay */}
      {isResolutionModalOpen && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-800 w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-8 transform transition-all animate-in zoom-in-95 duration-200 border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">Mark as Resolved</h2>
                <p className="text-sm font-medium text-slate-500 mt-1">Report ID: <span className="font-bold text-slate-700 dark:text-slate-300">{selectedReportId}</span></p>
              </div>
              <button
                className="w-8 h-8 flex items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-full text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                onClick={() => setIsResolutionModalOpen(false)}
                title="Close"
              >
                <span className="material-icons-round text-[20px]">close</span>
              </button>
            </div>

            <div className="space-y-6">
              {/* Photo Upload Area */}
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 text-center flex flex-col items-center justify-center group hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-white dark:bg-slate-700 shadow-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-icons-round text-3xl text-slate-400 group-hover:text-primary transition-colors">add_a_photo</span>
                </div>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Click to upload photo proof</p>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500 mt-2 bg-slate-200/50 dark:bg-slate-900 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">Required for closure</p>
              </div>

              {/* Notes Input */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">Completion Notes (Optional)</label>
                <textarea
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow shadow-inner resize-none min-h-[100px]"
                  placeholder="E.g., Cleared 5 tons of organic waste..."
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-2">
                <button
                  className="flex-1 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm shadow-sm active:scale-95"
                  onClick={() => setIsResolutionModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="flex-[2] py-3 bg-primary border border-primary/20 text-white font-bold tracking-wide rounded-xl hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all text-sm shadow-md active:scale-95 flex items-center justify-center gap-2"
                  onClick={() => alert(`Report ${selectedReportId} sent for admin verification!`)}
                >
                  <span className="material-icons-round text-[18px]">fact_check</span>
                  Verify & Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
