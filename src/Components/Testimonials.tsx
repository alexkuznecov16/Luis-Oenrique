import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination} from 'swiper/modules';
import woman from '../assets/woman-1.png';
const Testimonials: React.FC = () => {
  return (
    <>
      <div id='testimonials' className="Testimonials">
        <div className="container">
          <h3 className="Testimonials-name section-name">TESTI<span>MO</span>NIALS</h3>
        <Swiper modules={[Navigation, Pagination, ]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <div className="Testimonials__block">
              <img src={woman} alt="woman" />
              <div className="Testimonials__block-info">
                <h5 className="name">LIMARA TUSI</h5>
                <span className="subtitle">CEO, RANDOM COMPANY</span>
                <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Testimonials__block">
              <img src={woman} alt="woman" />
              <div className="Testimonials__block-info">
                <h5 className="name">LIMARA TUSI</h5>
                <span className="subtitle">CEO, RANDOM COMPANY</span>
                <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Testimonials__block">
              <img src={woman} alt="woman" />
              <div className="Testimonials__block-info">
                <h5 className="name">LIMARA TUSI</h5>
                <span className="subtitle">CEO, RANDOM COMPANY</span>
                <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonials