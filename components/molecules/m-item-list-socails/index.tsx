import WhatsAppIcon from '@lib/icons/home/whats-app-icon';
import InstagramIcon from '@lib/icons/home/instagram-icon';
import { FaTwitter } from 'react-icons/fa';
import FacebookIcon from '@lib/icons/home/facebook-icon';
import LinkedinIcon from '@lib/icons/home/linkedin-icon';

const SocailLists = () => {
  return (
    <div className="flex items-center space-x-4">
      <WhatsAppIcon />
      <InstagramIcon />
      <FaTwitter className="text-applyText" />
      <FacebookIcon />
      <LinkedinIcon />
    </div>
  );
};

export default SocailLists;
