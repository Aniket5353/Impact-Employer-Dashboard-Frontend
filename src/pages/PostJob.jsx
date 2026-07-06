import { useState } from "react";
import { Link } from "react-router-dom";

const steps = ["Role details", "Sponsorship", "Requirements", "Review"];
const input = "w-full h-11 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40";
const textarea = "w-full min-h-32 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40";

export default function PostJob() {
  const [step, setStep] = useState(0);
  return (
    <div className="space-y-6">
      <div>
        <Link to="/employer/jobs" className="text-sm text-muted-foreground hover:text-foreground">← Back to jobs</Link>
        <h1 className="mt-2 text-2xl md:text-3xl font-bold">Post a Sponsored Role</h1>
        <p className="text-muted-foreground mt-1">Reach thousands of visa-ready candidates worldwide.</p>
      </div>

      <div className="rounded-2xl bg-card border border-border p-2 flex flex-wrap gap-1">
        {steps.map((s, i) => (
          <button key={s} onClick={() => setStep(i)} className={`flex-1 min-w-[120px] px-4 py-2.5 rounded-xl text-sm font-medium transition text-left ${i === step ? "bg-primary text-primary-foreground" : i < step ? "bg-brand-soft text-brand" : "hover:bg-muted"}`}>
            <div className="text-[10px] uppercase tracking-wider opacity-70">Step {i + 1}</div>
            <div>{s}</div>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl bg-card border border-border p-6 md:p-8">
          {step === 0 && <RoleDetails />}
          {step === 1 && <Sponsorship />}
          {step === 2 && <Requirements />}
          {step === 3 && <Review />}

          <div className="mt-8 pt-6 border-t border-border flex justify-between">
            <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="px-5 py-2.5 rounded-lg border border-border text-sm font-semibold hover:bg-muted disabled:opacity-40">Back</button>
            {step < steps.length - 1 ? (
              <button onClick={() => setStep(step + 1)} className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90">Continue →</button>
            ) : (
              <button className="px-5 py-2.5 rounded-lg bg-gold text-primary text-sm font-semibold hover:brightness-105">Publish job</button>
            )}
          </div>
        </div>

        <aside className="rounded-2xl bg-primary text-primary-foreground p-6 h-fit sticky top-24">
          <div className="text-xs uppercase tracking-wider text-white/60">Live preview</div>
          <div className="mt-4 rounded-xl bg-white/5 p-5 border border-white/10">
            <div className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-gold text-primary">SPONSORED</div>
            <h3 className="mt-2 text-lg font-bold">Senior Care Assistant</h3>
            <div className="text-sm text-white/70 mt-1">Northwind Health · Manchester, UK</div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div><div className="text-white/50">Salary</div><div className="font-semibold">£23,200 – £26,000</div></div>
              <div><div className="text-white/50">Visa</div><div className="font-semibold">Health & Care</div></div>
              <div><div className="text-white/50">Type</div><div className="font-semibold">Full-time</div></div>
              <div><div className="text-white/50">Start</div><div className="font-semibold">Immediate</div></div>
            </div>
            <button className="mt-5 w-full rounded-lg bg-gold text-primary py-2.5 text-sm font-semibold">Apply now</button>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, children, hint }) {
  return (
    <label className="block">
      <div className="text-sm font-semibold mb-1.5">{label}</div>
      {children}
      {hint && <div className="text-xs text-muted-foreground mt-1">{hint}</div>}
    </label>
  );
}

function RoleDetails() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold">Role details</h2>
      <Field label="Job title"><input className={input} defaultValue="Senior Care Assistant" /></Field>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Location"><input className={input} defaultValue="Manchester, UK" /></Field>
        <Field label="Employment type"><select className={input}><option>Full-time</option><option>Part-time</option><option>Contract</option></select></Field>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Salary min (GBP)"><input className={input} defaultValue="23200" /></Field>
        <Field label="Salary max (GBP)"><input className={input} defaultValue="26000" /></Field>
      </div>
      <Field label="Job description" hint="Markdown supported."><textarea className={textarea} defaultValue="We are looking for compassionate care assistants to join our team..." /></Field>
    </div>
  );
}

function Sponsorship() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold">Sponsorship & visa</h2>
      <Field label="Visa route"><select className={input}><option>Skilled Worker</option><option>Health & Care Worker</option><option>Global Talent</option><option>Scale-up</option></select></Field>
      <Field label="CoS reference" hint="Optional at posting stage"><input className={input} placeholder="e.g. C1234567" /></Field>
      <div className="rounded-xl border border-brand/30 bg-brand-soft p-4">
        <div className="text-sm font-semibold text-brand">Eligibility auto-check</div>
        <p className="text-xs text-brand/80 mt-1">Salary meets the £26,200 general threshold. SOC 6145 is on the Immigration Salary List — you may pay 80% of the going rate.</p>
      </div>
      <Field label="Relocation support">
        <div className="grid grid-cols-2 gap-2">
          {["Visa fees covered", "Flights", "Temporary housing", "IHS reimbursement"].map((x) => (
            <label key={x} className="flex items-center gap-2 rounded-lg border border-border p-3 text-sm cursor-pointer hover:bg-muted">
              <input type="checkbox" className="accent-brand" defaultChecked /> {x}
            </label>
          ))}
        </div>
      </Field>
    </div>
  );
}

function Requirements() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-bold">Requirements</h2>
      <Field label="Minimum experience"><select className={input}><option>0–1 years</option><option>2–4 years</option><option>5+ years</option></select></Field>
      <Field label="English requirement"><select className={input}><option>IELTS 4.0+</option><option>IELTS 6.0+</option><option>Native</option></select></Field>
      <Field label="Skills"><input className={input} defaultValue="Patient care, Medication support, Safeguarding" /></Field>
      <Field label="Countries of interest">
        <div className="flex flex-wrap gap-2">
          {["India", "Philippines", "Nigeria", "Kenya", "Ghana"].map((c) => (
            <span key={c} className="px-3 py-1.5 rounded-full bg-muted text-sm">{c} ×</span>
          ))}
          <button className="px-3 py-1.5 rounded-full border border-dashed border-border text-sm text-muted-foreground">+ Add</button>
        </div>
      </Field>
    </div>
  );
}

function Review() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Review & publish</h2>
      {[
        ["Role", "Senior Care Assistant · Full-time · Manchester, UK"],
        ["Salary", "£23,200 – £26,000"],
        ["Visa", "Health & Care Worker · CoS ready"],
        ["Requirements", "IELTS 6.0+ · 2–4 yrs experience"],
        ["Reach", "Estimated 1,200 matching candidates"],
      ].map(([k, v]) => (
        <div key={k} className="flex justify-between py-3 border-b border-border">
          <span className="text-sm text-muted-foreground">{k}</span>
          <span className="text-sm font-semibold text-right">{v}</span>
        </div>
      ))}
    </div>
  );
}
