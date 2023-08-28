import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { IconType } from 'react-icons';
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMdMail,
} from 'react-icons/io';

interface SocialIconProps {
  Icon: IconType;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href }) => (
  <a target='_blank' href={href} className='h-7 w-7'>
    <Icon />
  </a>
);

const Header = () => (
  <header>
    <div className='md:flex md:justify-between'>
      <Link
        href='/'
        className='whitespace-nowrap text-lg font-semibold hover:underline'
      >
        Kelvin Zhang
      </Link>
      <Navbar />
    </div>
    <div className='mb-4 flex'>
      <SocialIcon
        Icon={IoLogoLinkedin}
        href='https://linkedin.com/in/kelvzhan'
      />
      <SocialIcon Icon={IoLogoTwitter} href='https://twitter.com/kelvzhan' />
      <SocialIcon Icon={IoMdMail} href='mailto:hello@iamkelv.in' />
      <SocialIcon Icon={IoLogoGithub} href='https://github.com/kz' />
    </div>
  </header>
);

export default Header;
