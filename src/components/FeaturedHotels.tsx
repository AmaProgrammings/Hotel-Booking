
import React from 'react';
import { hotels } from '@/data/hotels';
import HotelCard from './HotelCard';

const FeaturedHotels: React.FC = () => {
  // Get only featured hotels
  const featuredHotels = hotels.filter(hotel => hotel.featured);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
