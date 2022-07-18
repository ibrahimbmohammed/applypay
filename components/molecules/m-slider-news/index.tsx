import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import NewsCard from '@molecules/m-card-news';

const SwiperNews = () => {
  return (
    <div className="lg:hidden relative max-w-[340px] ml-[48px] h-[550px]  ">
      <Swiper
        cssMode
        slidesPerView="auto"
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper-2"
      >
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperNews;
