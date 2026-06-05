import type { CSSProperties } from "react";
import styles from "./progress.module.css";

type ProgressProps = {
  activeSlide: number;
  totalSlides: number;
  progress: number;
  onPrevious: () => void;
  onNext: () => void;
};

export default function Progress({
  activeSlide,
  totalSlides,
  progress,
  onPrevious,
  onNext,
}: ProgressProps) {
  return (
    <div
      className={styles.progress}
      style={{ "--progress": progress } as CSSProperties}
    >
      <button
        type="button"
        className={`${styles.arrow} ${styles.desktopArrow}`}
        onClick={onPrevious}
        disabled={activeSlide === 0}
        aria-label="Previous slide"
      >
        ←
      </button>

      <div className={styles.middle} aria-label="Slide progress">
        <div className={styles.track}>
          <div className={styles.fill} />
        </div>

        <div className={styles.label}>
          {String(activeSlide + 1).padStart(2, "0")} /{" "}
          {String(totalSlides).padStart(2, "0")}
        </div>
      </div>

      <button
        type="button"
        className={`${styles.arrow} ${styles.desktopArrow}`}
        onClick={onNext}
        disabled={activeSlide === totalSlides - 1}
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}