import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import GirlHolo from '@assets/svg/girlholo.svg';
import ManHappy from '@assets/svg/manhapp.svg';
import Image from 'next/image';

const SwiperSingle = () => {
  return (
    <div className=" lg:w-[750px] ml-[48px] lg:h-[450px]    absolute -left-12 -top-8 ">
      <Swiper
        cssMode
        slidesPerView="auto"
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={GirlHolo} height="480px" width="740px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ManHappy} height="480px" width="740px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={GirlHolo} height="480px" width="740px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ManHappy} height="480px" width="740px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={GirlHolo} height="480px" width="740px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ManHappy} height="480px" width="740px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={GirlHolo} height="480px" width="740px" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ManHappy} height="480px" width="740px" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSingle;
