import SlideFrame from "@/components/deck/slideframe";
import styles from "./measurementslide.module.css";

const metrics = [
  "Organic search traffic",
  "Keyword ranking movement",
  "Branded search growth",
  "Referral traffic from AI platforms",
  "AI citations in Perplexity or Google AI Overviews",
  "Conversions from guides and comparison pages",
];

export default function MeasurementSlide() {
  return (
    <SlideFrame number="07" kicker="Measurement">
      <section className={styles.layout}>
        <div className={styles.copy}>
          <h1 className="fade-2">AI visibility needs its own tracking strategy.</h1>

          <p className={`${styles.lead} fade-3`}>
            Traditional SEO looks at rankings, clicks, and traffic. AI search
            adds new questions: is the brand being mentioned, cited, or
            recommended inside AI-generated answers?
          </p>
        </div>

        <div className={`${styles.grid} fade-4`}>
          {metrics.map((metric) => (
            <div className={styles.metric} key={metric}>
              {metric}
            </div>
          ))}
        </div>
      </section>
    </SlideFrame>
  );
}