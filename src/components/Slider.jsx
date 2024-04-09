import  { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import {  Parallax,Autoplay, Pagination, Navigation } from 'swiper/modules';


   

const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (

        <>
        <Swiper
        style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
        
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax,Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper carousel w-full lg:h-[400px] h-[200px] border-2 border-red-600 rounded-3xl shadow-2xl"
      >
        <div
          slot="container-start"
          className="parallax-bg"
         
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide >
        <div className='bg-[url(https://i.ibb.co/CVt688d/hospital.jpg)] w-full h-full bg-no-repeat bg-cover '>
        <div className='lg:py-44 py-10'>
        <div className="title text-black font-bold text-center lg:text-6xl text-4xl" data-swiper-parallax="-300">
            Hospitals
          </div>
          
          <div className="text-black font-semibold lg:text-xl  text-center" data-swiper-parallax="-100">
            <p>
              Hospitals with great service
            </p>
          </div>
        </div>
        </div>
        
    
    
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[url(https://i.ibb.co/FhQGQwc/school.jpg)] w-full h-full bg-no-repeat bg-cover '>
        <div className='lg:py-44 py-10'>
        <div className="title text-black font-bold text-center lg:text-6xl text-4xl" data-swiper-parallax="-300">
            Schools
          </div>
          
          <div className="text-black font-semibold lg:text-xl  text-center" data-swiper-parallax="-100">
            <p>
              Ensure good educational environment.
            </p>
          </div>
        </div>
        </div>
        
    
   

        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[url(https://i.ibb.co/Mc07jgb/art-gallary.jpg)] w-full h-full bg-no-repeat bg-cover '>
        <div className='lg:py-44 py-10'>
        <div className="title text-black font-bold text-center lg:text-6xl text-4xl" data-swiper-parallax="-300">
            Art Galleries
          </div>
          
          <div className="text-black font-semibold lg:text-xl  text-center" data-swiper-parallax="-100">
            <p>
             Best art galleries, fascinating areas and art collections.
            </p>
          </div>
        </div>
        </div>
        
    
    


        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[url(https://i.ibb.co/DrGyKqK/convention.jpg)] w-full h-full bg-no-repeat bg-cover'>
        <div className='lg:py-44 py-10'>
        <div className="title text-white font-bold text-center lg:text-6xl text-4xl" data-swiper-parallax="-300">
            Convention Centers
          </div>
          
          <div className="text-white font-semibold lg:text-xl  text-center" data-swiper-parallax="-100">
            <p>
               Convention centers with providing world class service. 
            </p>
          </div>
        </div>
        </div>
        
    
    


        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>





      </Swiper>
        
        
        </>

    );
};

export default Slider;