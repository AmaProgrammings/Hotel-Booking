
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Hotel } from '@/data/hotels';
import { Badge } from "@/components/ui/badge";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <Link to={`/hotels/${hotel.id}`}>
      <div className="hotel-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={hotel.images[0]} 
            alt={hotel.name} 
            className="w-full h-full object-cover"
          />
          {hotel.featured && (
            <Badge className="absolute top-2 left-2 bg-hotel-600 hover:bg-hotel-700">
              Featured
            </Badge>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{hotel.name}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-sm text-gray-700">{hotel.rating}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-2">{hotel.location}</p>
          <p className="text-sm text-gray-700 mb-4 line-clamp-2">{hotel.description}</p>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-lg font-semibold text-hotel-600">${hotel.price}</span>
              <span className="text-sm text-gray-500"> / night</span>
            </div>
            <span className="text-sm text-gray-600 hover:text-hotel-600">View Details</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
