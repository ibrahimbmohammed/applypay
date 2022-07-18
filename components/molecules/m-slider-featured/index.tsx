import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import FeaturedCard from '@molecules/m-card-featured';
import 'swiper/css/pagination';
import 'swiper/css';

const SwiperFeatured = () => {
  return (
    <div className="xl:hidden max-w-[340px] ml-[48px] h-[550px]  ">
      <Swiper
        cssMode
        slidesPerView="auto"
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperFeatured;
