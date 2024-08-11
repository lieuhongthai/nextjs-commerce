"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";

interface IProps {
  slides: number[];
  options?: EmblaOptionsType;
}

const Carousel = (props: IProps) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      setSelectedIndex(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      return () => {
        emblaApi.off("select", onSelect);
      };
    }
  }, [emblaApi, onSelect]);

  return (
    <div className="embla relative ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container h-[25rem] md:h-[32rem]">
          {slides.map((index) => (
            <div
              className="embla__slide"
              key={`embla-key-index-${index}`}
              style={{ background: "transparent" }}
            >
              <Image
                className="embla__slide__img"
                loader={({ width }) =>
                  `https://picsum.photos/${width}/300?v=${index}`
                }
                src={`${index}.png`}
                alt="Your alt text"
                width={800}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="embla__dots">
          {emblaApi &&
            emblaApi
              .scrollSnapList()
              .map((_, index) => (
                <DotButton
                  key={`embla__dot-${index}`}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(
                    index === selectedIndex ? " embla__dot--selected" : ""
                  )}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

export const useDotButton = (
  emblaApi: EmblaCarouselType,
  onButtonClick: (emblaApi: EmblaCarouselType) => void
) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
    return () => {
      emblaApi
        .off("reInit", onInit)
        .off("reInit", onSelect)
        .off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

const DotButton = (props: any) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};
