import React from 'react'
import { Icon } from '@iconify/react';

function Footer() {
    return (
        <div id="CONTACT">
            <section className="footer">
                <div className='lg:max-[95%] p-4'>
                    <header className='text-center'>
                        <h2 className='text-[#c53d13] text-[20px] md:text-[36px] leading-[50.4px] font-[700]'  data-aos-delay="100" data-aos-duration="1000">LET US TRANSFORM YOUR HAIR</h2>
                    </header>

                    <div className="footer-info my-5">
                        <ul className='text-center text-[#270c04] grid gap-4'>
                            <li>
                                <h6 className='md:text-[20px] font-[700] leading-[30px]'  data-aos-delay="100" data-aos-duration="1000">OPENING HOURS</h6>
                                <p className='text-[#323031] text-[14px] md:text-[16px] leading-[32px] font-[500]'  data-aos-delay="100" data-aos-duration="1000">Monday - Sunday: 9:00AM - 6:00PM</p>
                            </li>
                            <li>
                                <h6 className='md:text-[20px] font-[700] leading-[30px]'  data-aos-delay="100" data-aos-duration="1000">SHOP LOCATION</h6>
                                <p className='text-[#323031] text-[14px] md:text-[16px] leading-[32px] font-[500]'  data-aos-delay="100" data-aos-duration="1000">8849 Roswell Road, Sandy Springs, Georgia 30350, United States</p>
                            </li>
                            <li>
                                <h6 className='md:text-[20px] font-[700] leading-[30px]'  data-aos-delay="100" data-aos-duration="1000">PHONE NUMBER</h6>
                                <p className='text-[#323031] text-[14px] md:text-[16px] leading-[32px] font-[500]'  data-aos-delay="100" data-aos-duration="1000">(404) 512-8264</p>
                            </li>
                            <li>
                                <h6 className='md:text-[20px] font-[700] leading-[30px]'  data-aos-delay="100" data-aos-duration="1000">EMAIL</h6>
                                <p className='text-[#323031] text-[14px] md:text-[16px] leading-[32px] font-[500]'  data-aos-delay="100" data-aos-duration="1000">edoka.harris@gmail.com</p>
                            </li>
                        </ul>

                        <div className="button text-center my-7 flex justify-center ">
                            <button className="px-8 py-3 text-[#FEFCFD] bg-[#800020] rounded-lg h-[50px] flex items-center gap-2">
                            <Icon icon="ic:outline-whatsapp"  className='text-[#FEFCFD]'></Icon>
                                BOOK AN APPOINTMENT
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
    )
}

export default Footer