"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const BUDGETS = ["£25–60k", "£60–150k", "£150–400k", "£400k+"];
const TIMING = ["Now", "Next quarter", "This year", "Exploring"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-bg-2 border border-line rounded-xl p-10 text-center"
      >
        <div className="eyebrow mb-4">Got it.</div>
        <h3 className="font-display text-3xl md:text-4xl text-ink mb-3 leading-tight">
          Thanks. We'll be in touch within one working day.
        </h3>
        <p className="text-ink/65 max-w-md mx-auto">
          A partner will read this and reply personally — usually within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-bg-2/60 border border-line rounded-2xl p-6 md:p-10 backdrop-blur-md"
    >
      <div className="grid grid-cols-2 gap-x-5 gap-y-5">
        <Field label="Your name" name="name" required />
        <Field label="Company" name="company" required />
        <Field label="Work email" type="email" name="email" required full />
        <Field label="What are you working on?" name="brief" textarea full />

        <div className="col-span-2">
          <Label>Approximate budget</Label>
          <div className="flex flex-wrap gap-2">
            {BUDGETS.map((b) => (
              <RadioPill name="budget" key={b} value={b} />
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <Label>Timing</Label>
          <div className="flex flex-wrap gap-2">
            {TIMING.map((t) => (
              <RadioPill name="timing" key={t} value={t} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-ink/45 font-mono uppercase tracking-[0.18em] max-w-sm">
          By submitting, you agree to our privacy notice. We reply within one working day.
        </p>
        <button
          type="submit"
          className="px-8 py-3.5 rounded-full bg-accent text-bg font-mono uppercase tracking-[0.2em] text-xs hover:bg-accent-2 transition-colors min-h-[44px]"
        >
          Send →
        </button>
      </div>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink/55 mb-3">
      {children}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required = false,
  full = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <label className={`flex flex-col ${full ? "col-span-2" : "col-span-2 md:col-span-1"}`}>
      <Label>{label}</Label>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          className="bg-bg/60 border border-line rounded-lg px-4 py-3 text-ink placeholder-ink/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className="bg-bg/60 border border-line rounded-lg px-4 py-3 text-ink placeholder-ink/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-colors min-h-[44px]"
        />
      )}
    </label>
  );
}

function RadioPill({ name, value }: { name: string; value: string }) {
  return (
    <label className="cursor-pointer">
      <input type="radio" name={name} value={value} className="peer sr-only" />
      <span className="inline-flex px-4 py-2 rounded-full border border-line text-sm text-ink/75 peer-checked:bg-accent peer-checked:border-accent peer-checked:text-bg hover:border-ink/40 transition-colors">
        {value}
      </span>
    </label>
  );
}
