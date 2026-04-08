import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { contactChannels } from "../data/siteContent";
import BenefitIcon from "./BenefitIcon";

const initialForm = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.website) {
      return;
    }

    if (!scriptUrl) {
      setStatus("error");
      setFeedback("The form is not connected yet. Add the Google Apps Script URL first.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const body = new URLSearchParams({
        name: form.name,
        businessName: form.businessName,
        email: form.email,
        phone: form.phone,
        message: form.message,
        website: form.website,
      });

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
      });

      setForm(initialForm);
      setStatus("success");
      setFeedback("Thanks, your details have been sent. We’ll get back to you soon.");
    } catch (error) {
      setStatus("error");
      setFeedback("Something went wrong while sending the form. Please try WhatsApp or email instead.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 pb-6">
      <SectionHeading
        eyebrow="Contact"
        title="Tell us about your store and we’ll show you the best way to launch online."
        description="If you already sell through Instagram, WhatsApp, or in-store, we can shape the right website and sales funnel around your current business. And if you already have a website that feels dated, we can revamp that too."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-4">
          {contactChannels.map((channel, index) => (
            <motion.a
              key={channel.label}
              href={channel.href}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="block rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/18 hover:bg-white/[0.05]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <BenefitIcon type={channel.icon} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                    {channel.label}
                  </p>
                  <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">
                    {channel.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {channel.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl"
        >
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm text-white/62">Your Name</span>
              <input
                type="text"
                name="name"
                placeholder="Aarav"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-[#121214] px-4 py-3 text-white outline-none transition placeholder:text-white/24 focus:border-white/20"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm text-white/62">Business Name</span>
              <input
                type="text"
                name="businessName"
                placeholder="Aarav Furniture"
                value={form.businessName}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-[#121214] px-4 py-3 text-white outline-none transition placeholder:text-white/24 focus:border-white/20"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm text-white/62">Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-[#121214] px-4 py-3 text-white outline-none transition placeholder:text-white/24 focus:border-white/20"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm text-white/62">Phone or WhatsApp</span>
              <input
                type="text"
                name="phone"
                placeholder="+91 98XXXXXXX"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-[#121214] px-4 py-3 text-white outline-none transition placeholder:text-white/24 focus:border-white/20"
              />
            </label>
          </div>

          <label className="mt-5 block space-y-2">
            <span className="text-sm text-white/62">What do you want to sell online?</span>
            <textarea
              rows="5"
              name="message"
              placeholder="Tell us about your products, your Instagram page, or the kind of online store you want."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-[1.5rem] border border-white/10 bg-[#121214] px-4 py-3 text-white outline-none transition placeholder:text-white/24 focus:border-white/20"
            />
          </label>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-white/48">
              {feedback || "We’ll usually reply with a suggested setup, timeline, and next step."}
            </p>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] hover:bg-sky-100"
            >
              {status === "loading" ? "Sending..." : "Request My Store"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
