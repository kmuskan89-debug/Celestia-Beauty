"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How long does shipping take?",
    answer: "Standard domestic shipping takes 3-5 business days. Express shipping takes 1-2 business days. Free standard shipping is automatically applied to all orders over $50.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer hassle-free returns within 30 days of purchase. Items must be unused, in their original packaging, and in resalable condition. Contact our support team to start a return.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Yes! You can book a free 15-minute 1-on-1 virtual consultation with our beauty advisors to design your custom skincare or makeup routine. Go to your profile menu to schedule.",
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Yes, Celestia is 100% committed to ethical beauty. All of our curated brands and products are certified cruelty-free, and we also offer a wide selection of vegan products.",
  },
];

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1200);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.container}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbsLink}>
          Home
        </Link>
        <span>&gt;</span>
        <span>Contact</span>
      </nav>

      {/* Header section */}
      <header className={styles.headerSection}>
        <h1 className={styles.pageTitle}>Get in Touch</h1>
        <p className={styles.pageSubtitle}>
          We would love to hear from you. Whether you have questions about our premium beauty products, shipping, or returns, our team is here to help.
        </p>
      </header>

      {/* Main Column Split */}
      <main className={styles.mainContent}>
        {/* Left Side: Contact Details */}
        <section className={styles.infoCol} aria-label="Contact Information">
          {/* Card 1: Email */}
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <h2 className={styles.cardTitle}>Email Us</h2>
              <p className={styles.cardValue}>
                support@celestia-beauty.com<br />
                press@celestia-beauty.com
              </p>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <h2 className={styles.cardTitle}>Call Us</h2>
              <p className={styles.cardValue}>
                +1 (800) 555-CELESTIA<br />
                Mon - Fri: 9 AM - 6 PM EST
              </p>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className={styles.cardDetails}>
              <h2 className={styles.cardTitle}>Visit Us</h2>
              <p className={styles.cardValue}>
                Celestia Flagship Store<br />
                121 Celestia Blvd, Suite 400<br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </section>

        {/* Right Side: Interactive Contact Form */}
        <section className={styles.formCol} aria-label="Send Message">
          <div className={styles.formCard}>
            {submitSuccess ? (
              <div className={styles.successBanner}>
                <svg
                  width="48"
                  height="48"
                  fill="none"
                  stroke="#166534"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className={styles.successTitle}>Thank You!</h3>
                <p className={styles.successText}>
                  Your message has been sent successfully. Our beauty consulting team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  {/* Name field */}
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="e.g. Jane Doe"
                    />
                  </div>

                  {/* Email field */}
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message field */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    placeholder="Write your inquiry here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  {isSubmitting ? "Sending..." : "Send Message"} &rarr;
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Accordion FAQ Section */}
      <section className={styles.faqSection} aria-label="Frequently Asked Questions">
        <div className={styles.faqHeader}>
          <span className={styles.faqSubtitle}>Support Center</span>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqList}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={styles.faqQuestionBtn}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <svg
                    className={styles.faqIcon}
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
                <div className={styles.faqAnswerWrapper}>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
