import type { ComponentProps } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

function HeroCarousel({ images }: { images: ComponentProps<"img">[] }) {
  return (
    <Carousel>
      <CarouselContent className="w-full gap-0">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img {...image} className="w-full"></img>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default HeroCarousel;
