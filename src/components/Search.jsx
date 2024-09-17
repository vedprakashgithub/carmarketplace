import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Data from '@/Shared/Data';
import { Link } from 'react-router-dom';

function Search() {
  // Declare state variables inside the component
  const [cars, setCars] = useState();
  const [make, setMakes] = useState();
  const [price, setPrice] = useState();

  // Debug state changes
  console.log('Selected Car:', cars);
  console.log('Selected Make:', make);
  console.log('Selected Price:', price);

  return (
    <div className='p-1 md:p-4 bg-white rounded-md md:rounded-full flex-col md:flex-row md:flex gap-10 px-3 items-center w-full md:w-max'>
      
      {/* Select for Car Type */}
      <Select onValueChange={(value) => setCars(value)}>
        <SelectTrigger className="outline-none md:border-none w-[180px] text-lg shadow-none">
          <SelectValue placeholder="Car" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="New">New</SelectItem>
          <SelectItem value="Used">Used</SelectItem>
          <SelectItem value="Certified Pre-owned">Certified Pre-owned</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" />

      {/* Select for Car Makes */}
      <Select onValueChange={(value) => setMakes(value)}>
        <SelectTrigger className="outline-none md:border-none w-[180px] text-lg shadow-none">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((maker, index) => (
            <SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" />

      {/* Select for Price */}
      <Select onValueChange={(value) => setPrice(value)}>
        <SelectTrigger className="outline-none md:border-none w-[180px] text-lg shadow-none">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
          {Data.Pricing.map((priceItem, index) => (
            <SelectItem key={index} value={priceItem.amount}>{priceItem.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Button with Dynamic Link */}
      <Link to={`/search?cars=${cars}&make=${make}&price=${price}`}>
        <CiSearch className='text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer' />
      </Link>

    </div>
  );
}

export default Search;
