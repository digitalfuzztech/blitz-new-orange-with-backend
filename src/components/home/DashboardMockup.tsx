import { motion } from "motion/react";
import { Activity, Bot, CheckCircle2, Inbox, MessageSquare, PhoneCall, TrendingUp } from "lucide-react";

const bars = [38, 52, 44, 68, 59, 82, 74, 91, 86, 97];

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="theme-dark relative mx-auto w-full max-w-5xl"
    >
      <div className="absolute -inset-6 rounded-[2.5rem] bg-[image:var(--gradient-brand)] opacity-20 blur-3xl" aria-hidden />
      <div className="glass relative overflow-hidden rounded-3xl bg-background p-3 text-foreground shadow-[var(--shadow-soft)] sm:p-4">
        <div className="mb-3 flex items-center gap-2 px-2">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-chart-5/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          <span className="ml-3 truncate rounded-md border border-border px-2 py-0.5 text-[10px] text-muted-foreground">
            app.blitzelement.com/workspace/overview
          </span>
        </div>

        <div className="grid gap-3 rounded-2xl border border-border bg-background/60 p-3 sm:p-4 lg:grid-cols-[1fr_1.25fr]">
          <div className="space-y-3">
            <div className="rounded-2xl border border-border bg-surface/60 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">Automated resolutions today</p>
                <span className="flex items-center gap-1 text-[10px] font-medium text-success">
                  <TrendingUp className="h-3 w-3" aria-hidden /> +12.4%
                </span>
              </div>
              <p className="font-display mt-2 text-3xl font-semibold">1,842</p>
              <div className="mt-4 flex h-20 items-end gap-1.5">
                {bars.map((h, i) => (
                  <motion.span
                    key={i}
                    className="flex-1 rounded-t-sm bg-brand-orange"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.06, ease: "easeOut" }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Inbox, label: "Open threads", value: "36" },
                { icon: PhoneCall, label: "Calls handled", value: "214" },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl border border-border bg-surface/60 p-3">
                  <m.icon className="h-4 w-4 text-secondary" aria-hidden />
                  <p className="mt-2 text-lg font-semibold">{m.value}</p>
                  <p className="text-[11px] text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-border bg-surface/60 p-4">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-[image:var(--gradient-brand)]">
                  <Bot className="h-3.5 w-3.5 text-primary-foreground" aria-hidden />
                </span>
                <p className="text-xs font-medium">Blitz Agent · live conversation</p>
                <span className="ml-auto flex items-center gap-1 text-[10px] text-success">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> Active
                </span>
              </div>
              <div className="mt-3 space-y-2">
                <Bubble side="left" text="Hi — can I move my booking to Friday morning?" />
                <Bubble side="right" text="Of course. I have 9:15 and 11:00 free on Friday. Which suits you?" />
                <Bubble side="left" text="9:15 please." />
                <Bubble side="right" text="Done — confirmation sent to your WhatsApp. Anything else?" />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-4">
              <p className="text-xs font-medium text-muted-foreground">Workflow run · Booking confirmation</p>
              <ul className="mt-3 space-y-2">
                {[
                  { icon: MessageSquare, label: "Intent classified: reschedule", done: true },
                  { icon: Activity, label: "Availability checked in Blitz Booking", done: true },
                  { icon: CheckCircle2, label: "CRM updated & reminder scheduled", done: true },
                ].map((step, i) => (
                  <motion.li
                    key={step.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.25 }}
                    className="flex items-center gap-2 text-[11px] text-muted-foreground"
                  >
                    <step.icon className="h-3.5 w-3.5 shrink-0 text-success" aria-hidden />
                    {step.label}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Bubble({ side, text }: { side: "left" | "right"; text: string }) {
  return (
    <div className={side === "right" ? "flex justify-end" : "flex justify-start"}>
      <p
        className={
          side === "right"
            ? "max-w-[80%] rounded-2xl rounded-br-sm bg-primary/90 px-3 py-2 text-[11px] text-primary-foreground"
            : "max-w-[80%] rounded-2xl rounded-bl-sm bg-background px-3 py-2 text-[11px] text-foreground"
        }
      >
        {text}
      </p>
    </div>
  );
}
