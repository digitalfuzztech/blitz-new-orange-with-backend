import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

type Values = Record<string, string>;
type Field = { name: string; label: string; type?: string; required?: boolean; options?: string[]; wide?: boolean };
const baseFields: Field[] = [
  { name: "name", label: "Full name", required: true },
  { name: "email", label: "Work email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "company", label: "Company name", required: true },
];
const interests = ["WhatsApp Automation", "AI Powered CRM", "All In One"];
const fieldClass = "mt-2 block w-full min-w-0 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function InquiryForm({ demo = false }: { demo?: boolean }) {
  const [ready, setReady] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Values>();
  const fields: Field[] = [
    ...baseFields,
    ...(demo ? [
      { name: "role", label: "Job role", required: true },
      { name: "size", label: "Company size", required: true, options: ["1–10", "11–50", "51–200", "201+"] },
    ] : [{ name: "website", label: "Company website", type: "url" }]),
    { name: "country", label: "Country", required: true },
    { name: "interest", label: demo ? "Product interest" : "Interested in", required: true, options: [...interests, demo ? "Custom Solution" : "Custom Software / Services", ...(!demo ? ["General Inquiry"] : [])] },
    ...(demo ? [
      { name: "method", label: "Preferred contact method", required: true, options: ["Email", "Phone"] },
      { name: "date", label: "Preferred date (optional)", type: "date" },
      { name: "time", label: "Preferred time and time zone (optional)" },
    ] : [{ name: "inquiryType", label: "Inquiry type", required: true, options: ["Sales", "Support", "General"] }]),
    { name: "message", label: demo ? "Business challenge" : "Message", type: "textarea", required: true, wide: true },
  ];
  return (
    <form noValidate onChange={() => setReady(false)} onSubmit={handleSubmit(() => setReady(true))} className="surface-card p-6 sm:p-9">
      <h2 className="text-2xl font-semibold">{demo ? "Plan your product walkthrough" : "Tell us what you need"}</h2>
      <p id="form-notice" className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Online {demo ? "booking" : "submission"} is not connected yet. This form checks your details only; nothing is sent or saved.
        {demo && " Dates and times are preferences, not confirmed availability."} Please use email for an inquiry today.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className={field.wide ? "sm:col-span-2" : ""}>
            <label htmlFor={field.name} className="text-sm font-medium">{field.label}{field.required && <span aria-hidden> *</span>}</label>
            {(() => {
              const props = {
                id: field.name,
                className: fieldClass,
                "aria-required": field.required,
                "aria-invalid": Boolean(errors[field.name]),
                "aria-describedby": errors[field.name] ? field.name + "-error" : undefined,
                ...register(field.name, {
                  validate: (value) => !field.required || Boolean(value?.trim()) || "This field is required.",
                  ...(field.type === "email" ? { pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." } } : {}),
                  ...(field.type === "url" ? { validate: (value: string) => !value || /^https?:\/\/\S+\.\S+$/.test(value) || "Include a valid https:// website address." } : {}),
                }),
              };
              return field.options ? <select {...props}><option value="">Please select</option>{field.options.map((option) => <option key={option}>{option}</option>)}</select>
                : field.type === "textarea" ? <textarea {...props} rows={5} maxLength={5000} />
                : <input {...props} type={field.type ?? "text"} maxLength={field.type === "date" ? undefined : 250} />;
            })()}
            {errors[field.name] && <p id={field.name + "-error"} className="mt-2 text-sm text-destructive" role="alert">{errors[field.name]?.message}</p>}
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-muted-foreground">Required fields are marked *. Avoid sensitive information. Read our <Link to="/privacy" className="underline">privacy policy</Link>.</p>
      <button type="submit" aria-describedby="form-notice" className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Review details</button>
      {ready && <div role="status" className="mt-6 rounded-xl border border-border bg-accent p-5 text-sm">
        <p className="font-semibold">Your details are ready. Nothing has been sent.</p>
        <p className="mt-2">Online submission will be available later. For assistance, email <a className="font-medium underline" href={`mailto:${site.email.sales}`}>{site.email.sales}</a>. Your entries remain here while this page is open.</p>
      </div>}
    </form>
  );
}

