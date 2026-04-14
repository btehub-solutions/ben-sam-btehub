"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { 
  RiMapPinLine, 
  RiMailLine, 
  RiLinkedinFill, 
  RiGithubFill,
  RiFacebookFill,
  RiWhatsappFill,
  RiLoader4Line,
  RiCheckLine,
  RiErrorWarningLine
} from "react-icons/ri";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", subject: "", message: "" };

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formData.subject) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus("loading");
    
    try {
      // Construct WhatsApp message without markdown symbols
      const phoneNumber = "2347045422815";
      const waMessage = `PORTFOLIO CONTACT FORM%0A%0A` +
        `Name: ${formData.name}%0A` +
        `Email: ${formData.email}%0A` +
        `Subject: ${formData.subject}%0A%0A` +
        `--- MESSAGE ---%0A` +
        `${formData.message}`;
      
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${waMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");
      
      // Update status to success and reset form
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status back to idle after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contact" showDivider={false}>
      <div className="flex flex-col items-start mb-12">
        <span className="text-accent-violet font-display font-medium text-sm tracking-wider uppercase mb-2">
          Contact
        </span>
        <h2 className="text-[32px] md:text-[40px] font-display font-bold text-text-primary-light dark:text-text-primary-dark">
          Let&apos;s Build Something Intelligent
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 w-full">
        {/* Left - Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <p className="font-body text-[16px] text-text-muted-light dark:text-text-muted-dark max-w-sm leading-relaxed">
            Open to full-time AI/ML Engineering roles globally. Based in Nigeria, available remotely. Let&apos;s connect and build something that matters.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <RiMapPinLine className="w-[18px] h-[18px] text-accent-violet" />
              <span className="font-body text-[14px] text-text-muted-light dark:text-text-muted-dark">
                Abeokuta / Lagos, Nigeria
              </span>
            </div>
            <div className="flex items-center gap-3">
              <RiMailLine className="w-[18px] h-[18px] text-accent-violet" />
              <a href="mailto:bensamoladoyin1@gmail.com" className="font-body text-[14px] text-text-muted-light dark:text-text-muted-dark hover:text-accent-violet transition-colors">
                bensamoladoyin1@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <RiLinkedinFill className="w-[18px] h-[18px] text-accent-violet" />
              <a href="https://www.linkedin.com/in/ben-sam-oladoyin-527966233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="font-body text-[14px] text-text-muted-light dark:text-text-muted-dark hover:text-accent-violet transition-colors">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-3">
              <RiGithubFill className="w-[18px] h-[18px] text-accent-violet" />
              <a href="https://github.com/btehub-solutions" target="_blank" rel="noreferrer" className="font-body text-[14px] text-text-muted-light dark:text-text-muted-dark hover:text-accent-violet transition-colors">
                GitHub Organization
              </a>
            </div>
            <div className="flex items-center gap-3">
              <RiFacebookFill className="w-[18px] h-[18px] text-accent-violet" />
              <a href="https://www.facebook.com/share/16KthtYMDY/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="font-body text-[14px] text-text-muted-light dark:text-text-muted-dark hover:text-accent-violet transition-colors">
                Facebook Page
              </a>
            </div>
            <div className="flex items-center gap-3">
              <RiWhatsappFill className="w-[18px] h-[18px] text-accent-violet" />
              <a href="https://wa.me/2347045422815" target="_blank" rel="noreferrer" className="font-body text-[14px] text-text-muted-light dark:text-text-muted-dark hover:text-accent-violet transition-colors">
                WhatsApp Contact
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-light-surface dark:bg-dark-surface border text-text-primary-light dark:text-text-primary-dark font-body text-[14px] placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none transition-colors ${
                  errors.name ? "border-red-400" : "border-light-border dark:border-dark-border focus:border-accent-violet focus:ring-1 focus:ring-accent-violet"
                }`}
                placeholder="Full Name"
              />
              {errors.name && <span className="font-body text-[12px] text-red-400 pl-1">{errors.name}</span>}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-light-surface dark:bg-dark-surface border text-text-primary-light dark:text-text-primary-dark font-body text-[14px] placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none transition-colors ${
                  errors.email ? "border-red-400" : "border-light-border dark:border-dark-border focus:border-accent-violet focus:ring-1 focus:ring-accent-violet"
                }`}
                placeholder="Email"
              />
              {errors.email && <span className="font-body text-[12px] text-red-400 pl-1">{errors.email}</span>}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-light-surface dark:bg-dark-surface border text-text-primary-light dark:text-text-primary-dark font-body text-[14px] placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none transition-colors ${
                  errors.subject ? "border-red-400" : "border-light-border dark:border-dark-border focus:border-accent-violet focus:ring-1 focus:ring-accent-violet"
                }`}
                placeholder="Subject"
              />
              {errors.subject && <span className="font-body text-[12px] text-red-400 pl-1">{errors.subject}</span>}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl bg-light-surface dark:bg-dark-surface border text-text-primary-light dark:text-text-primary-dark font-body text-[14px] placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark focus:outline-none transition-colors resize-none ${
                  errors.message ? "border-red-400" : "border-light-border dark:border-dark-border focus:border-accent-violet focus:ring-1 focus:ring-accent-violet"
                }`}
                placeholder="Message"
              />
              {errors.message && <span className="font-body text-[12px] text-red-400 pl-1">{errors.message}</span>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "loading"}
              className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-violet to-accent-cyan text-white font-display font-medium text-[15px] shadow-lg shadow-accent-violet/20 hover:shadow-accent-violet/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "idle" && "Send Message"}
              {status === "loading" && (
                <>
                  <RiLoader4Line className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              )}
              {status === "success" && (
                <>
                  <RiCheckLine className="w-5 h-5 text-accent-cyan" />
                  <span className="text-accent-cyan">Message Sent!</span>
                </>
              )}
              {status === "error" && (
                <>
                  <RiErrorWarningLine className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">Something went wrong</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
