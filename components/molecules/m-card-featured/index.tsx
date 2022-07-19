import Ribbon from '@atoms/a-ribbon';
import LocationFullIcon from '@lib/icons/home/location-full-icon ';
import Image from 'next/image';
import Nordic from '@assets/svg/nordic.svg';
import Link from 'next/link';

const FeaturedCard = () => {
  return (
    <Link href="/school/b">
      <div className="snap-center bg-white py-[31px] px-[20px] min-w-[260px] min-h-[401px] rounded-[6px] flex flex-col space-y-8 items-center">
        <div className="">
          <Image src={Nordic} />
        </div>
        <div className="flex flex-col space-y-3">
          <p className="cursor-pointer text-applyText">Claret International School</p>
          <div className="flex items-start space-x-3 max-w-[12rem]">
            <LocationFullIcon />
            <p className="text-[#818795] text-[14px]">Plot 700, Gitto Road Mabuchi, Abuja</p>
          </div>
          <div className="max-w-[12rem] h-[7rem] flex flex-wrap space-x-1">
            <Ribbon text="Pre-Nursery" />
            <Ribbon text="Nursery" />
            <Ribbon text="Primary" />
            <Ribbon text="Junior Secondary" />
            <Ribbon text="Senior Secondary" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
