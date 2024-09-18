import Data from '@/Shared/Data';
import React from 'react';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <div>
      <div className="mt-20 md:mt-40">
        <h2 className="font-bold text-2xl md:text-3xl text-center mb-4 md:mb-6">
          Browse By Type
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4 md:gap-6 px-6 sm:px-10 md:px-16 lg:px-20">
        {Data.Category.map((category, index) => (
          <Link to={'/search/' + category.name} key={index}>
            <div className="border rounded-lg p-2 md:p-3 flex flex-col items-center hover:shadow-md transition-shadow">
              <img src={category.icon} width={30} height={30} alt={category.name} />
              <h2 className="mt-2 text-sm md:text-base">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
