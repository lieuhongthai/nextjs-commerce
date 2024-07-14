"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";

interface IProps {
  slides: number[];
  options?: EmblaOptionsType;
}

// export function imageLoader({ width, height, src }: any) {
//   return `https://picsum.photos/${width}/350?v=${src}`;
// }
const Carousel = (props: IProps) => {
  // ** Props
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // ** State
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      setSelectedIndex(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback((embleApi: EmblaCarouselType) => {
    setSelectedIndex(embleApi.selectedScrollSnap());
  }, []);

  // ** Effect

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
      emblaApi.on("select", onSelect);
    }
  }, [emblaApi, onSelect]);

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container md:h-[32rem]">
          {slides.map((index) => (
            <div className="embla__slide" key={`embla-key-index-${index}`}>
              <Image
                className="embla__slide__img"
                loader={() => `https://picsum.photos/1912/512?v=${index}`}
                src={`${index}.png`}
                alt="Your alt text"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* controller */}

      {/* {console.log(12005, emblaApi?.scrollSnapList())} */}

      <div className="embla__controls absolute bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="embla__dots">
          {emblaApi &&
            emblaApi
              .scrollSnapList()
              .map((v, index) => (
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
export const useDotButton = (emblaApi: any, onButtonClick: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
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
