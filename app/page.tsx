"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Timeline, { TimelineItem } from "./components/Timeline";

type IconProps = {
  className?: string;
};

function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L9.09 10.9a16 16 0 0 0 4 4l1.45-1.08a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3" />
    </svg>
  );
}

function LocationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
    </svg>
  );
}

function SunIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}

function MoonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 1 0 11.5 11.5Z" />
    </svg>
  );
}

const skills = [
  "Administrative Support",
  "Executive Secretarial Duties",
  "Compliance Management",
  "AML/CFT Procedures",
  "Grievance Handling",
  "HR Administration",
  "Communication Skills",
  "Organization Skills",
  "Computer Skills",
  "Reporting and Documentation"
];

const experience: TimelineItem[] = [
  {
    role: "Sr. Assistant",
    company: "Himalayan Life Insurance",
    time: "2021 - Present",
    location: "Kathmandu, Nepal",
    detail:
      "Supporting executive operations and cross-department administration while contributing to compliance and grievance handling functions."
  },
  {
    role: "Compliance and AML/CFT Department",
    company: "Himalayan Life Insurance",
    time: "During current tenure",
    location: "Kathmandu, Nepal",
    detail:
      "Supported regulatory adherence, compliance checks, internal guidance, issue resolution, and coordination with authorities."
  },
  {
    role: "Executive Secretary to CEO",
    company: "Gurans Life Insurance Co. Ltd.",
    time: "During current tenure",
    location: "Kathmandu, Nepal",
    detail:
      "Managed schedules, meetings, correspondence, travel planning, reports, and confidential communication at executive level."
  },
  {
    role: "Accountant and Computer Teacher",
    company: "Himalayan Vidhya Mandir H.S.S",
    time: "2013/03 - 2016/05",
    location: "Kathmandu, Nepal",
    detail:
      "Prepared operational reports, maintained account systems, assisted audits, and supported office administration."
  },
  {
    role: "Field Manager",
    company: "Shreejana Banking Program",
    time: "2010/04 - 2012/04",
    location: "Nepal",
    detail:
      "Prepared financial records and daily reports, documented transactions, and supported branch-level administration."
  }
];

const education = [
  "Master in Business Management (Banking & Finance), Shankerdev Campus (2018-2021)",
  "BA Economics, Ratnarajya Laxmi Campus (2014-2017)",
  "+2 Management, New Himalayan Vidhya Mandir H.S.S (2012-2014)",
  "PCL (Intermediate of Science), Prithvi Narayan Campus (2007-2009)"
];

const highlights = [
  "Administrative operations across multiple departments",
  "Executive-level coordination and communication",
  "Compliance, AML/CFT, and grievance management focus",
  "Reliable documentation, reporting, and process support"
];

const contact = {
  phone: "9860901984",
  email: "khanalnamrata610@gmail.com",
  linkedin: "https://www.linkedin.com/in/namrata-khanal-3a2351161/"
};

