import React from 'react';

interface ImageData {
  src: string;
  alt: string;
  label: string;
  p: string;
}

const images: ImageData[] = [
  {
    src: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687475/grid_cornrows_tiufze.jpg', alt: 'Corn Rows', label: 'CORN ROWS', p: `Cornrows are a timeless hairstyle, never goes out of style. We offer simple and elaborate designs. 

At VidBraids, we'll create the perfect cornrows for you. 

Book your cornrows appointment today and rock a timeless look!
` },
  {
    src: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687478/Rectangle_22_ttg2cx.png', alt: 'Twists', label: 'TWISTS', p: `Our twist hair braids are the secret to stunning, protective hair styles that work for everyone. ‍♀️‍♂️  

Gorgeous twists that are easy to customize, switch things up whenever the mood strikes.   

Let's get twisting!

Contact us for your twist braids now!
` },
  {
    src: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687474/Group_15_2_x0hndx.png', alt: 'Faux Locs', label: 'FAUX LOCS', p: `We specialize in creating natural-looking faux locs hair braids that are perfect for any occasion. 

Want a bohemian style or a sleek, professional look, VidBraids got you!

Make an appointment today. 
` },
  {
    src: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687472/grid_boxbraids_copy_dzqsip.jpg', alt: 'Box Braids', label: 'BOX BRAIDS',
    p: `Get beautiful, long-lasting box braids that turn heads. 

Small, medium, or large braids in Georgia, we'll give you the perfect hair style that suits your personality and lifestyle. 

Schedule your box braid session today! 
` },
  { src: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687460/bohochic_sn07ga.jpg', alt: 'BOHO CHIC BRAIDS', label: 'BOHO CHIC BRAIDS', p: `we will help to improve your natural beauty with our neat and stylish boho-chic braids. we create boho braids that are not only beautiful but also protective of your natural hair. boho-chic braids are a flexible option for anyone looking to change up their style.` },
  {
    src: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687477/KNOTLESS-braid_kzawwk.jpg', alt: 'KNOTLESS BRAID', label: 'KNOTLESS BRAID', p: `Searching for the latest chic and comfortable hair trend? Try our knotless braids! 

We offer knotless braids that are gentle on your scalp and provide a sleek, natural look. 

Schedule your session now and stay ahead of the trend.
` },
  { src: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687460/DREADLOCKS_copy_mzauei.jpg', alt: 'DREADLOCKS', label: 'DREADLOCKS', p: `Show off your natural beauty with our neat and elegant dreadlocks. VidBraids makes gorgeous dreadlocks in Sandy Springs. 

Take advantage of our expertise and enjoy a brand-new look.

Book appointment 
` },
  {
    src: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721687460/CROCHET_aytldi.jpg', alt: 'CROCHET BRAIDS', label: 'CROCHET BRAIDS', p: `Get luxury crochet braids in no time! We specialize in crochet braids that take the least amount of time while still looking gorgeous. 

Ideal for busy individuals who want a stylish look without the long wait. 

Book your crochet braid appointment today!
` },
];

const HairstyleGallery: React.FC = () => {
  return (
    <div className="bg-white" data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-4">

        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden shadow-lg flex flex-col" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <img src={image.src} alt={image.alt} className="md:w-[33vw] md:h-[50vh] object-cover" />
            <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
              <span className="text-white text-2xl font-bold blurred-bg">{image.label}</span>
            </div>
            <div>
              <p className="mt-2 text-left py-1 px-2 lowercase text-[12px] text-gray-700" style={{textTransform: "lowercase"}}>{image.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HairstyleGallery;
