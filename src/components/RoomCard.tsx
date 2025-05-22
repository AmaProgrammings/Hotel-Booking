
import React from 'react';
import { Room } from '@/data/hotels';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from 'lucide-react';

interface RoomCardProps {
  room: Room;
  onBookRoom: (roomId: string) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onBookRoom }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={room.images[0]} 
          alt={room.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
            Max {room.capacity} {room.capacity === 1 ? 'Guest' : 'Guests'}
          </Badge>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{room.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2 text-gray-700">Room Amenities</h4>
          <div className="grid grid-cols-2 gap-2">
            {room.amenities.slice(0, 6).map((amenity, index) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 mr-1 text-green-500" />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div>
            <span className="font-semibold text-lg text-hotel-600">${room.price}</span>
            <span className="text-gray-500 text-sm"> / night</span>
          </div>
          <Button 
            onClick={() => onBookRoom(room.id)}
            className="bg-hotel-600 hover:bg-hotel-700 text-white"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