const funFacts = [
  {
    title: "People-First Problem Solving",
    text: "I enjoy turning complex office workflows into smooth, human-friendly processes."
  },
  {
    title: "Detail Obsessed",
    text: "From reports to scheduling, I like precision and clean execution in every task."
  },
  {
    title: "Always Learning",
    text: "I actively improve communication, compliance knowledge, and operational best practices."
  }
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      return;
    }
    if (savedTheme === "light") {
      setIsDark(false);
      return;
    }
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <main className={isDark ? "min-h-screen bg-slate-950 text-slate-100" : "min-h-screen bg-white text-slate-800"}>
      <section className={`relative overflow-hidden border-b ${isDark ? "border-slate-800" : "border-sky-100"}`}>
        <div
          className={`pointer-events-none absolute inset-0 ${
            isDark
              ? "bg-[radial-gradient(circle_at_18%_18%,rgba(14,116,144,0.35),transparent_42%),radial-gradient(circle_at_82%_0%,rgba(30,64,175,0.28),transparent_36%),linear-gradient(135deg,#020617,#0f172a,#111827)]"
              : "bg-[radial-gradient(circle_at_18%_18%,rgba(224,242,254,0.8),transparent_42%),radial-gradient(circle_at_82%_0%,rgba(219,234,254,0.65),transparent_36%),linear-gradient(135deg,#ffffff,#f8fbff,#f0f8ff)]"
          }`}
        />
        <div
          className={`pointer-events-none absolute -top-20 right-[-8rem] h-80 w-80 rounded-full blur-2xl ${
            isDark ? "bg-gradient-to-br from-sky-900/40 to-blue-900/30" : "bg-gradient-to-br from-sky-100/60 to-blue-100/50"
          }`}
        />
        <div
          className={`pointer-events-none absolute -bottom-16 left-[-7rem] h-72 w-72 rounded-full blur-2xl ${
            isDark ? "bg-gradient-to-br from-blue-900/30 to-slate-900/40" : "bg-gradient-to-br from-blue-100/50 to-slate-100/50"
          }`}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10">
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            className={`absolute top-6 right-6 inline-flex items-center gap-2 rounded-full border px-2 py-1 text-xs font-semibold tracking-wide uppercase ${
              isDark
                ? "border-slate-700 bg-slate-900 text-sky-300 hover:bg-slate-800"
                : "border-sky-200 bg-white text-sky-700 hover:bg-sky-50"
            }`}
          >
            <span className="relative flex h-7 w-14 items-center rounded-full bg-sky-100/70 p-1">
              <motion.span
                animate={{ x: isDark ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 24 }}
                className={`absolute h-5 w-5 rounded-full ${isDark ? "bg-slate-800" : "bg-white"} shadow`}
              />
              <motion.span
                animate={{ rotate: isDark ? 180 : 0, opacity: isDark ? 0.35 : 1 }}
                transition={{ duration: 0.35 }}
                className="relative z-10 ml-0.5"
              >
                <SunIcon className="h-4 w-4 text-amber-500" />
              </motion.span>
              <motion.span
                animate={{ rotate: isDark ? 0 : -180, opacity: isDark ? 1 : 0.35 }}
                transition={{ duration: 0.35 }}
                className="relative z-10 ml-auto mr-0.5"
              >
                <MoonIcon className="h-4 w-4 text-sky-700" />
              </motion.span>
            </span>
            <span>{isDark ? "Light" : "Dark"}</span>
          </button>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mb-4 inline-block rounded-full border px-4 py-1 text-sm tracking-[0.18em] uppercase ${
              isDark ? "border-sky-800 bg-slate-900 text-sky-300" : "border-sky-200 bg-sky-50 text-sky-700"
            }`}
          >
            Insurance Operations Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-5xl leading-tight font-semibold md:text-7xl"
          >
            Namrata Khanal
            <span className={`mt-2 block ${isDark ? "text-sky-300" : "text-sky-700"}`}>
              Executive Support, Compliance, and Administration
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className={`mt-8 max-w-3xl text-lg ${isDark ? "text-slate-200" : "text-slate-700"}`}
          >
            Dedicated and versatile professional with experience in executive secretarial duties, compliance, admin, and
            human resources. Focused on improving operations, maintaining regulatory standards, and supporting leadership
            execution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={`mailto:${contact.email}`}
              className={`rounded-xl border px-6 py-3 font-semibold shadow-sm transition ${
                isDark
                  ? "border-slate-500 bg-slate-900 text-slate-100 hover:border-sky-500 hover:text-sky-200"
                  : "border-sky-200 bg-sky-50 text-sky-900 hover:border-sky-300 hover:bg-white"
              }`}
            >
              Contact Me
            </a>
            <a
              href="#experience"
              className={`rounded-xl border px-6 py-3 font-semibold shadow-sm transition ${
                isDark
                  ? "border-slate-500 bg-slate-900 text-slate-100 hover:border-sky-500 hover:text-sky-200"
                  : "border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              View Experience
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8 flex flex-wrap gap-3 text-sm"
          >
            <a
              href={`tel:${contact.phone}`}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm ${
                isDark ? "border-slate-700 bg-slate-900 text-slate-200" : "border-sky-100 bg-white text-slate-700"
              }`}
            >
              <PhoneIcon className={`h-4 w-4 ${isDark ? "text-sky-300" : "text-sky-700"}`} />
              <span>{contact.phone}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm ${
                isDark ? "border-slate-700 bg-slate-900 text-slate-200" : "border-sky-100 bg-white text-slate-700"
              }`}
            >
              <MailIcon className={`h-4 w-4 ${isDark ? "text-sky-300" : "text-sky-700"}`} />
              <span>{contact.email}</span>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm ${
                isDark ? "border-slate-700 bg-slate-900 text-slate-200" : "border-sky-100 bg-white text-slate-700"
              }`}
            >
              <LinkedinIcon className={`h-4 w-4 ${isDark ? "text-sky-300" : "text-sky-700"}`} />
              <span>linkedin.com/in/namrata-khanal-3a2351161</span>
            </a>
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm ${
                isDark ? "border-slate-700 bg-slate-900 text-slate-200" : "border-sky-100 bg-white text-slate-700"
              }`}
            >
              <LocationIcon className={`h-4 w-4 ${isDark ? "text-sky-300" : "text-sky-700"}`} />
              <span>Kathmandu, Nepal</span>
            </span>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <h2 className={`text-4xl font-semibold ${isDark ? "text-sky-300" : "text-sky-800"}`}>Professional Strengths</h2>
        <p className={`mt-3 max-w-2xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          Core strengths built through multi-department insurance operations, executive support, and compliance handling.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className={`rounded-2xl border px-4 py-3 text-sm tracking-wide shadow-sm ${
                isDark ? "border-slate-700 bg-slate-900 text-slate-200" : "border-sky-100 bg-white text-slate-700"
              }`}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
        <h2 className={`text-4xl font-semibold ${isDark ? "text-sky-300" : "text-sky-800"}`}>Skills</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className={`rounded-2xl border px-4 py-3 text-sm tracking-wide shadow-sm ${
                isDark
                  ? "border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200"
                  : "border-sky-100 bg-gradient-to-br from-white to-sky-50 text-slate-700"
              }`}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className={`border-y ${isDark ? "border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900" : "border-sky-100 bg-gradient-to-b from-white to-sky-50/60"}`}
      >
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <h2 className={`text-4xl font-semibold ${isDark ? "text-sky-300" : "text-sky-800"}`}>Career Timeline</h2>
          <Timeline items={experience} dark={isDark} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <h2 className={`text-4xl font-semibold ${isDark ? "text-sky-300" : "text-sky-800"}`}>Education</h2>
        <div className="mt-6 space-y-3">
          {education.map((item, i) => (
            <motion.p
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`rounded-2xl border px-4 py-3 shadow-sm ${
                isDark ? "border-slate-700 bg-slate-900 text-slate-200" : "border-sky-100 bg-white text-slate-700"
              }`}
            >
              {item}
            </motion.p>
          ))}
        </div>
      </section>

      <section
        className={`border-y ${
          isDark
            ? "border-slate-800 bg-[linear-gradient(140deg,#020617,#0f172a,#111827)]"
            : "border-sky-100 bg-[linear-gradient(140deg,#ffffff,#f8fbff,#f0f8ff)]"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <h2 className={`text-4xl font-semibold ${isDark ? "text-sky-300" : "text-sky-800"}`}>Beyond Work</h2>
          <p className={`mt-3 max-w-2xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            A few things that define how I work and grow every day.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {funFacts.map((fact, i) => (
              <motion.article
                key={fact.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl border p-5 shadow-sm ${
                  isDark ? "border-slate-700 bg-slate-900" : "border-sky-100 bg-white"
                }`}
              >
                <div className={`mb-3 inline-flex rounded-full p-2 ${isDark ? "bg-slate-800 text-sky-300" : "bg-sky-50 text-sky-700"}`}>
                  <SparkIcon className="h-4 w-4" />
                </div>
                <h3 className={`text-2xl font-semibold ${isDark ? "text-slate-100" : "text-slate-800"}`}>{fact.title}</h3>
                <p className={`mt-2 text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>{fact.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <footer className={`border-t ${isDark ? "border-slate-800 bg-slate-950" : "border-sky-100 bg-white"}`}>
        <div
          className={`mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-10 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          <p>&copy; {new Date().getFullYear()} Namrata Khanal. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${contact.email}`} className={isDark ? "hover:text-sky-300" : "hover:text-sky-700"}>
              Email
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className={isDark ? "hover:text-sky-300" : "hover:text-sky-700"}
            >
              LinkedIn
            </a>
            <a href="#experience" className={isDark ? "hover:text-sky-300" : "hover:text-sky-700"}>
              Timeline
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}


