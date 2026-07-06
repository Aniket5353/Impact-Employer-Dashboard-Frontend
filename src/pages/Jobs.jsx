import { useState } from "react";
import { Link } from "react-router-dom";

const jobs = [
  { id: "J-1042", title: "Senior Care Assistant", location: "Manchester, UK", type: "Full-time", visa: "Health & Care Worker", salary: "£23,200 – £26,000", applicants: 34, new: 12, status: "Active", posted: "3 days ago" },
  { id: "J-1041", title: "Registered Nurse (RGN)", location: "Birmingham, UK", type: "Full-time", visa: "Health & Care Worker", salary: "£29,000 – £34,000", applicants: 21, new: 6, status: "Active", posted: "1 week ago" },
  { id: "J-1039", title: "Software Engineer — Backend", location: "Remote (UK)", type: "Full-time", visa: "Skilled Worker", salary: "£55,000 – £72,000", applicants: 48, new: 0, status: "Paused", posted: "2 weeks ago" },
  { id: "J-1037", title: "Chef de Partie", location: "London, UK", type: "Full-time", visa: "Skilled Worker", salary: "£28,000 – £32,000", applicants: 15, new: 3, status: "Active", posted: "5 days ago" },
  { id: "J-1036", title: "Warehouse Team Lead", location: "Leeds, UK", type: "Full-time", visa: "Skilled Worker", salary: "£26,500", applicants: 9, new: 0, status: "Draft", posted: "—" },
  { id: "J-1030", title: "Occupational Therapist", location: "Bristol, UK", type: "Full-time", visa: "Health & Care Worker", salary: "£33,000 – £38,000", applicants: 12, new: 0, status: "Closed", posted: "1 month ago" },
];

const filters = ["All", "Active", "Paused", "Draft", "Closed"];

export default function Jobs() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? jobs : jobs.filter((j) => j.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Job Listings</h1>
          <p className="text-muted-foreground mt-1">Create, edit, pause or close your sponsored roles.</p>
        </div>
        <Link to="/employer/post-job" className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:bg-primary/90 transition">
          + Post a new job
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-card border border-border p-2">
        {filters.map((f) => {
          const count = f === "All" ? jobs.length : jobs.filter((j) => j.status === f).length;
          return (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-xl text-sm font-medium transition ${filter === f ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"}`}>
              {f} <span className="opacity-60 ml-1">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-4">
        {filtered.map((j) => (
          <div key={j.id} className="group rounded-2xl bg-card border border-border p-5 md:p-6 hover:border-brand/40 hover:shadow-sm transition">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <StatusBadge status={j.status} />
                  <span className="text-xs text-muted-foreground">#{j.id}</span>
                  <span className="text-xs text-muted-foreground">· Posted {j.posted}</span>
                </div>
                <h3 className="text-lg font-bold">{j.title}</h3>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span>{j.location}</span>
                  <span>{j.type}</span>
                  <span>{j.salary}</span>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded-md bg-gold-soft text-primary font-medium">
                  ★ Sponsored — {j.visa}
                </div>
              </div>
              <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-2 md:min-w-[140px]">
                <div className="text-center md:text-right">
                  <div className="text-2xl font-bold">{j.applicants}</div>
                  <div className="text-xs text-muted-foreground">applicants{j.new > 0 && <span className="text-gold font-semibold"> · +{j.new} new</span>}</div>
                </div>
                <div className="flex gap-2">
                  <button className="h-9 px-3 text-xs font-semibold rounded-lg border border-border hover:bg-muted">Edit</button>
                  {j.status === "Active" && <button className="h-9 px-3 text-xs font-semibold rounded-lg border border-border hover:bg-muted">Pause</button>}
                  {j.status === "Paused" && <button className="h-9 px-3 text-xs font-semibold rounded-lg bg-brand text-brand-foreground">Resume</button>}
                  {j.status === "Draft" && <button className="h-9 px-3 text-xs font-semibold rounded-lg bg-primary text-primary-foreground">Publish</button>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const map = {
    Active: "bg-success/15 text-success",
    Paused: "bg-gold/20 text-primary",
    Draft: "bg-muted text-muted-foreground",
    Closed: "bg-destructive/15 text-destructive",
  };
  return (
    <span className={`inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md ${map[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
