"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export default function AuthorityReports() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Page Title & Search Bar - To complement the Layout Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-black text-slate-800 dark:text-white tracking-tight">Active Reports</h2>
          <div className="flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-3 py-1.5 rounded-full border border-primary/20">
            <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(20,83,45,0.6)]"></span>
            <span className="text-primary dark:text-primary-alt text-xs font-bold uppercase tracking-wider">128 Live</span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm outline-none" 
              placeholder="Search by ID, location..." 
              type="text"
            />
          </div>
          <button className="hidden sm:flex items-center gap-2 bg-primary text-white py-2 px-4 rounded-xl font-bold text-sm shadow-md hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
            <span className="material-icons-round text-lg">add</span>
            New Internal Report
          </button>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider relative z-10 group-hover:text-red-500 transition-colors">High Priority</p>
          <div className="flex items-end justify-between mt-3 relative z-10">
            <h3 className="text-4xl font-black text-slate-800 dark:text-white group-hover:text-red-600 transition-colors">24</h3>
            <span className="text-red-600 dark:text-red-500 text-xs font-bold flex items-center bg-red-50 dark:bg-red-900/20 px-2 py-1.5 rounded-lg border border-red-100 dark:border-red-900/50">
              <span className="material-icons-round text-[16px] mr-1">trending_up</span> 12%
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider relative z-10 group-hover:text-amber-500 transition-colors">Pending Assignment</p>
          <div className="flex items-end justify-between mt-3 relative z-10">
            <h3 className="text-4xl font-black text-slate-800 dark:text-white group-hover:text-amber-500 transition-colors">42</h3>
            <span className="text-emerald-600 dark:text-emerald-500 text-xs font-bold flex items-center bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1.5 rounded-lg border border-emerald-100 dark:border-emerald-900/50">
              <span className="material-icons-round text-[16px] mr-1">trending_down</span> 5%
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider relative z-10 group-hover:text-primary transition-colors">Avg. Response Time</p>
          <div className="flex items-end justify-between mt-3 relative z-10">
            <h3 className="text-4xl font-black text-slate-800 dark:text-white group-hover:text-primary transition-colors">2.4h</h3>
            <span className="text-emerald-600 dark:text-emerald-500 text-xs font-bold flex items-center bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1.5 rounded-lg border border-emerald-100 dark:border-emerald-900/50">
              <span className="material-icons-round text-[16px] mr-1">task_alt</span> Target met
            </span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-sm border border-primary/20 hover:bg-primary/90 transition-colors">
          All Reports
        </button>
        <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-xl flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary transition-colors shadow-sm">
          Organic
        </button>
        <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-xl flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary transition-colors shadow-sm">
          Plastic
        </button>
        <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-xl flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary transition-colors shadow-sm">
          Medical
        </button>
        <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-xl flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary transition-colors shadow-sm ml-auto">
          <span className="material-icons-round text-[16px]">tune</span> Filter
        </button>
      </div>

      {/* Reports Table - Similar overflow setup as main dashboard */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-300 dark:hover:scrollbar-thumb-slate-600">
          <table className="w-full text-left min-w-[900px]">
            <thead className="bg-slate-50/80 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="px-6 py-4 text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Report Details</th>
                <th className="px-6 py-4 text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Waste Type</th>
                <th className="px-6 py-4 text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Health Risk</th>
                <th className="px-6 py-4 text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Time Elapsed</th>
                <th className="px-6 py-4 text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
              
              {/* Row 1 */}
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600 group-hover:scale-105 transition-transform">
                      <img 
                        alt="Waste photo" 
                        className="object-cover w-full h-full" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyvNBO7hv5Y9fHX1XDfhyF1yrtr0NuJ5Y8EzUU4HjPrBKAdUH4ObjfDxY1Gxnwl0VrhLGDJiVHKGwYl0JnsBbZYtQG_MQmPuUeZC6wCZUTFTXAJNY85SBUelBF-ebj-IX1wnYwxL2SWMoUR1SvHv0aC870MnybbbnppqEvV9gs5qQ2GrqZIyfHlCd3EBYZt5pKeXt-SfRoDa0PcCXIbsIF6e5EPnY61HqLMM_3K0DPVj99Mm1S_mMn8glnmBly_IUl2yNB2Iafbi0"
                      />
                    </div>
                    <div>
                      <p className="text-[15px] font-black text-primary dark:text-primary-alt group-hover:underline cursor-pointer">#REP-8291</p>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">Public Illegal Dumping</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-md text-[11px] font-bold uppercase tracking-wide">Plastic</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-900/10 px-2.5 py-1 rounded-md w-fit border border-amber-100 dark:border-amber-900/30">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.4)]"></span>
                    <span className="text-xs font-bold uppercase tracking-wide">Medium</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className="material-icons-round text-slate-400 text-[16px]">location_on</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Ikeja, Lagos</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">45m ago</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="px-4 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white dark:text-primary-alt dark:border-primary-alt dark:hover:bg-primary-alt dark:hover:text-slate-900 transition-colors rounded-xl text-xs font-bold shadow-sm active:scale-95">Assign Crew</button>
                    <button className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <span className="material-icons-round text-[20px]">more_vert</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600 group-hover:scale-105 transition-transform">
                      <img 
                        alt="Waste photo" 
                        className="object-cover w-full h-full" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD073KR0BrW6sOva0_y5jK3i3dYaTr2yml4KSeKc2tOh6DXkBOs_CplIDGWaqlDIAfIiL_3g-WDT7EDF5Bwr-JQMdyUPi8ETIaEMBl3ess6AUjj1Y093ish2Xzz_akTtBF0O-a-GamAsEznHvvTXp6-Pg7dgNazLriwnyaSwcWrZyeu-Vt9CA5Z0V4-H3qpl7rehgh3YQ-oL0YMgY6qIhA7C29EOrHqgdGriK9haiZLK3ynRk9mknEYtUdKRlGRlnMGGWfBICGJkgs"
                      />
                    </div>
                    <div>
                      <p className="text-[15px] font-black text-primary dark:text-primary-alt group-hover:underline cursor-pointer">#REP-8288</p>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">Hospital Waste Leak</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-md text-[11px] font-bold uppercase tracking-wide">Medical</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-red-600 dark:text-red-500 bg-red-50 dark:bg-red-900/10 px-2.5 py-1 rounded-md w-fit border border-red-100 dark:border-red-900/30">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.6)]"></span>
                    <span className="text-xs font-bold uppercase tracking-wide">High Risk</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className="material-icons-round text-slate-400 text-[16px]">location_on</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Surulere, Lagos</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">12m ago</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="px-4 py-2 bg-primary text-white border-2 border-primary hover:bg-primary/90 hover:border-primary/90 transition-colors rounded-xl text-xs font-bold shadow-md shadow-primary/20 active:scale-95">Quick Dispatch</button>
                    <button className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <span className="material-icons-round text-[20px]">more_vert</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600 group-hover:scale-105 transition-transform">
                      <img 
                        alt="Waste photo" 
                        className="object-cover w-full h-full" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5_G7veJNDaQ_xtcaQE9fgUVIof3Gxs9PtjsczAw5MkYHv8LWk0wger_01HKAWdhlsRXIkV-csUVKRz88AuqGiXlTZnF2D8ZIwB7kAXk_JKIO2Q-XX15hud9qMSHkQcz-F91aXw2_PK50Jl7wdJZvN03a3cAR-TcP9ip1w6SoH4LHiThW7DJ0xIGvz8n80MJbMbshCTaOqr0fPdm0mtGgKOhT0Q31eCr3sG2DxFBChFkEoKKD37H3cWCDPuouwnrZ-H1IldSSWdJM"
                      />
                    </div>
                    <div>
                      <p className="text-[15px] font-black text-primary dark:text-primary-alt group-hover:underline cursor-pointer">#REP-8275</p>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">Market Overflow</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-md text-[11px] font-bold uppercase tracking-wide">Organic</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md w-fit border border-slate-200 dark:border-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    <span className="text-xs font-bold uppercase tracking-wide">Low</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className="material-icons-round text-slate-400 text-[16px]">location_on</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Lekki Phase 1, Lagos</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">3.5h ago</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="px-4 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white dark:text-primary-alt dark:border-primary-alt dark:hover:bg-primary-alt dark:hover:text-slate-900 transition-colors rounded-xl text-xs font-bold shadow-sm active:scale-95">Assign Crew</button>
                    <button className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <span className="material-icons-round text-[20px]">more_vert</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600 group-hover:scale-105 transition-transform">
                      <span className="material-icons-round text-slate-400 text-2xl">image</span>
                    </div>
                    <div>
                      <p className="text-[15px] font-black text-primary dark:text-primary-alt group-hover:underline cursor-pointer">#REP-8270</p>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">Uncategorized Debris</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                   <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-900/30 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-md text-[11px] font-bold uppercase tracking-wide">Other</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-900/10 px-2.5 py-1 rounded-md w-fit border border-amber-100 dark:border-amber-900/30">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.4)]"></span>
                    <span className="text-xs font-bold uppercase tracking-wide">Medium</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className="material-icons-round text-slate-400 text-[16px]">location_on</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Apapa, Lagos</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">5h ago</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="px-4 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white dark:text-primary-alt dark:border-primary-alt dark:hover:bg-primary-alt dark:hover:text-slate-900 transition-colors rounded-xl text-xs font-bold shadow-sm active:scale-95">Assign Crew</button>
                    <button className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <span className="material-icons-round text-[20px]">more_vert</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Showing <span className="font-bold text-slate-700 dark:text-slate-200">1-10</span> of <span className="font-bold text-slate-700 dark:text-slate-200">128</span> results</p>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 text-slate-400" disabled>
              <span className="material-icons-round text-[20px]">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm text-slate-600 dark:text-slate-300">
              <span className="material-icons-round text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Map & Optimization Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Simplified Map Preview */}
        <div className="md:col-span-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-black flex items-center gap-2">
              <span className="material-icons-round text-primary dark:text-primary-alt">public</span>
              Geospatial Hotspots
            </h4>
            <button className="text-xs text-primary dark:text-primary-alt font-extrabold hover:underline uppercase tracking-widest bg-primary/10 dark:bg-primary-alt/10 px-3 py-1.5 rounded-lg border border-primary/20 dark:border-primary-alt/20">Expand View</button>
          </div>
          
          <div className="flex-1 min-h-[160px] bg-slate-100 dark:bg-slate-900 rounded-xl relative overflow-hidden group border border-slate-200 dark:border-slate-800 shadow-inner">
             {/* Map Grid Pattern */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1b5e20_1.5px,transparent_1.5px)] [background-size:24px_24px] dark:opacity-[0.15]"></div>
             <div className="absolute inset-0 bg-primary/5 dark:bg-primary-alt/5 mix-blend-multiply"></div>
             
             {/* Map Markers Mockup */}
             <div className="absolute top-1/4 left-1/3 w-3.5 h-3.5 bg-red-600 border-[2px] border-white dark:border-slate-900 rounded-full shadow-lg shadow-red-500/50 animate-pulse"></div>
             <div className="absolute top-1/2 left-2/3 w-3.5 h-3.5 bg-amber-500 border-[2px] border-white dark:border-slate-900 rounded-full shadow-lg shadow-amber-500/50"></div>
             <div className="absolute top-[60%] left-1/2 w-3.5 h-3.5 bg-red-600 border-[2px] border-white dark:border-slate-900 rounded-full shadow-lg shadow-red-500/50"></div>
             <div className="absolute top-[20%] right-1/4 w-3.5 h-3.5 bg-primary dark:bg-primary-alt border-[2px] border-white dark:border-slate-900 rounded-full shadow-lg shadow-primary/50"></div>
          </div>
        </div>

        {/* AI Insight Card */}
        <div className="bg-primary border-4 border-white dark:border-slate-900 shadow-2xl rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10">
            <span className="material-icons-round text-3xl mb-4 text-emerald-200">auto_awesome</span>
            <h4 className="text-2xl font-black leading-tight tracking-tight">Optimization Insight</h4>
            <p className="text-sm mt-3 text-emerald-100 leading-relaxed font-medium">
              System suggests deploying <span className="bg-white/20 px-1.5 py-0.5 rounded text-white font-bold">Crew Delta</span> to <span className="font-bold underline decoration-emerald-300">Surulere</span> for 3 high-risk reports to minimize travel time by 22%.
            </p>
          </div>
          <button className="w-full mt-6 py-3 bg-white text-primary font-black tracking-wide uppercase rounded-xl text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg relative z-10">
            Review Optimization
          </button>
        </div>
      </div>
    </div>
  )
}
