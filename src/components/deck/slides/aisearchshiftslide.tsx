import SlideFrame from "@/components/deck/slideframe";
import styles from "./aisearchshiftslide.module.css";

export default function AiSearchShiftSlide() {
  return (
    <SlideFrame number="03" kicker="AI Search Shift">
      <section className={styles.layout}>
        <div className={styles.header}>
          <h1 className="fade-2">
            AI changes the goal from ranking to being referenced.
          </h1>

          <p className={`${styles.lead} fade-3`}>
            Traditional search usually sends users to a list of results. AI
            search can answer the question directly, summarize sources, and
            recommend products inside the response.
          </p>
        </div>

        <div className={`${styles.boxGrid} fade-4`}>
          <div className={styles.box}>
            <span>What I learned</span>
            <p>
              A business can lose visibility if it only thinks about ranking
              pages and not about whether AI systems can understand and reuse
              the content.
            </p>
          </div>

          <div className={styles.box}>
            <span>Why it matters</span>
            <p>
              The customer may never reach a traditional results page. The
              answer, comparison, or recommendation may happen inside the AI
              interface.
            </p>
          </div>

          <div className={styles.boxWide}>
            <span>How to implement it</span>
            <p>
              Create content that answers specific questions, supports claims
              with evidence, uses clear headings, includes structured data, and
              builds trust across the web through reviews and mentions.
            </p>
          </div>
        </div>
      </section>
    </SlideFrame>
  );
}