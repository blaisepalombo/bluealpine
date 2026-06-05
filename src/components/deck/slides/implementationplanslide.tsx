import SlideFrame from "@/components/deck/slideframe";
import styles from "./implementationplanslide.module.css";

const steps = [
  {
    title: "Question-led content",
    text: "Build pages around real customer questions, not just keywords.",
  },
  {
    title: "FAQ + comparison pages",
    text: "Create content AI can summarize when users compare products.",
  },
  {
    title: "Schema markup",
    text: "Use Product, FAQ, Article, Organization, and Review schema where appropriate.",
  },
  {
    title: "Authority signals",
    text: "Grow reviews, backlinks, third-party mentions, videos, and expert resources.",
  },
];

export default function ImplementationPlanSlide() {
  return (
    <SlideFrame number="06" kicker="Implementation Plan">
      <section className={styles.layout}>
        <div className={styles.copy}>
          <h1 className="fade-2">
            The practical strategy is SEO plus AI-ready content.
          </h1>

          <p className={`${styles.lead} fade-3`}>
            The goal is not to abandon SEO. The goal is to expand it so the
            business can appear in search results and also be useful to AI
            systems that summarize, cite, or recommend sources.
          </p>
        </div>

        <div className={`${styles.steps} fade-4`}>
          {steps.map((step, index) => (
            <div className={styles.step} key={step.title}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <div>
                <span>{step.title}</span>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SlideFrame>
  );
}