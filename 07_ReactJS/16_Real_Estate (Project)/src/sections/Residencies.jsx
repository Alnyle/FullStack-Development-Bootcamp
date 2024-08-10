import React, { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { motion } from 'framer-motion';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { slideImage } from '../assets/index';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Register Swiper custom elements
register();

const Residencies = () => {

  // Incorrect DOM Manipulation: You are trying to add event listeners to elements before 
  // they are rendered. This should be done inside a useEffect hook.
  useEffect(() => {
    const swiperEl = document.querySelector('swiper-container');

    const prevButton = document.querySelector('.arrow-left');
    const nextButton = document.querySelector('.arrow-right');

    const handlePrevClick = () => {
      swiperEl.swiper.slidePrev();
    };

    const handleNextClick = () => {
      swiperEl.swiper.slideNext();
    };

    if (prevButton) {
      prevButton.addEventListener('click', handlePrevClick);
    }

    if (nextButton) {
      nextButton.addEventListener('click', handleNextClick);
    }

    
    return () => {
      if (prevButton) {
        prevButton.removeEventListener('click', handlePrevClick);
      }
      if (nextButton) {
        nextButton.removeEventListener('click', handleNextClick);
      }
    };
  }, []);

  return (
    <div className="sm:max-w-5xl max-w-sm mx-auto">
      <div className="flex flex-col py-10 px-4">
        <div className="w-full">
          <h2 className="text-xl font-bold text-amber-500">Best Choice</h2>

          <div className="flex flex-row items-center justify-between mt-2">
            <h1 className="text-3xl font-bold text-blue-900 mr-2">Popular Residencies</h1>

            <div className="flex flex-row gap-2">
              <button className="arrow-left p-2 bg-blue-50 rounded-sm text-blue-800">
                <MdOutlineKeyboardArrowLeft />
              </button>
              <button className="arrow-right p-2 rounded-sm text-blue-800 shadow-[1px_0px_3px_0px_#bee3f8]">
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>

          <div className="mt-6">
            <swiper-container
              space-between="20"
              watch-slides-visibility="true"
              auto-height="true"
              // pagination='{"clickable": true, "dynamicBullets": true}'
              breakpoints='{
                "640": {
                  "slidesPerView": 2,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 3,
                  "spaceBetween": 40
                },
                "1024": {
                  "slidesPerView": 4,
                  "spaceBetween": 50
                }
              }'
            >
              {slideImage.map((item, index) => (
                <swiper-slide key={index}>
                  <div className="mb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                      className="p-4 rounded-xl h-full w-full hover:bg-gradient-to-b hover:from-white hover:to-blue-50 hover:shadow-md"
                    >
                      <div className="w-full h-[150px]">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="size-full object-cover aspect-square rounded-md"
                        />
                      </div>

                      <div className="flex flex-col gap-2 mt-2">
                        <p className="font-bold text-gray-500">
                          <span className="text-amber-500">$</span>
                          {item.price}
                        </p>

                        <div className="flex flex-col gap-2 w-full">
                          <h2 className="text-xl font-bold text-blue-900">{item.name}</h2>
                          <p className="text-xs text-slate-400">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Residencies;
