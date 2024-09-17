import { Separator } from '@radix-ui/react-separator'
import { IoSpeedometerOutline } from "react-icons/io5";
import { TbManualGearbox } from "react-icons/tb";
import { MdOpenInNew } from "react-icons/md";
import React from 'react'
import { LuFuel } from "react-icons/lu";
import { Link } from 'react-router-dom';


function CarItem({car}) {

  return (
    <Link to={'/listing-details/'+car?.id}>
    <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer'>
        <h2 className='absolute m-2 bg-green-500 text-white rounded-full px-2 text-sm'>New</h2>
        <img src={car?.image} width={300} height={250}
        className='rounded-t-xl'
        />
        <div className='p-4'>
            <h2 className='font-bold text-black text-lg mb-2'>{car?.name}</h2>
        <Separator/>
       <div className='grid grid-cols-3 mt-5'>
        <div className='flex flex-col items-center'>
          <IoSpeedometerOutline className='text-lg mb-2'/>
            <h2>{car.miles} Miles</h2>
        </div>
        <div className='flex flex-col items-center'>
          <LuFuel className='text-lg mb-2'/>
            <h2>{car.fuelType}</h2>
        </div>
        <div className='flex flex-col items-center'>
        <TbManualGearbox className='text-lg mb-2'/> 
            <h2>{car.gearType}</h2>
        </div>
        </div>
        <Separator/>
        <div className='flex items-center justify-between'>
          <h2 className='font-bold text-xl'>${car.price}</h2>
          <h2 className='text-primary text-sm flex gap-2 items-center cursor-pointer'>
            View Details <MdOpenInNew/>
            
          </h2>
        </div>
    </div>
      
    </div>
    </Link>
  )
}

export default CarItem
