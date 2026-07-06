const interviews = [
  { when: "Today · 10:00", name: "Rahul Verma", role: "Senior Care Assistant", mode: "Video", panel: ["AR", "JB"], status: "Confirmed" },
  { when: "Today · 14:30", name: "Maria Santos", role: "Registered Nurse", mode: "Video", panel: ["AR"], status: "Awaiting" },
  { when: "Tomorrow · 09:00", name: "Ahmed Khalil", role: "Software Engineer", mode: "On-site", panel: ["JB", "TK"], status: "Confirmed" },
  { when: "Fri · 11:00", name: "Grace Okoye", role: "Registered Nurse", mode: "Video", panel: ["AR"], status: "Confirmed" },
  { when: "Mon · 15:00", name: "Lin Wei", role: "Software Engineer", mode: "Video", panel: ["JB", "AR"], status: "Confirmed" },
];

export default function Interviews() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Interviews</h1>
          <p className="text-muted-foreground mt-1">Schedule, confirm and prepare — video or on-site.</p>
        </div>
        <button className="rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:bg-primary/90">+ Schedule interview</button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {interviews.map((iv, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border p-5 flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:w-40">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{iv.when.split(" · ")[0]}</div>
                <div className="text-xl font-bold text-brand">{iv.when.split(" · ")[1]}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[11px] font-semibold uppercase px-2 py-0.5 rounded-md ${iv.status === "Confirmed" ? "bg-success/15 text-success" : "bg-gold/20 text-primary"}`}>{iv.status}</span>
                  <span className="text-xs text-muted-foreground">· {iv.mode}</span>
                </div>
                <div className="font-semibold">{iv.name}</div>
                <div className="text-sm text-muted-foreground">{iv.role}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {iv.panel.map((p) => (
                    <div key={p} className="h-8 w-8 rounded-full bg-brand text-brand-foreground text-[11px] font-bold grid place-items-center border-2 border-card">{p}</div>
                  ))}
                </div>
                <button className="rounded-lg bg-brand text-brand-foreground px-4 py-2 text-sm font-semibold">{iv.mode === "Video" ? "Join" : "Details"}</button>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-2xl bg-card border border-border p-6 h-fit">
          <h3 className="font-bold">Week at a glance</h3>
          <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs">
            {["M","T","W","T","F","S","S"].map((d, i) => (<div key={i} className="text-muted-foreground py-1">{d}</div>))}
            {[2, 1, 0, 1, 1, 0, 0].map((count, i) => (
              <div key={i} className={`aspect-square rounded-lg grid place-items-center font-semibold ${count > 0 ? "bg-brand text-brand-foreground" : "bg-muted text-muted-foreground"}`}>{count > 0 ? count : ""}</div>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-gold-soft p-4">
            <div className="text-xs uppercase tracking-wider text-primary/70 font-semibold">Prep pack</div>
            <p className="text-sm mt-1 text-primary">3 interviews today. Download briefing notes and CVs in one click.</p>
            <button className="mt-3 text-sm font-semibold text-primary hover:underline">Download →</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
