import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import DetailHeader from './components/DetailHeader'
import { useParams } from 'react-router-dom'
import { db } from './../../../configs';
import { CarImages, CarListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import MostSearchCar from '@/components/MostSearchCar';
import Footer from '@/components/Footer';

function ListingDetail() {
  const { id } = useParams();
  const [carDetail, setCarDetail]=useState();
  // console.log(id);

  useEffect(() => {
    GetCarDetail();
  }, [id]);

  const GetCarDetail = async () => {
    try {
      const result = await db.select()
        .from(CarListing)
        .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(eq(CarListing.id, id));

      const resp = Service.FormatResult(result);
      setCarDetail(resp[0]);



    } catch (error) {
      // console.error('Error fetching car details:', error);

    }
  };

  return (
    <div>
      <Header />
      <div className='p-10 md:px-20'>
        <DetailHeader carDetail={carDetail}/>
      </div>
      <div>
        <MostSearchCar/>
      </div>
      <Footer/>
    </div>
  );
}

export default ListingDetail;
