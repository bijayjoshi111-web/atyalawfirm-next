"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const services = [
  "Corporate Law",
  "Litigation",
  "Intellectual Property",
  "Real Estate",
  "Tax Law",
  "Family Law",
  "Employment Law",
  "Bankruptcy & Restructuring",
  "International Law",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSendError("");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "Not provided",
          service: data.service,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitted(true);
    } catch {
      setSendError("Failed to send your message. Please try again or email us directly.");
    }
  };

  if (submitted) {
    return (
      <div className="border border-[#a68365] bg-[#f2e7dc] p-12 text-center flex flex-col items-center justify-center min-h-[500px]">
        <CheckCircle size={48} className="text-[#a68365] mb-5" />
        <h3 className="font-display text-3xl text-[#1f1f1f] mb-3">
          Message Received
        </h3>
        <p className="text-[#666] leading-relaxed max-w-sm">
          Thank you for reaching out. One of our attorneys will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#f2e7dc] border border-[#e6dace] p-8 md:p-10">
      <h3 className="font-display text-2xl text-[#1f1f1f] mb-1">Send a Message</h3>
      <p className="text-[#999] text-sm mb-7">All information is strictly confidential.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#666] mb-2">
              Full Name <span className="text-[#a68365]">*</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="John Smith"
              className={`w-full border bg-white px-4 py-3 text-sm text-[#1f1f1f] outline-none focus:border-[#a68365] transition-colors placeholder:text-[#bbb] ${
                errors.name ? "border-red-400" : "border-[#cfc2b3]"
              }`}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#666] mb-2">
              Email <span className="text-[#a68365]">*</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
              })}
              type="email"
              placeholder="john@example.com"
              className={`w-full border bg-white px-4 py-3 text-sm text-[#1f1f1f] outline-none focus:border-[#a68365] transition-colors placeholder:text-[#bbb] ${
                errors.email ? "border-red-400" : "border-[#cfc2b3]"
              }`}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#666] mb-2">Phone</label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full border border-[#cfc2b3] bg-white px-4 py-3 text-sm text-[#1f1f1f] outline-none focus:border-[#a68365] transition-colors placeholder:text-[#bbb]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#666] mb-2">
              Practice Area <span className="text-[#a68365]">*</span>
            </label>
            <select
              {...register("service", { required: "Please select a service" })}
              className={`w-full border bg-white px-4 py-3 text-sm text-[#1f1f1f] outline-none focus:border-[#a68365] transition-colors ${
                errors.service ? "border-red-400" : "border-[#cfc2b3]"
              }`}
            >
              <option value="">Select a service...</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-[#666] mb-2">
            Message <span className="text-[#a68365]">*</span>
          </label>
          <textarea
            {...register("message", { required: "Message is required", minLength: { value: 20, message: "Please provide more detail (min 20 characters)" } })}
            rows={5}
            placeholder="Briefly describe your legal matter..."
            className={`w-full border bg-white px-4 py-3 text-sm text-[#1f1f1f] outline-none focus:border-[#a68365] transition-colors resize-none placeholder:text-[#bbb] ${
              errors.message ? "border-red-400" : "border-[#cfc2b3]"
            }`}
          />
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <p className="text-[#999] text-xs leading-relaxed">
          By submitting this form, you acknowledge that your information will be kept strictly confidential. This does not create an attorney-client relationship.
        </p>

        {sendError && (
          <p className="text-red-500 text-sm">{sendError}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#472e18] text-white py-4 text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-[#a68365] hover:text-white transition-all flex items-center justify-center gap-3 disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : (
            <>
              Send Message <Send size={14} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
