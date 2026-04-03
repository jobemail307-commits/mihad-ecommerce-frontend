import { useEffect, useState, type ComponentProps } from "react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

function HeroCarousel({ images }: { images: ComponentProps<"img">[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    api?.on("select", () => setSelected(api.selectedScrollSnap()));
  }, [api]);
  return (
    <>
      <Carousel opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="w-full gap-0">
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img {...image} className="w-full"></img>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-2 p-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`${index === selected && "bg-foreground"} border-foreground h-2 w-2 rounded-full border`}
          />
        ))}
      </div>
    </>
  );
}

export default HeroCarousel;
