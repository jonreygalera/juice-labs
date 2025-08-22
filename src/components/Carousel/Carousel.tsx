import React, { useEffect, useState } from 'react'
import type ICarouselProps from './ICarouselProps';

const Carousel: React.FC<ICarouselProps> = (props) => {

  const { slides = [] } = props;

  // const slides = [
  //   'https://placehold.co/1200x600/10B981/FFFFFF?text=Slide+1',
  //   'https://placehold.co/1200x600/3B82F6/FFFFFF?text=Slide+2',
  //   'https://placehold.co/1200x600/F97316/FFFFFF?text=Slide+3',
  //   'https://placehold.co/1200x600/8B5CF6/FFFFFF?text=Slide+4',
  // ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const totalSlides = slides.length;
  
  const goToPrevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  // Function to navigate to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-inter">
      <div
        className="relative w-full max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* The main container for the slides */}
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides?.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                src={slide?.productImage}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls below the carousel */}
      <div className="flex items-center justify-center mt-4 space-x-4">
        {/* Previous Button */}
        <button
          onClick={goToPrevSlide}
          className="p-3 bg-white/70 hover:bg-white/90 transition-all duration-300 rounded-full shadow-lg focus:outline-none"
          aria-label="Previous Slide"
        >
          left
        </button>

        {/* Navigation dots */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-150' : 'bg-white/50'
              } ring-2 ring-gray-800`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNextSlide}
          className="p-3 bg-white/70 hover:bg-white/90 transition-all duration-300 rounded-full shadow-lg focus:outline-none"
          aria-label="Next Slide"
        >
          Right
        </button>
      </div>
    </div>
  )
}

export default Carousel