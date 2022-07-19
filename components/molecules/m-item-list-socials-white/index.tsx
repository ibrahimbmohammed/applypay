import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const SocailListsWhite = () => {
  return (
    <div className="flex items-center space-x-4 pb-4">
      <BsWhatsapp className="text-white" />
      <BsInstagram className="text-white" />
      <FaTwitter className="text-white" />
      <FaFacebookF className="text-white" />
      <FaLinkedinIn className="text-white" />
    </div>
  );
};

export default SocailListsWhite;
