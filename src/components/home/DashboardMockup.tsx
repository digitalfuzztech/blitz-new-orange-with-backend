import { motion } from "motion/react";
import { Activity, Bot, CheckCircle2, Inbox, MessageSquare, TrendingUp, UserPlus } from "lucide-react";

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
            Product preview - illustrative data
          </span>
        </div>

        <div className="grid gap-3 rounded-2xl border border-border bg-background/60 p-3 sm:p-4 lg:grid-cols-[1fr_1.25fr]">
          <div className="space-y-3">
            <div className="rounded-2xl border border-border bg-surface/60 p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">AI responses today</p>
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
                { icon: Inbox, label: "Conversations", value: "36" },
                { icon: UserPlus, label: "New leads", value: "214" },
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
                <p className="text-xs font-medium">WhatsApp assistant · example conversation</p>
                <span className="ml-auto flex items-center gap-1 text-[10px] text-success">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> Active
                </span>
              </div>
              <div className="mt-3 space-y-2">
                <Bubble side="left" text="Hi — which service is right for a ten-person sales team?" />
                <Bubble side="right" text="I can help with that. Are you mainly looking to manage leads, automate WhatsApp, or both?" />
                <Bubble side="left" text="Both. We also need human takeover." />
                <Bubble side="right" text="All In One is designed for that. I can capture your requirements for the team." />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-4">
              <p className="text-xs font-medium text-muted-foreground">Customer activity · Lead capture</p>
              <ul className="mt-3 space-y-2">
                {[
                  { icon: MessageSquare, label: "Inquiry identified: product fit", done: true },
                  { icon: Activity, label: "Business knowledge response prepared", done: true },
                  { icon: CheckCircle2, label: "Lead context ready for human follow-up", done: true },
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
