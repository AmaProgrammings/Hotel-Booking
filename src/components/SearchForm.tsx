
import React, { useState } from 'react';
import { Search, Calendar, Bed } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const SearchForm: React.FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/hotels?location=${location}&guests=${guests}&checkIn=${checkInDate ? format(checkInDate, 'yyyy-MM-dd') : ''}&checkOut=${checkOutDate ? format(checkOutDate, 'yyyy-MM-dd') : ''}`);
  };

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search className="h-5 w-5" />
          </div>
          <Input
            type="text"
            placeholder="Where are you going?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10"
          />
        </div>

        <div>
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
                {checkInDate ? format(checkInDate, "PPP") : <span>Check-in Date</span>}
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

        <div>
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
                {checkOutDate ? format(checkOutDate, "PPP") : <span>Check-out Date</span>}
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

        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Bed className="h-5 w-5" />
          </div>
          <Input
            type="number"
            min="1"
            placeholder="Guests"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            className="pl-10"
          />
        </div>

        <div className="md:col-span-4">
          <Button 
            type="submit" 
            className="w-full bg-hotel-600 hover:bg-hotel-700 text-white"
            size="lg"
          >
            Search Hotels
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
