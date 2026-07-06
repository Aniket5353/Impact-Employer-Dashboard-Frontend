import { Link } from "react-router-dom";

const stats = [
  { label: "Active Jobs", value: "12", delta: "+2 this week", tone: "brand" },
  { label: "New Applications", value: "48", delta: "+18%", tone: "gold" },
  { label: "Shortlisted", value: "9", delta: "3 pending review", tone: "success" },
  { label: "Interviews Scheduled", value: "6", delta: "Next: Mon 10:00", tone: "ink" },
];

const pipeline = [
  { stage: "Applied", count: 48, color: "bg-brand/70" },
  { stage: "Screening", count: 21, color: "bg-brand" },
  { stage: "Interview", count: 9, color: "bg-gold" },
  { stage: "Offer", count: 3, color: "bg-success" },
  { stage: "Hired", count: 2, color: "bg-primary" },
];

const recentApps = [
  { name: "Rahul Verma", role: "Senior Care Assistant", country: "India", match: 94, when: "12m ago", visa: "Skilled Worker" },
  { name: "Maria Santos", role: "Registered Nurse", country: "Philippines", match: 91, when: "1h ago", visa: "Health & Care" },
  { name: "Ahmed Khalil", role: "Software Engineer", country: "Egypt", match: 88, when: "3h ago", visa: "Skilled Worker" },
  { name: "Priya Nair", role: "Care Assistant", country: "India", match: 82, when: "5h ago", visa: "Health & Care" },
  { name: "Jonas Meyer", role: "Chef de Partie", country: "Germany", match: 76, when: "Yesterday", visa: "Skilled Worker" },
];

export default function Overview() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-10">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/30 blur-3xl" />
        <div className="absolute -left-8 -bottom-8 h-40 w-40 rounded-full bg-brand/40 blur-2xl" />
        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Sponsor License · Verified
            </div>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold">Good morning, Aisha.</h1>
            <p className="mt-2 text-white/70 max-w-lg">
              You have <span className="text-gold font-semibold">18 new applications</span> and 2 interviews to confirm today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/employer/post-job" className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-primary hover:brightness-105 transition">
              + Post a job
            </Link>
            <Link to="/employer/candidates" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
              View candidates
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl bg-card border border-border p-5">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="mt-2 text-3xl font-bold">{s.value}</div>
            <div className={`mt-1 text-xs ${s.tone === "gold" ? "text-gold" : s.tone === "success" ? "text-success" : "text-muted-foreground"}`}>{s.delta}</div>
          </div>
        ))}
      </section>

      <section className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 rounded-2xl bg-card border border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">Recruitment Pipeline</h2>
              <p className="text-sm text-muted-foreground">Across all active roles</p>
            </div>
            <select className="h-9 rounded-lg border border-border bg-background px-3 text-sm">
              <option>Last 30 days</option><option>Last 7 days</option><option>All time</option>
            </select>
          </div>
          <div className="mt-6 space-y-4">
            {pipeline.map((p) => {
              const max = Math.max(...pipeline.map((x) => x.count));
              return (
                <div key={p.stage} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{p.stage}</span>
                    <span className="text-muted-foreground">{p.count}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                    <div className={`h-full ${p.color} rounded-full`} style={{ width: `${(p.count / max) * 100}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
            <div><div className="text-2xl font-bold">72%</div><div className="text-xs text-muted-foreground">Response rate</div></div>
            <div><div className="text-2xl font-bold">14d</div><div className="text-xs text-muted-foreground">Avg time-to-hire</div></div>
            <div><div className="text-2xl font-bold">4.8</div><div className="text-xs text-muted-foreground">Candidate rating</div></div>
          </div>
        </div>

        <div className="rounded-2xl bg-card border border-border p-6">
          <h2 className="text-lg font-bold">Today's Tasks</h2>
          <p className="text-sm text-muted-foreground">Stay on top of your hiring</p>
          <ul className="mt-4 space-y-3">
            {[
              { title: "Review 8 shortlisted CVs", tag: "Care Assistant", due: "Due today" },
              { title: "Confirm interview slot", tag: "Rahul Verma", due: "10:00 AM" },
              { title: "Upload updated CoS letter", tag: "Compliance", due: "This week" },
              { title: "Respond to candidate query", tag: "Maria Santos", due: "2 pending" },
            ].map((t, i) => (
              <li key={i} className="flex gap-3 items-start p-3 rounded-lg hover:bg-muted transition">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border accent-brand" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{t.title}</div>
                  <div className="mt-1 flex gap-2 items-center text-xs">
                    <span className="px-2 py-0.5 rounded-md bg-brand-soft text-brand font-medium">{t.tag}</span>
                    <span className="text-muted-foreground">{t.due}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl bg-card border border-border">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-lg font-bold">Recent Applications</h2>
            <p className="text-sm text-muted-foreground">Fresh matches ranked by AI compatibility</p>
          </div>
          <Link to="/employer/candidates" className="text-sm font-semibold text-brand hover:underline">View all →</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase text-muted-foreground bg-muted/50">
              <tr>
                <th className="text-left font-medium px-6 py-3">Candidate</th>
                <th className="text-left font-medium px-6 py-3">Applied for</th>
                <th className="text-left font-medium px-6 py-3">From</th>
                <th className="text-left font-medium px-6 py-3">Visa route</th>
                <th className="text-left font-medium px-6 py-3">AI Match</th>
                <th className="text-right font-medium px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentApps.map((c) => (
                <tr key={c.name} className="hover:bg-muted/40">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-soft text-brand text-xs font-bold">
                        {c.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <div className="font-medium">{c.name}</div>
                        <div className="text-xs text-muted-foreground">{c.when}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{c.role}</td>
                  <td className="px-6 py-4 text-muted-foreground">{c.country}</td>
                  <td className="px-6 py-4"><span className="text-xs px-2 py-1 rounded-md bg-gold-soft text-primary font-medium">{c.visa}</span></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className={`h-full rounded-full ${c.match >= 90 ? "bg-success" : c.match >= 80 ? "bg-gold" : "bg-brand"}`} style={{ width: `${c.match}%` }} />
                      </div>
                      <span className="font-semibold text-xs">{c.match}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-xs font-semibold text-brand hover:underline mr-3">Shortlist</button>
                    <button className="text-xs font-semibold text-muted-foreground hover:text-foreground">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
