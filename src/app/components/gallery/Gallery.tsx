
import Image from 'next/image';
import React from 'react';

import Image1 from "../img/gallery1.jpg"
import Image2 from '../img/gallery2.jpg';
import Image3 from '../img/gallery3.jpg';
import Image4 from '../img/gallery4.jpg';
import Image5 from '../img/gallery5.jpg';
import Image6 from '../img/gallery6.jpg';
import Image7 from '../img/gallery7.jpg';
import Image8 from '../img/gallery8.jpg';
import Image9 from '../img/gallery9.jpg';
import Image10 from '../img/gallery10.jpg';
import Image11 from '../img/gallery11.jpg';
import Image12 from '../img/gallery12.jpg';
import Image13 from '../img/gallery13.jpeg';
import Image14 from '../img/gallery14.jpeg';
import Image15 from '../img/gallery15.jpeg';
import Image16 from '../img/gallery16.jpeg';
import Image17 from '../img/gallery17.jpeg';
import Image18 from '../img/gallery18.jpeg';
import Image19 from '../img/gallery19.jpeg';
import Image20 from '../img/gallery20.jpeg';
import Image21 from '../img/gallery21.jpeg';
import Image22 from '../img/gallery22.jpeg';



const HairGallery: React.FC = () => {
  return (
    <div className="p-4 mt-10 bg-white"   id="STYLES">
              <div className="text-center mb-3 h-fit py-10 mt-20 md:mt-1 bg-pink-50 break-inside-avoid">
          <h1 className="text-3xl font-bold text-[#800020]">Hair Gallery</h1>
          <p className="text-gray-600 py-3">View more on Instagram</p>
          <a
            href="https://www.instagram.com/vid_braids_salon/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 border border-[#800020] text-[#800020] rounded-lg shadow-md"
          >
            <i className="fab fa-instagram mr-2"></i>
            VIEW GALLERY
          </a>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gallery">
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image1} width={100} height={100} alt="Hair style" className="w-full h-full object-cover gallery-item" />
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image2} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image3} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image4} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image5} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image6} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image7} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
         <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image8} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image9} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image10} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image11} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
         <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image12} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image13} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image14} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image15} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
         <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image16} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image17} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image18} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image19} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
         <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image20} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <Image src={Image21} width={100} height={100} alt="Hair style" className="w-full h-full object-cover" />
        </div>
         {/* <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid">
          <Image src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687467/gallery17_ccujxh.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div> */}
      </div>
    </div>
  );
};

export default HairGallery;
