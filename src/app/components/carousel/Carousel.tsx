// use client
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface CarouselItem {
  imageSrc: string;
  altText: string;
  message: string;
  name: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }; 

  const nextSlide = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative md:w-[50vw] md:h-[50vh] w-[100vw] h-auto" >
          <div className="uppercase tracking-wide md:text-[50px] md:text-[30px] text-[20px]  pb-10 text-[#800020] font-semibold text-center py-10">Vidders Say</div>
      <div className="overflow-hidden rounded-xl shadow-md">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute transition-opacity md:flex duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="md:p-8 p-3 bg-[#f2d8d0] flex flex-col justify-center align-center w-screen md:w-fit" >
              <p className="mt-2 text-gray-500 text-center ">&quot;{item.message}&quot;</p>
              <div className="mt-4 text-sm font-semibold text-center text-gray-900">{item.name}</div>
            </div>
            <img className="md:w-[50vw] md:h-[50vh] h-[50vh] w-full  object-cover" src={item.imageSrc} alt={item.altText} />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-[85%] md:-left-14 left-5 transform -translate-y-1/2 p-2 rounded-full shadow-md focus:outline-none"
      >
        <FaArrowLeft color='#800020'/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute bg-transparent top-[85%] md:-right-14 right-5 transform -translate-y-1/3 p-2 rounded-full shadow-md focus:outline-none"
      >
        <FaArrowRight color='#800020' />
      </button>
    </div>
  );
};

export default Carousel;
