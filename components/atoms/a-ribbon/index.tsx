interface RibbonProps {
  text: string;
}
const Ribbon = ({ text }: RibbonProps) => {
  return (
    <div className="mr-2 mt-1 max-h-[24px]  py-[5px] px-[8px] w-fit bg-[#538FB7]/20 rounded-[12px]  text-[#1D338E] text-xs">
      {text}
    </div>
  );
};

export default Ribbon;
