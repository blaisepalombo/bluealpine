import styles from "./slideframe.module.css";

type SlideFrameProps = {
  number: string;
  kicker: string;
  children: React.ReactNode;
};

export default function SlideFrame({ number, kicker, children }: SlideFrameProps) {
  return (
    <article className={styles.frame}>
      <div className={`${styles.meta} fade-1`}>
        <span>{number}</span>
        <span>{kicker}</span>
      </div>
      <div className={styles.content}>{children}</div>
    </article>
  );
}
