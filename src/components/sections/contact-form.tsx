"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

// ponytail: Formspree endpoint via env — no backend, no deps. Upgrade to a
// Resend route handler only if volume/branding demands it.
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  if (!ENDPOINT) return null; // form hidden until the endpoint is configured

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT!, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label className="cf-field">
        <span>Name</span>
        <input name="name" type="text" required autoComplete="name" placeholder="Your name" />
      </label>
      <label className="cf-field">
        <span>Email</span>
        <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
      </label>
      <label className="cf-field">
        <span>Message</span>
        <textarea name="message" required rows={4} placeholder="What are you building?" />
      </label>
      <button type="submit" className="btn btn-primary cf-submit" disabled={status === "sending"}>
        <FaPaperPlane aria-hidden="true" />
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      <p className="cf-status" role="status" aria-live="polite">
        {status === "sent" && "Thanks — I'll get back to you fast."}
        {status === "error" && "Something went wrong. Email me directly instead."}
      </p>
    </form>
  );
}
