import FakeData from '@/Shared/FakeData';
import React from 'react';
import CarItem from './CarItem';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function MostSearchCar() {
  return (
    <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-24">
      <h2 className="font-bold text-2xl md:text-3xl text-center my-10 md:my-16">
        Most Searched Cars
      </h2>
      <Carousel>
        <CarouselContent>
          {FakeData.carList.map((car, index) => (
            <CarouselItem className="basis-3/4 sm:basis-1/1 md:basis-1/3 lg:basis-1/4 " key={index}>
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearchCar;
