
import React from 'react';
import SearchForm from './SearchForm';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section relative py-32 px-4">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Discover the best hotels and accommodations for your next travel adventure
          </p>
        </div>
        <SearchForm />
      </div>
    </div>
  );
};

export default HeroSection;
