interface SectionHeaderCompProps {
  text: string;
  className: string;
  classNameText: string;
  classNameBg: string;
}

const SectionHeaderComp = ({
  text,
  className,
  classNameText,
  classNameBg,
}: SectionHeaderCompProps) => {
  return (
    <div className={`relative h-[6rem]  ${className}`}>
      <h2 className={`absolute  font-[500]  z-50 ${classNameText}`}>{text}</h2>

      <div
        className={`absolute right-0 bg-applyYellow rounded-[4px] z-10${classNameBg}`}
        style={{ opacity: '0.5' }}
      />
    </div>
  );
};

export default SectionHeaderComp;
