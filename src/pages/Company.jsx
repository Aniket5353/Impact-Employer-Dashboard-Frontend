export default function Company() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Company Profile</h1>
        <p className="text-muted-foreground mt-1">Managed by Aisha Rahman · Last updated 2 days ago</p>
      </div>

      <div className="rounded-3xl overflow-hidden border border-border bg-card">
        <div className="h-40 bg-gradient-to-br from-primary via-brand to-gold" />
        <div className="p-6 md:p-8 -mt-16 relative">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <div className="h-24 w-24 rounded-2xl bg-card border-4 border-card shadow-lg grid place-items-center text-2xl font-bold text-primary">NH</div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">Northwind Health Group</h2>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md bg-success/15 text-success">✓ Verified sponsor</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Residential care & nursing · 850 employees · Manchester HQ</p>
            </div>
            <button className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold hover:bg-muted">Edit profile</button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="About">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Northwind Health Group operates 24 residential and nursing care homes across the North West of England.
              We're proud sponsors of over 200 international healthcare professionals.
            </p>
          </Card>

          <Card title="Sponsorship License" action="Download certificate">
            <div className="grid sm:grid-cols-2 gap-4">
              <Info label="License number" value="2023-NHG-4471" />
              <Info label="Tier" value="Worker & Temporary Worker" />
              <Info label="Rating" value="A-rated" />
              <Info label="Valid until" value="12 March 2027" />
              <Info label="CoS allocation" value="150 remaining" />
              <Info label="Routes" value="Skilled Worker, Health & Care" />
            </div>
            <div className="mt-4 rounded-xl bg-brand-soft border border-brand/20 p-4">
              <div className="font-semibold text-brand text-sm">Compliance is up to date</div>
              <p className="text-xs text-brand/80 mt-0.5">Next audit reminder: 15 January 2027.</p>
            </div>
          </Card>

          <Card title="Team">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { name: "Aisha Rahman", role: "HR Lead · Owner" },
                { name: "James Beckett", role: "Recruitment Manager" },
                { name: "Tolu Kadiri", role: "Compliance Officer" },
                { name: "Sam Whitely", role: "Care Home Director" },
              ].map((m) => (
                <div key={m.name} className="flex items-center gap-3 p-3 rounded-xl border border-border">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand text-brand-foreground text-xs font-bold">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{m.name}</div>
                    <div className="text-xs text-muted-foreground">{m.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="At a glance">
            <div className="grid grid-cols-2 gap-3">
              {[["24", "Care homes"], ["850", "Employees"], ["12", "Active jobs"], ["47", "Sponsored hires"]].map(([n, l]) => (
                <div key={l} className="rounded-xl bg-muted p-4">
                  <div className="text-2xl font-bold">{n}</div>
                  <div className="text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Documents">
            {[
              { name: "Sponsor License Certificate.pdf", size: "1.2 MB" },
              { name: "Compliance Handbook 2026.pdf", size: "4.6 MB" },
              { name: "Company Registration.pdf", size: "820 KB" },
            ].map((d) => (
              <div key={d.name} className="flex items-center gap-3 py-2 border-b last:border-none border-border">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-destructive/10 text-destructive text-[10px] font-bold">PDF</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{d.name}</div>
                  <div className="text-xs text-muted-foreground">{d.size}</div>
                </div>
                <button className="text-xs font-semibold text-brand hover:underline">View</button>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

function Card({ title, action, children }) {
  return (
    <div className="rounded-2xl bg-card border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold">{title}</h3>
        {action && <button className="text-xs font-semibold text-brand hover:underline">{action}</button>}
      </div>
      {children}
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <div className="text-xs text-muted-foreground uppercase tracking-wide">{label}</div>
      <div className="text-sm font-semibold mt-0.5">{value}</div>
    </div>
  );
}
