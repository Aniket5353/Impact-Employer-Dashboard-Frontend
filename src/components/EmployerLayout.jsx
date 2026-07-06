import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";

const nav = [
  { to: "/employer", end: true, label: "Overview", icon: IconGrid },
  { to: "/employer/jobs", label: "Job Listings", icon: IconBriefcase, badge: "12" },
  { to: "/employer/post-job", label: "Post a Job", icon: IconPlus },
  { to: "/employer/candidates", label: "Candidates", icon: IconUsers, badge: "48" },
  { to: "/employer/interviews", label: "Interviews", icon: IconCalendar },
  { to: "/employer/messages", label: "Messages", icon: IconChat, badge: "3" },
  { to: "/employer/company", label: "Company", icon: IconBuilding },
  { to: "/employer/profile", label: "Profile", icon: IconUser },
];

export default function EmployerLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-surface flex">
      <div className="hidden lg:block sticky top-0 h-screen">
        <Sidebar />
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute inset-y-0 left-0 h-full">
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0 flex flex-col">
        <TopBar onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 px-4 md:px-8 py-6 md:py-8 max-w-[1400px] w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function Sidebar({ onNavigate }) {
  return (
    <aside className="flex h-full w-72 flex-col bg-primary text-primary-foreground">
      <div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-primary font-extrabold">IM</div>
        <div>
          <div className="text-base font-bold tracking-tight">IMMPACT</div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">Employer Portal</div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-1">
        <div className="px-3 pb-2 text-[10px] uppercase tracking-[0.2em] text-white/40">Workspace</div>
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onNavigate}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gold text-primary shadow-lg shadow-black/20"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`grid h-8 w-8 place-items-center rounded-md ${isActive ? "bg-primary/10" : "bg-white/5 group-hover:bg-white/10"}`}>
                    <Icon />
                  </span>
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${isActive ? "bg-primary text-gold" : "bg-white/10 text-white/80"}`}>
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="m-3 rounded-2xl bg-gradient-to-br from-gold/90 to-gold p-4 text-primary">
        <div className="text-xs font-semibold uppercase tracking-wider opacity-70">Sponsor License</div>
        <div className="mt-1 text-sm font-bold">Verified · Tier 2</div>
        <div className="mt-1 text-[11px] opacity-70">Renews 12 Mar 2027</div>
        <Link to="/employer/company" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold hover:underline">
          Manage license →
        </Link>
      </div>
    </aside>
  );
}

function TopBar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-border hover:bg-muted" aria-label="Open menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div className="flex-1 max-w-md relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="search" placeholder="Search candidates, jobs, applications…" className="w-full h-10 rounded-lg border border-border bg-card pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40" />
        </div>
        <button className="hidden md:inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-muted">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span className="grid place-items-center h-5 min-w-5 px-1 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold">5</span>
        </button>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <div className="text-sm font-semibold leading-tight">Aisha Rahman</div>
            <div className="text-xs text-muted-foreground">Northwind Health · HR Lead</div>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-full bg-brand text-brand-foreground font-bold">AR</div>
        </div>
      </div>
    </header>
  );
}

function IconGrid() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>; }
function IconBriefcase() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>; }
function IconPlus() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>; }
function IconUsers() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>; }
function IconCalendar() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>; }
function IconChat() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>; }
function IconBuilding() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22V12h6v10"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M16 10h.01"/></svg>; }
function IconUser() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>; }
