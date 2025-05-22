
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HotelCard from '@/components/HotelCard';
import { hotels, Hotel } from '@/data/hotels';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Star } from 'lucide-react';

const HotelList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const locationQuery = queryParams.get('location') || '';
  
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels);
  const [searchLocation, setSearchLocation] = useState(locationQuery);
  const [priceRange, setPriceRange] = useState([0, 600]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  
  useEffect(() => {
    filterHotels();
  }, [searchLocation, priceRange, selectedRating]);
  
  const filterHotels = () => {
    let filtered = [...hotels];
    
    // Filter by location
    if (searchLocation) {
      filtered = filtered.filter(hotel => 
        hotel.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(hotel => 
      hotel.price >= priceRange[0] && hotel.price <= priceRange[1]
    );
    
    // Filter by rating
    if (selectedRating !== null) {
      filtered = filtered.filter(hotel => 
        Math.floor(hotel.rating) === selectedRating
      );
    }
    
    setFilteredHotels(filtered);
  };
  
  const handleRatingClick = (rating: number) => {
    if (selectedRating === rating) {
      setSelectedRating(null);
    } else {
      setSelectedRating(rating);
    }
  };
  
  const clearFilters = () => {
    setSearchLocation('');
    setPriceRange([0, 600]);
    setSelectedRating(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Sidebar filters */}
          <div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-6">Filters</h2>
            
            {/* Location filter */}
            <div className="mb-6">
              <Label htmlFor="location" className="block mb-2 text-sm font-medium">Location</Label>
              <Input
                id="location"
                type="text"
                placeholder="Search by location"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full"
              />
            </div>
            
            {/* Price range filter */}
            <div className="mb-6">
              <Label className="block mb-2 text-sm font-medium">Price Range</Label>
              <Slider 
                defaultValue={[0, 600]} 
                min={0} 
                max={600} 
                step={10}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as number[])}
                className="mt-2"
              />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            
            {/* Rating filter */}
            <div className="mb-6">
              <Label className="block mb-2 text-sm font-medium">Rating</Label>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleRatingClick(rating)}
                    className={`flex items-center w-full rounded-md px-2 py-1.5 text-sm ${
                      selectedRating === rating
                        ? "bg-hotel-100 text-hotel-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex">
                      {Array.from({ length: rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                      {Array.from({ length: 5 - rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gray-300" />
                      ))}
                    </div>
                    <span className="ml-2">{rating === 1 ? '& up' : ''}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Clear filters button */}
            <Button
              variant="outline"
              className="w-full"
              onClick={clearFilters}
            >
              Clear All Filters
            </Button>
          </div>
          
          {/* Hotel listings */}
          <div className="lg:w-3/4">
            <h1 className="text-2xl font-bold mb-6">
              {filteredHotels.length} {filteredHotels.length === 1 ? 'Hotel' : 'Hotels'} Found
              {searchLocation && ` in "${searchLocation}"`}
            </h1>
            
            {filteredHotels.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center shadow-md">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No hotels found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters or search criteria</p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredHotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HotelList;
