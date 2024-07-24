// import React from 'react';

// interface HairGalleryProps {}

// const HairGallery: React.FC<HairGalleryProps> = () => {
//   return (
//     <div className="bg-gray-100 p-4 rounded-md shadow-md">
//       <h2 className="text-xl font-bold mb-4">Hair Gallery</h2>
//       <div className="grid grid-cols-3 gap-4">
//         {/* Hair images go here */}
//         <div className="rounded-md overflow-hidden">
//           <img
//             src="https://via.placeholder.com/150x150"
//             alt="Hair 1"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="rounded-md overflow-hidden">
//           <img
//             src="https://via.placeholder.com/150x150"
//             alt="Hair 2"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="rounded-md overflow-hidden">
//           <img
//             src="https://via.placeholder.com/150x150"
//             alt="Hair 3"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//       <div className="flex justify-center mt-4">
//         <a
//           href="https://www.instagram.com/"
//           target="_blank"
//           className="text-blue-500 font-medium px-4 py-2 rounded-md shadow-md hover:bg-blue-100"
//         >
//           View more on Instagram
//         </a>
//       </div>
//     </div>
//   );
// };

// export default HairGallery;

// src/components/HairGallery.tsx

// import React from 'react';

// const images = [
//   'https://via.placeholder.com/150x150',
//   'https://via.placeholder.com/150x150',
//   'https://via.placeholder.com/150x150'
// ];

// const HairGallery: React.FC = () => {
//   return (
//     <div className="p-4 bg-white" >
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       <div className="rounded-lg overflow-hidden shadow-lg  break-inside-avoid">
//             <img src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687468/gallery4_mdijjy.jpg'} alt={`Hair style `} className="w-full h-full object-cover break-inside-avoid" />
//       </div>
//       <div className="text-center mb-8 h-fit py-10 bg-pink-50  break-inside-avoid">
//         <h1 className="text-3xl font-bold text-[#800020]">Hair Gallery</h1>
//         <p className="text-gray-600">View more on Instagram</p>
//         <a
//           href="https://www.instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block mt-4 px-6 py-2 bg-rose-600 text-white rounded-lg shadow-md hover:bg-rose-700"
//         >
//           <i className="fab fa-instagram mr-2"></i>
//           VIEW GALLERY
//         </a>
//       </div>
//       <div className="rounded-lg overflow-hidden shadow-lg  break-inside-avoid">
//             <img src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687471/gallery10_vkn5gp.jpg'} alt={`Hair style `} className="w-[100%] h-auto object-cover break-inside-avoid" />
//       </div>
//       <div className="rounded-lg overflow-hidden shadow-lg  break-inside-avoid">
//             <img src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687468/gallery4_mdijjy.jpg'} alt={`Hair style `} className="w-full h-full object-cover break-inside-avoid" />
//       </div>
//       <div className="rounded-lg overflow-hidden shadow-lg  break-inside-avoid">
//             <img src={'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687468/gallery4_mdijjy.jpg'} alt={`Hair style `} className="w-full h-full object-cover break-inside-avoid" />
//       </div>
//         {/* {images.map((src, index) => (
//           <div key={index} className="rounded-lg overflow-hidden shadow-lg">
//             <img src={src} alt={`Hair style ${index + 1}`} className="w-full h-full object-cover" />
//           </div>
//         ))} */}
//       </div>
//     </div>
//   );
// };

// export default HairGallery;


// src/components/HairGallery.tsx

import React from 'react';

const HairGallery: React.FC = () => {
  return (
    <div className="p-4 mt-10 bg-white"   id="STYLES">
              <div className="text-center mb-8 h-fit py-10 bg-pink-50 break-inside-avoid">
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
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687462/gallery1_uzix3r.jpg" alt="Hair style" className="w-full h-full object-cover gallery-item" />
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687469/gallery6_mjhi75.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687473/gallery12_ld0kgt.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687468/gallery18_bsosa3.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687463/gallery2_jinq8c.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687470/gallery7_xrqtqk.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687462/gallery13_qu2rxt.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
         <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687468/gallery19_bw5ugf.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687465/gallery3_apqih0.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687471/gallery8_wbye7j.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687469/gallery14_iyi4uj.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
         <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687470/gallery20_ard2wv.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687468/gallery4_mdijjy.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687471/gallery9_h4swjp.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687465/gallery15_xcko21.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
         <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687471/gallery21_sokltm.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687468/gallery5_z8pszx.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687471/gallery10_vkn5gp.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687463/gallery16_zxp89r.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
         <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687470/gallery22_dcumao.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid"  data-aos-delay="100" data-aos-duration="1000">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687473/gallery11_hifc4c.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div>
         {/* <div className="rounded-lg overflow-hidden shadow-lg break-inside-avoid">
          <img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687467/gallery17_ccujxh.jpg" alt="Hair style" className="w-full h-full object-cover" />
        </div> */}
      </div>
    </div>
  );
};

export default HairGallery;
