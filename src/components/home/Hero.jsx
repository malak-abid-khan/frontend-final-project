import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { assets, heroData } from "@/assets/assets";

const Hero = () => {
  return (
    <section className=" bg-blue-600/5 py-10 border-b border-foreground">
      <div className="container mx-5 md:mx-auto">
        <Carousel>
          <CarouselContent>
            {heroData.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex items-center flex-col md:flex-row">
                  <div className="flex-1/2">
                    <h1 className="text-5xl lg:text-7xl font-bold bg-primary text-white inline-block py-2 px-5 rounded-lg mb-2">
                      {item.item_name}
                    </h1>
                    <p className="text-muted-foreground">{item.description}</p>
                    <Button className="mt-3">Explore</Button>
                  </div>

                  <div className="flex-1/2 flex justify-end">
                    <img
                      className="h-1/4 w-[500px]"
                      src={item.image}
                      alt="heroImage"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
