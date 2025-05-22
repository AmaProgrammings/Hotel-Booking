
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RoomCard from '@/components/RoomCard';
import { hotels, Room } from '@/data/hotels';
import { Star, Calendar, ArrowRight, Check, MapPin, Phone, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from '@/components/ui/use-toast';
import { format } from 'date-fns';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const HotelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotels.find(h => h.id === id);
  
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
  
  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Hotel Not Found</h1>
            <p className="text-gray-600 mb-6">The hotel you are looking for does not exist.</p>
            <Button onClick={() => navigate('/hotels')}>
              Browse All Hotels
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleBookRoom = (roomId: string) => {
    const selectedRoom = hotel.rooms.find(r => r.id === roomId) as Room;
    
    if (!checkInDate || !checkOutDate) {
      toast({
        title: "Select dates first",
        description: "Please select check-in and check-out dates to book this room.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Booking Successful!",
      description: `You've booked the ${selectedRoom.name} at ${hotel.name} from ${format(checkInDate, 'PPP')} to ${format(checkOutDate, 'PPP')}!`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hotel Image Gallery */}
        <div className="container mx-auto px-4 py-6">
          <Carousel className="w-full">
            <CarouselContent>
              {hotel.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="h-96 w-full rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${hotel.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Hotel Details */}
            <div className="lg:w-2/3">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
                      <span className="font-medium">{hotel.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-gray-600">{hotel.location}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-semibold text-hotel-600">${hotel.price}</span>
                  <span className="text-gray-500"> / night</span>
                </div>
              </div>

              <Tabs defaultValue="overview" className="mt-6">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="py-4">
                  <p className="text-gray-700 mb-6">{hotel.description}</p>
                  <p className="text-gray-700">
                    This stunning hotel offers a perfect blend of comfort and luxury. With its prime location, 
                    you'll have easy access to local attractions while enjoying top-notch service and amenities. 
                    Whether you're traveling for business or pleasure, our accommodations are designed to make 
                    your stay memorable and relaxing.
                  </p>
                </TabsContent>
                <TabsContent value="amenities" className="py-4">
                  <h3 className="text-lg font-medium mb-4">Hotel Amenities</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3">
                    {hotel.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="contact" className="py-4">
                  <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-hotel-600 mr-3" />
                      <span>{hotel.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-hotel-600 mr-3" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-hotel-600 mr-3" />
                      <a href="#" className="text-hotel-600 hover:underline">
                        Visit Hotel Website
                      </a>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking Widget */}
            <div className="lg:w-1/3">
              <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Book Your Stay</h2>
                
                <div className="space-y-4 mb-6">
                  {/* Check-in date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkInDate && "text-muted-foreground"
                          )}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {checkInDate ? format(checkInDate, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={checkInDate}
                          onSelect={setCheckInDate}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  {/* Check-out date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOutDate && "text-muted-foreground"
                          )}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {checkOutDate ? format(checkOutDate, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={checkOutDate}
                          onSelect={setCheckOutDate}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                          disabled={(date) => date <= checkInDate || date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                
                {/* Stay details */}
                {checkInDate && checkOutDate && (
                  <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <h3 className="font-medium mb-2">Stay Details</h3>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Check-in</span>
                      <span>{format(checkInDate, "EEE, MMM d, yyyy")}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Check-out</span>
                      <span>{format(checkOutDate, "EEE, MMM d, yyyy")}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                      <span>Duration</span>
                      <span>
                        {Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))} nights
                      </span>
                    </div>
                  </div>
                )}
                
                {/* CTA */}
                <Button 
                  className="w-full bg-hotel-600 hover:bg-hotel-700 text-white"
                  disabled={!checkInDate || !checkOutDate}
                  onClick={() => {
                    if (hotel.rooms.length > 0) {
                      const element = document.getElementById("rooms-section");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  View Available Rooms
                </Button>
              </div>
            </div>
          </div>
          
          {/* Room listings */}
          <div id="rooms-section" className="mt-12 pt-6">
            <h2 className="text-2xl font-bold mb-6">Available Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotel.rooms.map((room) => (
                <RoomCard key={room.id} room={room} onBookRoom={handleBookRoom} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HotelDetail;
