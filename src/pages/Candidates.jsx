import { useState } from "react";

const initial = [
  { id: "1", name: "Rahul Verma", role: "Senior Care Assistant", country: "🇮🇳 India", exp: "4 yrs", match: 94, visa: "Health & Care", stage: "New", english: "IELTS 7.0" },
  { id: "2", name: "Maria Santos", role: "Registered Nurse", country: "🇵🇭 Philippines", exp: "6 yrs", match: 91, visa: "Health & Care", stage: "New", english: "OET B" },
  { id: "3", name: "Ahmed Khalil", role: "Software Engineer", country: "🇪🇬 Egypt", exp: "5 yrs", match: 88, visa: "Skilled Worker", stage: "Screening", english: "IELTS 7.5" },
  { id: "4", name: "Priya Nair", role: "Care Assistant", country: "🇮🇳 India", exp: "3 yrs", match: 82, visa: "Health & Care", stage: "Screening", english: "IELTS 6.5" },
  { id: "5", name: "Jonas Meyer", role: "Chef de Partie", country: "🇩🇪 Germany", exp: "7 yrs", match: 76, visa: "Skilled Worker", stage: "Interview", english: "Native" },
  { id: "6", name: "Grace Okoye", role: "Registered Nurse", country: "🇳🇬 Nigeria", exp: "8 yrs", match: 89, visa: "Health & Care", stage: "Interview", english: "OET B" },
  { id: "7", name: "Lin Wei", role: "Software Engineer", country: "🇨🇳 China", exp: "6 yrs", match: 85, visa: "Skilled Worker", stage: "Offer", english: "IELTS 7.0" },
];

const stages = ["New", "Screening", "Interview", "Offer", "Rejected"];

export default function Candidates() {
  const [view, setView] = useState("board");
  const [query, setQuery] = useState("");
  const filtered = initial.filter((c) => !query || c.name.toLowerCase().includes(query.toLowerCase()) || c.role.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Candidates</h1>
          <p className="text-muted-foreground mt-1">{filtered.length} applicants across your active roles.</p>
        </div>
        <div className="flex gap-2 bg-card border border-border rounded-xl p-1">
          {["board", "list"].map((v) => (
            <button key={v} onClick={() => setView(v)} className={`px-4 py-1.5 rounded-lg text-sm font-medium capitalize ${view === v ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>{v}</button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name, role, skill…" className="flex-1 min-w-[220px] h-11 rounded-xl border border-border bg-card px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40" />
        <select className="h-11 rounded-xl border border-border bg-card px-3 text-sm"><option>All roles</option></select>
        <select className="h-11 rounded-xl border border-border bg-card px-3 text-sm"><option>All countries</option></select>
        <select className="h-11 rounded-xl border border-border bg-card px-3 text-sm"><option>Sort: Match %</option></select>
      </div>

      {view === "board" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {stages.map((stage) => {
            const list = filtered.filter((c) => c.stage === stage);
            return (
              <div key={stage} className="rounded-2xl bg-muted/50 border border-border p-3 min-h-[400px]">
                <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-border">
                  <div className="text-sm font-bold flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${stageDot(stage)}`} />
                    {stage}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{list.length}</span>
                </div>
                <div className="space-y-2">
                  {list.map((c) => (
                    <div key={c.id} className="rounded-xl bg-card border border-border p-3 hover:shadow-md hover:border-brand/40 transition cursor-pointer">
                      <div className="flex items-center gap-2">
                        <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-soft text-brand text-xs font-bold">
                          {c.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold truncate">{c.name}</div>
                          <div className="text-xs text-muted-foreground truncate">{c.country}</div>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground truncate">{c.role}</div>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex-1 h-1 rounded-full bg-muted overflow-hidden">
                          <div className={`h-full ${c.match >= 90 ? "bg-success" : c.match >= 80 ? "bg-gold" : "bg-brand"}`} style={{ width: `${c.match}%` }} />
                        </div>
                        <span className="text-[11px] font-bold">{c.match}%</span>
                      </div>
                    </div>
                  ))}
                  {list.length === 0 && <div className="text-xs text-muted-foreground text-center py-6">No candidates</div>}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl bg-card border border-border overflow-hidden overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase text-muted-foreground bg-muted/50">
              <tr>
                <th className="text-left font-medium px-6 py-3">Candidate</th>
                <th className="text-left font-medium px-6 py-3">Role</th>
                <th className="text-left font-medium px-6 py-3">Exp</th>
                <th className="text-left font-medium px-6 py-3">English</th>
                <th className="text-left font-medium px-6 py-3">Match</th>
                <th className="text-left font-medium px-6 py-3">Stage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-muted/40">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-soft text-brand text-xs font-bold">{c.name.split(" ").map((n) => n[0]).join("")}</div>
                      <div><div className="font-semibold">{c.name}</div><div className="text-xs text-muted-foreground">{c.country}</div></div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{c.role}</td>
                  <td className="px-6 py-4 text-muted-foreground">{c.exp}</td>
                  <td className="px-6 py-4"><span className="text-xs px-2 py-1 rounded-md bg-brand-soft text-brand font-medium">{c.english}</span></td>
                  <td className="px-6 py-4"><span className="font-bold">{c.match}%</span></td>
                  <td className="px-6 py-4"><span className={`text-xs font-semibold px-2 py-1 rounded-md ${stageBg(c.stage)}`}>{c.stage}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function stageDot(s) {
  return s === "New" ? "bg-brand" : s === "Screening" ? "bg-gold" : s === "Interview" ? "bg-primary" : s === "Offer" ? "bg-success" : "bg-destructive";
}
function stageBg(s) {
  return s === "New" ? "bg-brand-soft text-brand" : s === "Screening" ? "bg-gold-soft text-primary" : s === "Interview" ? "bg-primary/10 text-primary" : s === "Offer" ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive";
}
