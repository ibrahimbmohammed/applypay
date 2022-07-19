import Ribbon from '@atoms/a-ribbon';
import LocationFullIcon from '@lib/icons/home/location-full-icon ';
import { GoPrimitiveDot } from 'react-icons/go';
import Image from 'next/image';
import Link from 'next/link';

interface SchoolCardProps {
  data: {
    image: any;
    name: string;
    address: string;
    tags: {
      name: string;
    }[];
    type: {
      typeName: string;
    }[];
  };
}

const SchoolCard = ({ data }: SchoolCardProps) => {
  return (
    <Link href="/school/b">
      <div className="snap-center bg-white xs-mini:w-[280px] xs-mini:h-[412px] xs:w-[340px] xs:h-[442px] lg:w-[280px] lg:h-[412px] rounded-[6px] overflow-hidden flex flex-col space-y-1 items-center">
        <div className=" xs:w-[340px] lg:w-[280px]  max-h-[244px]">
          <Image src={data.image} height="244" width="340" />
        </div>
        <div className=" py-[5px] px-[14px] w-full  flex flex-col items-start justify-center space-y-1">
          <p className="text-applyText text-[16px]">{data.name}</p>
          <div className="flex items-start space-x-3 max-w-[12rem]">
            <LocationFullIcon />
            <p className="text-[#818795] text-[12px]">{data.address}</p>
          </div>
          <div className="max-w-full max-h-[4rem] overflow-hidden flex flex-wrap ">
            {data.tags.map((tag) => (
              <Ribbon text={tag.name} />
            ))}
          </div>
          <div className="max-w-full max-h-[4rem] pt-3 overflow-hidden  flex flex-wrap ">
            {data.type.map((type, index) => {
              if (index === data.type.length - 1) {
                return (
                  <div className="flex space-x-[8px] items-center">
                    <p className="text-[13px] text-[rgb(129,135,149)]">{type.typeName}</p>
                  </div>
                );
              }
              return (
                <div className="flex space-x-[4px] items-center">
                  <p className="text-[13px] text-[rgb(129,135,149)]">{type.typeName}</p>
                  <GoPrimitiveDot className="text-[#818795]  text-[14px]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SchoolCard;
