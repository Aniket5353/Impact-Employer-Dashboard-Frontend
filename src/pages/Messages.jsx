import { useState } from "react";

const threads = [
  { id: "1", name: "Rahul Verma", role: "Senior Care Assistant", preview: "Thank you for the update. I'll send the documents by tomorrow.", when: "2m", unread: 2 },
  { id: "2", name: "Maria Santos", role: "Registered Nurse", preview: "Would 3pm work for the second-round interview?", when: "1h", unread: 1 },
  { id: "3", name: "Ahmed Khalil", role: "Software Engineer", preview: "Attached my updated portfolio.", when: "3h", unread: 0 },
  { id: "4", name: "Grace Okoye", role: "Registered Nurse", preview: "Yes I hold a valid OET B.", when: "1d", unread: 0 },
  { id: "5", name: "IMMPACT Support", role: "Compliance", preview: "Your CoS batch was approved.", when: "2d", unread: 0 },
];

const messages = [
  { from: "them", text: "Hi Aisha — thank you for shortlisting my application. I'm very excited about the Senior Care role.", when: "10:12" },
  { from: "me", text: "Hi Rahul — happy to move forward. Could you confirm your IELTS score and share your reference letters?", when: "10:18" },
  { from: "them", text: "Absolutely. IELTS overall 7.0. I'll send both references by tomorrow morning.", when: "10:21" },
  { from: "me", text: "Perfect. We'd like to schedule a video interview next week. Do Mondays at 10am UK time work?", when: "10:25" },
  { from: "them", text: "Thank you for the update. I'll send the documents by tomorrow.", when: "10:27" },
];

export default function Messages() {
  const [active, setActive] = useState(threads[0]);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden h-[calc(100vh-11rem)] flex">
      <div className="w-80 border-r border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <h2 className="font-bold">Messages</h2>
          <input placeholder="Search conversations…" className="mt-3 w-full h-10 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40" />
        </div>
        <div className="flex-1 overflow-y-auto">
          {threads.map((t) => (
            <button key={t.id} onClick={() => setActive(t)} className={`w-full text-left p-4 border-b border-border hover:bg-muted transition ${active.id === t.id ? "bg-brand-soft" : ""}`}>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand text-brand-foreground text-xs font-bold">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <div className="font-semibold text-sm truncate">{t.name}</div>
                    <div className="text-[11px] text-muted-foreground">{t.when}</div>
                  </div>
                  <div className="text-xs text-muted-foreground truncate">{t.preview}</div>
                </div>
                {t.unread > 0 && <div className="h-5 min-w-5 px-1 rounded-full bg-gold text-primary text-[10px] font-bold grid place-items-center">{t.unread}</div>}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="px-6 py-4 border-b border-border flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-brand text-brand-foreground text-xs font-bold">
            {active.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div className="flex-1">
            <div className="font-semibold">{active.name}</div>
            <div className="text-xs text-muted-foreground">{active.role} · Online</div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-surface">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-md rounded-2xl px-4 py-2.5 text-sm ${m.from === "me" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-card border border-border rounded-bl-sm"}`}>
                <div>{m.text}</div>
                <div className={`text-[10px] mt-1 ${m.from === "me" ? "text-white/60" : "text-muted-foreground"}`}>{m.when}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-border">
          <div className="flex gap-2 rounded-xl border border-border bg-background p-2">
            <input placeholder="Write a message…" className="flex-1 bg-transparent px-2 text-sm focus:outline-none" />
            <button className="px-4 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
