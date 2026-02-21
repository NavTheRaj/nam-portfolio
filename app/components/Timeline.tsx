"use client";

import { motion } from "framer-motion";

export type TimelineItem = {
  role: string;
  company: string;
  time: string;
  location: string;
  detail: string;
};

type TimelineProps = {
  items: TimelineItem[];
  dark?: boolean;
};

export default function Timeline({ items, dark = false }: TimelineProps) {
  return (
    <div className="relative mt-8 pl-8">
      <div
        className={`pointer-events-none absolute top-0 bottom-0 left-3 w-px ${
          dark ? "bg-gradient-to-b from-sky-700 via-sky-800 to-slate-800" : "bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100"
        }`}
      />
      <div className="space-y-5">
        {items.map((item, i) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className={`relative rounded-3xl border p-6 shadow-sm ${
              dark ? "border-slate-700 bg-slate-900/90" : "border-sky-100 bg-white"
            }`}
          >
            <span
              className={`absolute top-7 -left-7 h-4 w-4 rounded-full border-2 ${
                dark ? "border-sky-500 bg-slate-900" : "border-sky-300 bg-sky-50"
              }`}
            />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className={`text-3xl font-semibold ${dark ? "text-slate-100" : "text-slate-800"}`}>{item.role}</h3>
              <span
                className={`rounded-full px-3 py-1 text-xs tracking-wide uppercase ${
                  dark ? "bg-slate-800 text-sky-300" : "bg-sky-100 text-sky-700"
                }`}
              >
                {item.time}
              </span>
            </div>
            <p className={`mt-1 ${dark ? "text-sky-300" : "text-sky-700"}`}>
              {item.company} | {item.location}
            </p>
            <p className={`mt-3 ${dark ? "text-slate-300" : "text-slate-600"}`}>{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
