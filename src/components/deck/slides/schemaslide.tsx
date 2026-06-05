import SlideFrame from "@/components/deck/slideframe";
import styles from "./schemaslide.module.css";

const schemaTypes = ["Product", "FAQPage", "Article", "Organization", "Review"];

export default function SchemaSlide() {
  return (
    <SlideFrame number="07" kicker="Schema">
      <section className={styles.layout}>
        <div>
          <h1 className="fade-2">Structured data helps machines understand what a page means.</h1>
          <p className={`${styles.lead} fade-3`}>Schema markup gives search engines extra context. It can identify products, FAQs, articles, reviews, organizations, prices, ratings, and other important page details.</p>
        </div>
        <div className={`${styles.stack} fade-4`}>
          <div className={styles.code}><span>Recommended markup</span><code>{schemaTypes.join(" · ")}</code></div>
          <p className={styles.note}>Schema does not guarantee rankings or AI citations, but it reduces ambiguity. That helps search engines and AI systems classify the page more accurately.</p>
        </div>
      </section>
    </SlideFrame>
  );
}
