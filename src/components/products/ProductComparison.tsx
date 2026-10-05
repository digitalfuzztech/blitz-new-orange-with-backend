import { Check, Minus, Sparkles } from "lucide-react";
import { productComparison, type ComparisonValue } from "@/data/products";
import { cn } from "@/lib/utils";

const columns = [
  { key: "whatsappAutomation", label: "WhatsApp Automation" },
  { key: "aiPoweredCrm", label: "AI Powered CRM" },
  { key: "allInOne", label: "All In One" },
] as const;

function ComparisonStatus({ value }: { value: ComparisonValue }) {
  if (value === "Not included") {
    return (
      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
        <Minus className="h-4 w-4" aria-hidden />
        <span>Not included</span>
      </span>
    );
  }

  const enhanced = value === "Advanced" || value === "Future-ready";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium",
        enhanced ? "text-secondary" : "text-foreground",
      )}
    >
      {enhanced ? (
        <Sparkles className="h-4 w-4" aria-hidden />
      ) : (
        <Check className="h-4 w-4 text-success" aria-hidden />
      )}
      <span>{value}</span>
    </span>
  );
}

export function ProductComparison() {
  return (
    <div
      role="region"
      aria-label="Product comparison - scroll to compare"
      tabIndex={0}
      className="overflow-x-auto rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <caption className="sr-only">
          Comparison of WhatsApp Automation, AI Powered CRM and All In One
        </caption>
        <thead>
          <tr className="border-b border-border bg-surface/70">
            <th scope="col" className="w-[28%] px-5 py-4 font-semibold">
              Capability
            </th>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={cn(
                  "px-5 py-4 font-semibold",
                  column.key === "allInOne" && "text-secondary",
                )}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {productComparison.map((row) => (
            <tr
              key={row.feature}
              className="border-b border-border last:border-0"
            >
              <th scope="row" className="px-5 py-4 font-medium">
                {row.feature}
              </th>
              {columns.map((column) => (
                <td key={column.key} className="px-5 py-4">
                  <ComparisonStatus value={row[column.key]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
