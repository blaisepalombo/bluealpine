import SlideFrame from "@/components/deck/slideframe";
import styles from "./seofoundationslide.module.css";

const actions = [
  "Make pages crawlable and indexable.",
  "Use clear titles, headings, and internal links.",
  "Improve mobile performance and page experience.",
  "Create useful content that answers real customer questions.",
  "Build trust through reviews, mentions, backlinks, and expert resources.",
];

export default function SeoFoundationSlide() {
  return (
    <SlideFrame number="02" kicker="SEO Foundation">
      <section className={styles.layout}>
        <div className={styles.copy}>
          <h1 className="fade-2">
            AI visibility still starts with strong SEO fundamentals.
          </h1>

          <p className={`${styles.lead} fade-3`}>
            One thing I learned is that AI search does not replace SEO. It builds
            on it. If a website is hard to crawl, thin on content, slow on
            mobile, or not trusted, AI systems have weaker material to evaluate.
          </p>
        </div>

        <div className={`${styles.actionBox} fade-4`}>
          <span>Implementation basics</span>

          <div className={styles.list}>
            {actions.map((action, index) => (
              <div className={styles.row} key={action}>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <p>{action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SlideFrame>
  );
}