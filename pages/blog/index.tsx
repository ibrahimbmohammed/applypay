import type { NextPage } from 'next';
import HomeWrapper from '@lib/hoc/home-wrapper';
import ReactPaginate from 'react-paginate';
import SchoolCard from '@molecules/m-card-school';
import SearchCompListing from '@molecules/m-search-comp-listing';
import FilterComp from '@molecules/m-filter-comp';
import { IoGridOutline } from 'react-icons/io5';
import { BsListCheck } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import schoolList from '@lib/constants/dummy-data/school-list';
import LeftPagCell from '@molecules/m-cell-left-pag';
import RightPagCell from '@molecules/m-cell-right-pag ';

const SingleSchool: NextPage = () => {
  const data = schoolList;
  const itemsPerPage = 5;

  const [currentItems, setCurrentItems] = useState<typeof data | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className=" lg:pl-[109px] xs-mini:space-x-0  lg:space-x-6 lg:pr-[72px] bg-background flex xs-mini:flex-col lg:flex-row  ">
      <aside className="lg:sticky  xs-mini:w-full lg:w-fit xs-mini:flex xs-mini:flex-col xs-mini:items-center xs-mini:justify-start lg:b inset-x-0 min-w-[273px] space-y-5 top-0 left-0 py-5 self-baseline overflow-y-auto max-h-screen scrollbar-hide">
        <SearchCompListing />
        <FilterComp />
        <FilterComp />
        <FilterComp />
        <FilterComp />
        <FilterComp />
      </aside>
      <main className="flex flex-col w-full items-center justify-start ">
        <div className="hidden w-[calc(100vw_-_35rem)]  lg:flex items-center justify-between pb-[20px]">
          <div className="">
            <p className="text-[18px] ">Showing: 487 filtered schools</p>
          </div>
          <div className="flex space-x-4">
            <div className="w-[52px] h-[51px] bg-applyBlue rounded-[5px] flex items-center justify-center">
              <IoGridOutline className="text-white text-[24px]" />
            </div>
            <div className="w-[52px] h-[51px] bg-white rounded-[5px] flex items-center justify-center">
              <BsListCheck className="text-applyBlue text-[24px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4   w-[280px] pb-4 lg:hidden">
          <div className="cursor-pointer flex space-x-2 items-center justify-center bg-white shadow-md rounded-[5px] w-[127px] h-[51px]">
            <FiFilter className="text-applyBlue text-[22px] " />
            <p className="text-applyBlue">Filter</p>
          </div>
          <p className="text-[14px]">Showing: 487 filtered schools</p>
        </div>
        <div className="grid xs-mini:grid-cols-1 lg:grid-cols-3 xs-mini:gap-x-0 xs-mini:gap-y-2 lg:gap-x-[18px] lg:gap-y-[19px] pb-[150px]">
          {currentItems?.map((data1) => (
            <SchoolCard data={data1} />
          ))}
        </div>
        <div className="hidden lg:block mt-8 mb-16">
          <ReactPaginate
            breakLabel="..."
            nextLabel={<RightPagCell />}
            nextClassName=""
            previousLabel={<LeftPagCell />}
            previousClassName=""
            containerClassName="flex justify-center align-center"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            pageClassName="px-2 flex align-center border border-gray-200 rounded-md mx-2 text-gray-400 "
            activeClassName="bg-applyBlue text-white border-0"
            // renderOnZeroPageCount={null}
          />
        </div>
      </main>
    </div>
  );
};

export default HomeWrapper(SingleSchool);
