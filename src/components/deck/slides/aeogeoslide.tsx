import SlideFrame from "@/components/deck/slideframe";
import styles from "./aeogeoslide.module.css";

export default function AeoGeoSlide() {
  return (
    <SlideFrame number="04" kicker="AEO + GEO">
      <section className={styles.layout}>
        <div className={styles.copy}>
          <h1 className="fade-2">
            AEO and GEO are the AI layer on top of SEO.
          </h1>

          <p className={`${styles.lead} fade-3`}>
            AEO focuses on becoming the clearest answer. GEO focuses on making
            content trustworthy and useful enough for generative AI systems to
            summarize, cite, or recommend.
          </p>
        </div>

        <div className={`${styles.compare} fade-4`}>
          <div>
            <span>SEO</span>
            <p>Can this page be found, crawled, understood, and ranked?</p>
          </div>

          <div>
            <span>AEO</span>
            <p>Does this content directly answer the customer’s question?</p>
          </div>

          <div>
            <span>GEO</span>
            <p>Can AI systems trust, summarize, cite, or recommend it?</p>
          </div>
        </div>
      </section>
    </SlideFrame>
  );
}