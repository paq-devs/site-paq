import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'; // Certifique-se de que você está usando o componente Image do Next.js
import jeff from '../img/jeff.png';

function CardsTime2() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div className="w-full px-4 py-8">
        <Slider {...settings}>
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center justify-center px-2">
              <div className="bg-fundocinza rounded-[27px] w-56 p-4">
                <Image
                  src={jeff}
                  alt=''
                  width={292}
                  height={292}
                  className="rounded-[27px]"
                />
                <h2 className="mt-4 text-center">JEFF LIMA</h2>
                <h3 className="mb-3 text-center">LÍDER DE CAPTAÇÃO</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  
  export default CardsTime2;