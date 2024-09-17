import Header from '@/components/Header';
import Search from '@/components/Search';
import { db } from './../../../configs';
import { CarImages, CarListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Service from '@/Shared/Service';
import CarItem from '@/components/CarItem';

function SearchByCategory() {
  const { category } = useParams();
  const [carList, setCarList] = useState([]);

  // Fetch car list when component mounts or category changes
  useEffect(() => {
    if (category) {
      GetCarList();
    }
  }, [category]);

  // Fetch car listings based on category
  const GetCarList = async () => {
    try {
      console.log(`Fetching car list for category: ${category}`);

      const result = await db
        .select()
        .from(CarListing)
        .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(eq(CarListing.category, category));

      console.log('Raw result from db:', result);

      const formattedResult = Service.FormatResult(result);
      console.log('Formatted result:', formattedResult);

      setCarList(formattedResult);
    } catch (error) {
      console.error('Error fetching car list:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="p-16 bg-black flex justify-center">
        <Search />
      </div>
      <div className="p-10 md:px-20">
        <h2 className="font-bold text-4xl">{category}</h2>
        {/* List of Car Listings */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
          {carList?.length > 0 ? (
            carList.map((item, index) => (
              <div key={index}>
                <CarItem car={item} />
              </div>
            ))
          ) : (
            [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="h-[320px] rounded-xl bg-slate-200 animate-pulse"
              >
                
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    
  );
}

export default SearchByCategory;
