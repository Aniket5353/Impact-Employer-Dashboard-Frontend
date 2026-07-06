export default function Profile() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">My Profile</h1>
        <p className="text-muted-foreground mt-1">Personal details, notifications & security.</p>
      </div>

      <div className="rounded-2xl bg-card border border-border p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="grid h-24 w-24 place-items-center rounded-2xl bg-gradient-to-br from-brand to-primary text-primary-foreground text-3xl font-bold">AR</div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">Aisha Rahman</h2>
            <p className="text-sm text-muted-foreground">HR Lead · Northwind Health Group</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="text-xs font-semibold px-2 py-1 rounded-md bg-success/15 text-success">Owner</span>
              <span className="text-xs font-semibold px-2 py-1 rounded-md bg-brand-soft text-brand">2FA enabled</span>
            </div>
          </div>
          <button className="rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:bg-muted">Change photo</button>
        </div>
      </div>

      <Section title="Personal information">
        <div className="grid md:grid-cols-2 gap-4">
          <F label="Full name" v="Aisha Rahman" />
          <F label="Job title" v="HR Lead" />
          <F label="Email" v="aisha@northwindhealth.co.uk" />
          <F label="Phone" v="+44 7700 900123" />
          <F label="Language" v="English (UK)" />
          <F label="Timezone" v="Europe/London" />
        </div>
      </Section>

      <Section title="Notifications">
        {[
          { title: "New application received", desc: "Get notified when someone applies", email: true, push: true },
          { title: "Interview reminders", desc: "1 hour before each interview", email: true, push: true },
          { title: "Weekly hiring digest", desc: "Every Monday morning at 8am", email: true, push: false },
          { title: "Product updates", desc: "New features and improvements", email: false, push: false },
        ].map((n) => (
          <div key={n.title} className="flex items-start justify-between gap-4 py-4 border-b last:border-none border-border">
            <div className="flex-1">
              <div className="font-semibold text-sm">{n.title}</div>
              <div className="text-xs text-muted-foreground">{n.desc}</div>
            </div>
            <div className="flex gap-4 items-center">
              <Toggle label="Email" on={n.email} />
              <Toggle label="Push" on={n.push} />
            </div>
          </div>
        ))}
      </Section>

      <Section title="Security">
        <Row label="Password" value="Last changed 3 months ago" action="Change" />
        <Row label="Two-factor auth" value="Authenticator app · Enabled" action="Manage" />
        <Row label="Active sessions" value="2 devices" action="Review" />
      </Section>

      <Section title="Danger zone" tone="destructive">
        <Row label="Sign out of all devices" value="Immediately revoke all sessions" action="Sign out all" />
        <Row label="Delete account" value="This action cannot be undone" action="Delete" tone="destructive" />
      </Section>
    </div>
  );
}

function Section({ title, children, tone }) {
  return (
    <div className={`rounded-2xl bg-card border p-6 md:p-8 ${tone === "destructive" ? "border-destructive/30" : "border-border"}`}>
      <h3 className={`font-bold mb-4 ${tone === "destructive" ? "text-destructive" : ""}`}>{title}</h3>
      {children}
    </div>
  );
}

function F({ label, v }) {
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">{label}</div>
      <input defaultValue={v} className="w-full h-11 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40" />
    </label>
  );
}

function Toggle({ label, on }) {
  return (
    <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
      {label}
      <span className={`relative h-5 w-9 rounded-full transition ${on ? "bg-brand" : "bg-muted"}`}>
        <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition ${on ? "left-4" : "left-0.5"}`} />
      </span>
    </label>
  );
}

function Row({ label, value, action, tone }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div>
        <div className="font-semibold text-sm">{label}</div>
        <div className="text-xs text-muted-foreground">{value}</div>
      </div>
      <button className={`rounded-lg px-4 py-2 text-sm font-semibold ${tone === "destructive" ? "bg-destructive text-destructive-foreground hover:brightness-110" : "border border-border hover:bg-muted"}`}>{action}</button>
    </div>
  );
}
