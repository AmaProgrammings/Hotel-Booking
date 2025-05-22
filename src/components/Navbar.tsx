
import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, Bed } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Hotel className="h-6 w-6 text-hotel-600" />
          <span className="font-bold text-xl text-hotel-800">StayEase</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-hotel-600 font-medium">
            Home
          </Link>
          <Link to="/hotels" className="text-gray-600 hover:text-hotel-600 font-medium">
            Hotels
          </Link>
          <Button variant="outline" className="border-hotel-600 text-hotel-600 hover:bg-hotel-600 hover:text-white">
            Sign In
          </Button>
          <Button className="bg-hotel-600 hover:bg-hotel-700 text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
