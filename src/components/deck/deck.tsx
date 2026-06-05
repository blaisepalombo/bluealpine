"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./deck.module.css";
import Progress from "./progress";

import OverviewSlide from "./slides/overviewslide";
import SeoFoundationSlide from "./slides/seofoundationslide";
import AiSearchShiftSlide from "./slides/aisearchshiftslide";
import AeoGeoSlide from "./slides/aeogeoslide";
import AiPlatformsSlide from "./slides/aiplatformsslide";
import ImplementationPlanSlide from "./slides/implementationplanslide";
import MeasurementSlide from "./slides/measurementslide";
import FinalSlide from "./slides/finalslide";
import SourcesSlide from "./slides/sourcesslide";

const slides = [
  OverviewSlide,
  SeoFoundationSlide,
  AiSearchShiftSlide,
  AeoGeoSlide,
  AiPlatformsSlide,
  ImplementationPlanSlide,
  MeasurementSlide,
  FinalSlide,
  SourcesSlide,
];

const MOVE_LOCK_MS = 650;
const SWIPE_THRESHOLD = 58;

export default function Deck() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState(1);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const wheelLock = useRef(false);

  const progress = activeSlide / (slides.length - 1);

  const goToSlide = useCallback(
    (index: number) => {
      if (isMoving) return;

      const safeIndex = Math.max(0, Math.min(index, slides.length - 1));
      if (safeIndex === activeSlide) return;

      setDirection(safeIndex > activeSlide ? 1 : -1);
      setActiveSlide(safeIndex);
      setIsMoving(true);

      window.setTimeout(() => {
        setIsMoving(false);
      }, MOVE_LOCK_MS);
    },
    [activeSlide, isMoving]
  );

  const goNext = useCallback(() => {
    goToSlide(activeSlide + 1);
  }, [activeSlide, goToSlide]);

  const goPrevious = useCallback(() => {
    goToSlide(activeSlide - 1);
  }, [activeSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrevious();
    };

    const handleWheel = (event: WheelEvent) => {
      const isMostlyHorizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      const isStrongEnough = Math.abs(event.deltaX) > 36;

      if (!isMostlyHorizontal || !isStrongEnough) return;
      if (wheelLock.current || isMoving) return;

      event.preventDefault();
      wheelLock.current = true;

      if (event.deltaX > 0) {
        goNext();
      } else {
        goPrevious();
      }

      window.setTimeout(() => {
        wheelLock.current = false;
      }, 820);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [goNext, goPrevious, isMoving]);

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null ||
      isMoving
    ) {
      return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const differenceX = touchStartX.current - touchEndX;
    const differenceY = touchStartY.current - touchEndY;

    const isHorizontalSwipe = Math.abs(differenceX) > Math.abs(differenceY);
    const isStrongEnough = Math.abs(differenceX) > SWIPE_THRESHOLD;

    if (isHorizontalSwipe && isStrongEnough) {
      if (differenceX > 0) {
        goNext();
      } else {
        goPrevious();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <main
      className={styles.deck}
      style={
        {
          "--active-slide": activeSlide,
          "--direction": direction,
        } as React.CSSProperties
      }
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <section className={styles.track} aria-label="SEO and AI visibility deck">
        {slides.map((SlideComponent, index) => (
          <div
            className={`${styles.slide} ${
              activeSlide === index ? styles.active : ""
            }`}
            key={index}
            aria-hidden={activeSlide !== index}
          >
            <SlideComponent />
          </div>
        ))}
      </section>

      <Progress
        activeSlide={activeSlide}
        totalSlides={slides.length}
        progress={progress}
        onPrevious={goPrevious}
        onNext={goNext}
      />
    </main>
  );
}