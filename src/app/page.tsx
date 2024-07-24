"use client"
import Image from "next/image";
  import heroImg from './components/img/image.png'
  import galleryImg from './components/img/image copy.png'
  import { Icon } from '@iconify/react';
  import HairGallery from "./components/gallery/Gallery";
  import HairstyleGallery from "./components/hairstyle/HairStyle";
  import TestimonialCard from "./components/testimonial/TestimonialCard";
  import Carousel from "./components/carousel/Carousel";
  import 'aos/dist/aos.css'; // Import AOS styles
  // import AOS from 'aos';
  import { useEffect } from 'react';
  import Modal from "./components/modal/Modal";
  import { useForm, ValidationError } from '@formspree/react';
  import Link from 'next/link'

  const items = [
    {
      imageSrc: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721739176/customer_img_cont_buerti.png',
      altText: 'TILANI BROWN PICTURE',
      message: 'Trisha was the best she got my hair looking so good I feel so good about myself today thanks Trisha I’m definitely coming back girl.. Keep it up😊😊😊',
      name: 'TILANI BROWN',
    },
    {
      imageSrc: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721739380/customer_img_cont_1_r3tfbt.png',
      altText: 'DEVIN JACK PICTURE',
      message: 'Patricia is the best at what she does. I recommend her services to everyone. She holds herself to a high standard, and her work reflects that.',
      name: '- DEVIN JACK',
    },
    {
      imageSrc: 'https://res.cloudinary.com/wise-solution-inc/image/upload/v1721739371/customer_img_cont_2_qvo2cu.png',
      altText: 'RANDIE B Picture',
      message: `Patricia was great. Thorough, thoughtful, tight, and clean work. I'll definitely be back again and would not be afraid to recommend my friends.`,
      name: '- RANDIE B',
    },
    // Add more items as needed
  ];



  function ContactForm() {
    const [state, handleSubmit] = useForm("xwpevqnb");
    if (state.succeeded) {
        return <p>Thanks for contacting, we will get back to you!</p>;
    }
    return (
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label htmlFor="email" className="text-sm font-medium">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="phone" className="text-sm font-medium">
        Phone
      </label>
      <input
        id="phone"
        type="tel"
        name="phone"
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full"
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      <label htmlFor="message" className="text-sm font-medium">
        Appointment Note
      </label>
      <textarea
        id="message"
        name="message"
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 h-24 w-full"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-[#800020] text-white rounded-md p-2 hover:bg-[#800020] focus:outline-none focus:ring focus:ring-[#800020] focus:ring-opacity-50 disabled:bg-[#800020] disabled:cursor-not-allowed w-full"
      >
        Submit
      </button>
    </form>
    
    );
  }



  export default function Home() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    // const [showModal, setShowModal] = useState(false);

    // const handleOpenModal = () => setShowModal(true);
    // const handleCloseModal = () => setShowModal(false);

    const [state, handleSubmit] = useForm("xwpevqnb");
    if (state.succeeded) {
        return <p>Thanks for contacting, we will get back to you!</p>;
    }

    // const handleModal = () =>{
    //   setShowModal(true)
    // }

    // useEffect(() => {
    // }, []);
    // AOS.init({
    //   duration: 1000, // duration of the animation
    //   easing: 'ease-in-out', // easing function
    //   once: true, // whether animation should happen only once - while scrolling down
    // });

    return (
      <>
      <div>
        <section className="hero" data-aos="fade-up">
          <div className="md:flex flex-row-reverse items-center">
            <div>
              <Image src={heroImg} className="w-full" alt="alt" width={813} height={994} />
            </div>
            <header data-aos="fade" className="px-4 md:mx-[2rem] md:w-[40%]">
              <h1 className="text-[#1A0006] text-[35px] md:text-[65px] font-[700] leading-[39.44px] md:leading-[69.44px]">
                <span className="text-[#C53D13]">ELEVATE</span> YOUR HAIR GAME
              </h1>
              <p data-aos="fade" className="text-[#323031] text-[18px] md:text-[24px] md:w-[80%] font-[400] font-sans my-2 md:my-6">
                Experience exquisite hair braiding from intricate twists to bold dreadlocks.</p>

              <section className="highlights">
                <h2 className="text-brand-shadow text-[25px] ">Unlock your signature appearance.</h2>
                <ul className="highlight-list text-brand-shadow Capitalize" data-aos="fade">
                  <li>Satisfaction guaranteed</li>
                  <li>Natural hair-friendly</li>
                  <li>Safe braiding techniques</li>
                  <li>Kid-friendly</li>
                  <li>Unisex services</li>
                </ul>
                <div className="pt-5">
                  <i>Walk in, relax, and let us pamper you!</i><br />

                </div>
              </section>

              <div className="button my-2 flex">
                <button className="px-8 py-3 text-[#FEFCFD] text-[14px] md:text-[20px] bg-[#800020] rounded-lg h-[50px] flex items-center gap-2" 
                // onClick={()=>setShowModal(true)}
                >
                  <Icon icon="ic:outline-date" className='text-[#FEFCFD] text-[18px]'></Icon>
                  BOOK APPOINTMENT
                </button>
              </div>
            </header>
          </div>
        </section>
        <section className="gallery bg-[#F3D8D0]" data-aos="fade">
          <div className="lg:max-w-[95%] m-auto p-4 md:p-6">
            <header className="md:flex flex-row-reverse items-center">
              <div>
                <Image src={galleryImg} className="md:h-[450px] md:w-[712px]" alt="alt" width={612} height={450} />
              </div>

              <div className="my-5">
                <h2 className="text-[#C53D13] font-[700] text-[35px]">Natural hair specialist</h2>

                <p className="font-sans text-[#323031] text-[15px] md:text-[17px] leading-[29px] font-[500] mt-[1rem] md:w-[60%]">
                  VID Hair Braiding isn&apos;t your average salon – it&apos;s an elegant experience located right here in Sandy Springs, Georgia. For over 18 years, we&apos;ve been weaving our magic in the natural hair world.
                </p>
                <p className="font-sans text-[#323031] text-[15px] md:text-[17px] leading-[29px] font-[500] mt-[1rem] md:w-[60%]">
                  Our braid boss, Patricia, isn&apos;t just a hair stylist – she&apos;s a passionate hair artist. Her mission? To create a show-stopping style that reflects YOU and makes you feel like a total boss babe (or dude!)
                </p>

                <p className="font-sans text-[#323031] text-[15px] md:text-[17px] leading-[29px] font-[500] mt-[1rem] md:w-[60%]">

                  Every visit at VID is a celebration of your unique beauty and rocking style. Let&apos;s braid some magic together
                </p>
                <Link href="tel:(404) 512-8264">
                <button className="px-8 my-3 text-[14px] md:text-[20px] bg-transparent border border-[#800020] text-[#800020] rounded-lg h-[50px] flex items-center gap-2">
                  <Icon icon="ic:outline-phone" className='text-[#800020] text-[18px]'></Icon>
                  BOOK NOW
                </button>
                </Link>
              </div>
            </header>
          </div>
        </section>
        <section className="services-grid " data-aos="fade">
          <div className="service-column">
            <h3 className="font-bold text-[20px]">Hairstyles</h3>
            <ul>
              <li>Faux locs braids</li>
              <li>Twist braids</li>
              <li>Dreadlocks</li>
              <li>Crochets and lots more.</li>
              <li></li>
            </ul>
          </div>
          <div className="service-column">
            <h3 className="font-bold text-[20px]">Services Offered</h3>
            <ul>
              <li>Hair extension services</li>
              <li>Hair styling services</li>
              <li>Dreadlock twists</li>
            </ul>
          </div>
        </section>
        <HairstyleGallery />

        {/* <TestimonialCard
          name="TILANI BROWN"
          message="Trisha was the best she got my hair looking so good I feel so good about myself today thanks Trisha I’m definitely coming back girl.. Keep it up😊😊😊"
          imageSrc="/path/to/image.jpg" // Replace with the actual path to the image
        /> */}
        <section className="bg-[#f9f1f3] w-screen h-[75vh]" data-aos="fade-up">
          <div className="flex justify-center items-center  ">
            <Carousel items={items} />
          </div>

        </section>
        <HairGallery />

          {/* {
            showModal ? <Modal isOpen={true} onClose={handleCloseModal}>
              <h2 className="text-[30px] pb-10 text-center">Book Appointment</h2>
            <ContactForm/>
          </Modal>:null
          } */}
        
      </div>



      <div>
              <section className="footer" id="CONTACT">
                  <div className='lg:max-[95%] p-4'>
                      <header className='text-center'>
                          <h2 className='text-[#c53d13] text-[20px] md:text-[36px] leading-[50.4px] font-[700]' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">LET US TRANSFORM YOUR HAIR</h2>
                      </header>

                      <div className="footer-info my-5">
                          <ul className='text-center text-[#270c04] grid gap-4'>
                              <li>
                                  <h6 className='md:text-[20px] font-[700] leading-[30px]' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">OPENING HOURS</h6>
                                  <p className='text-[#323031] text-[14px] md:text-[16px] leading-[32px] font-[500]' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Monday - Sunday: 9:00AM - 6:00PM</p>
                              </li>
                              <li>
                                  <h6 className='md:text-[20px] font-[700] leading-[30px]' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">SHOP LOCATION</h6>
                                  <p className='text-[#323031] text-[14px] md:text-[16px] leading-[32px] font-[500]' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">8849 Roswell Road, Sandy Springs, Georgia 30350, United States</p>
                              </li>
                              <li>
                                  <h6 className='md:text-[20px] font-[700] leading-[30px]' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">PHONE NUMBER</h6>
                                  <p className='text-[#323031] text-[14px] md:text-[16px] leading-[32px] font-[500]' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">(404) 512-8264</p>
                              </li>
                              <li>
                                  <h6 className='md:text-[20px] font-[700] leading-[30px]' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">EMAIL</h6>
                                  <p className='text-[#323031] text-[14px] md:text-[16px] leading-[32px] font-[500]' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">edoka.harris@gmail.com</p>
                              </li>
                          </ul>

                          <div className="button text-center my-7 flex justify-center ">
                              <button className="px-8 py-3 text-[#FEFCFD] bg-[#800020] rounded-lg h-[50px] flex items-center gap-2" 
                              // onClick={()=>setShowModal(true)}
                              
                              >
                              <Icon icon="ic:outline-whatsapp"  className='text-[#FEFCFD]'></Icon>
                                  BOOK APPOINTMENT
                              </button>
                          </div>
                      </div>
                  </div>
              </section>
               
              <section className='copyright bg-[#F3D8D0]'>
                  <div className='lg:max-w-[85%] p-6 m-auto'>
                      <p className='text-[16px] text-[#323031] font-[500] leading-[32px] text-center'>&copy; 2024 Vid Braids</p>
                  </div>
              </section>
          </div>
      </>
    );
  }
