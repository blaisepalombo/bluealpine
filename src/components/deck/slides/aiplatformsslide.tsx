import SlideFrame from "@/components/deck/slideframe";
import styles from "./aiplatformsslide.module.css";

const platforms = [
  ["ChatGPT Search", "Conversational answers with web sources and follow-up questions."],
  ["Google AI Overviews", "AI summaries connected closely to Google Search visibility."],
  ["Gemini", "Google ecosystem, multimodal search, and AI-generated answers."],
  ["Perplexity", "Citation-heavy answers where source quality matters heavily."],
  ["Claude", "Clear, organized, useful information is easier to work with."],
  ["Bing Copilot", "Search results blended with generated responses."],
];

export default function AiPlatformsSlide() {
  return (
    <SlideFrame number="05" kicker="AI Platforms">
      <section className={styles.layout}>
        <div className={styles.intro}>
          <h1 className="fade-2">
            AI platforms create visibility in different ways.
          </h1>

          <p className={`${styles.lead} fade-3`}>
            The tools are not identical, but the common pattern is that clear,
            credible, well-structured content becomes more useful.
          </p>
        </div>

        <div className={`${styles.grid} fade-4`}>
          {platforms.map(([name, description]) => (
            <div className={styles.card} key={name}>
              <span>{name}</span>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
    </SlideFrame>
  );
}