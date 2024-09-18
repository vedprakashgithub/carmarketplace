import { Separator } from '@radix-ui/react-separator';
import { IoSpeedometerOutline } from "react-icons/io5";
import { TbManualGearbox } from "react-icons/tb";
import { MdOpenInNew } from "react-icons/md";
import React from 'react';
import { LuFuel } from "react-icons/lu";
import { Link } from 'react-router-dom';

function CarItem({ car }) {
  return (
    <Link to={'/listing-details/' + car?.id}>
      <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer'>
        {/* Status tag */}
        <h2 className='absolute m-2 bg-green-500 text-white rounded-full px-2 text-xs sm:text-sm'>New</h2>

        {/* Car image */}
        <img
          src={car?.image}
          alt={car?.name}
          width={300}
          height={250}
          className='w-full h-auto max-h-[200px] sm:max-h-[250px] object-cover rounded-t-xl'
        />

        {/* Car details */}
        <div className='p-3 sm:p-4'>
          <h2 className='font-bold text-sm sm:text-lg text-black mb-2'>{car?.name}</h2>
          <Separator />

          {/* Car specifications */}
          <div className='grid grid-cols-3 mt-4'>
            <div className='flex flex-col items-center'>
              <IoSpeedometerOutline className='text-sm sm:text-lg mb-2' />
              <h2 className='text-xs sm:text-sm'>{car.miles} Miles</h2>
            </div>
            <div className='flex flex-col items-center'>
              <LuFuel className='text-sm sm:text-lg mb-2' />
              <h2 className='text-xs sm:text-sm'>{car.fuelType}</h2>
            </div>
            <div className='flex flex-col items-center'>
              <TbManualGearbox className='text-sm sm:text-lg mb-2' />
              <h2 className='text-xs sm:text-sm'>{car.gearType}</h2>
            </div>
          </div>

          <Separator className='my-4' />

          {/* Price and View details */}
          <div className='flex items-center justify-between'>
            <h2 className='font-bold text-sm sm:text-xl'>${car.price}</h2>
            <h2 className='text-primary text-xs sm:text-sm flex gap-1 sm:gap-2 items-center cursor-pointer'>
              View Details <MdOpenInNew />
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarItem;
