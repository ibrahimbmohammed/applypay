/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */

import SpinnerIcon from '@atoms/a-Spinner';

interface ButtonProps {
  btnType?: 'primary' | 'secondary';
  label?: string | React.ReactNode;
  type: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({
  btnType = 'primary',
  label,
  type = 'button',
  disabled = false,
  className = 'h-[3rem] w-[11rem]',
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={` ${
        btnType === 'primary' ? 'bg-primaryColor text-secondaryText' : '' // i made this change and it was intentional
      }  rounded-lg px-4 py-2  ${className}`}
      type={type}
      disabled={disabled}
      onClick={(e) => handleClick && handleClick(e)}
    >
      {disabled ? <SpinnerIcon /> : label}
    </button>
  );
};

export default Button;
