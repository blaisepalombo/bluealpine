import SlideFrame from "@/components/deck/slideframe";
import styles from "./finalslide.module.css";

export default function FinalSlide() {
  return (
    <SlideFrame number="08" kicker="Final Takeaway">
      <section className={styles.layout}>
        <div className={styles.copy}>
          <h1 className="fade-2">
            The future is not SEO versus AI. It is SEO plus AI visibility.
          </h1>

          <p className={`${styles.lead} fade-3`}>
            Search engines rank pages. AI systems generate answers. Modern
            content has to work for both.
          </p>
        </div>

        <div className={`${styles.summary} fade-4`}>
          <div>SEO creates the foundation.</div>
          <div>AEO makes content answer-ready.</div>
          <div>GEO makes content AI-ready.</div>
          <div>Authority makes the content trustworthy.</div>
        </div>
      </section>
    </SlideFrame>
  );
}