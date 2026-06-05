import SlideFrame from "@/components/deck/slideframe";
import styles from "./sourcesslide.module.css";

const sources = [
  {
    title: "SEO Starter Guide",
    publisher: "Google Search Central",
    use: "SEO fundamentals, crawlability, indexing, links, and site structure.",
    href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
  },
  {
    title: "AI Features and Your Website",
    publisher: "Google Search Central",
    use: "How AI Overviews and AI Mode relate to indexed content and SEO.",
    href: "https://developers.google.com/search/docs/appearance/ai-features",
  },
  {
    title: "Structured Data Intro",
    publisher: "Google Search Central",
    use: "Schema markup, JSON-LD, and machine-readable page context.",
    href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
  },
  {
    title: "Generative AI Content",
    publisher: "Google Search Central",
    use: "Quality, accuracy, relevance, and people-first content principles.",
    href: "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content",
  },
  {
    title: "ChatGPT Search",
    publisher: "OpenAI",
    use: "AI search behavior, source links, and conversational search.",
    href: "https://openai.com/index/introducing-chatgpt-search/",
  },
  {
    title: "AI Overviews and AI Mode",
    publisher: "Google",
    use: "AI Mode, complex searches, query fan-out, and AI-powered responses.",
    href: "https://blog.google/products-and-platforms/products/search/ai-mode-search/",
  },
];

export default function SourcesSlide() {
  return (
    <SlideFrame number="09" kicker="Research Base">
      <section className={styles.layout}>
        <div className={styles.intro}>
          <h1 className="fade-2">Sources used to build this strategy.</h1>

          <p className={`${styles.lead} fade-3`}>
            These references shaped the SEO, AEO, GEO, structured data, and AI
            search recommendations throughout the project.
          </p>
        </div>

        <div className={`${styles.grid} fade-4`}>
          {sources.map((source) => (
            <a
              className={styles.source}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              key={source.title}
            >
              <span>{source.publisher}</span>
              <h2>{source.title}</h2>
              <p>{source.use}</p>
            </a>
          ))}
        </div>
      </section>
    </SlideFrame>
  );
}