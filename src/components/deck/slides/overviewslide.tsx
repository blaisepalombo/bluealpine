import SlideFrame from "@/components/deck/slideframe";
import styles from "./overviewslide.module.css";

export default function OverviewSlide() {
  return (
    <SlideFrame number="01" kicker="Overview">
      <section className={styles.layout}>
        <div className={styles.main}>
          <h1 className="fade-2">Search is shifting from links to answers.</h1>

          <p className={`${styles.lead} fade-3`}>
            This project explores what I learned about traditional SEO, AI
            search, and how businesses can improve visibility when customers use
            tools like ChatGPT, Gemini, Perplexity, and Google AI Overviews.
          </p>
        </div>

        <div className={`${styles.boxGrid} fade-4`}>
          <div className={styles.box}>
            <span>What I learned</span>
            <p>
              Search is no longer only about ranking blue links. AI systems can
              summarize, cite, compare, and recommend brands directly.
            </p>
          </div>

          <div className={styles.box}>
            <span>How to apply it</span>
            <p>
              Build content that is useful for both search engines and AI:
              structured, specific, trustworthy, and written around real
              customer questions.
            </p>
          </div>
        </div>
      </section>
    </SlideFrame>
  );
}