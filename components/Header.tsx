import Link from 'next/link';
import { IconType } from 'react-icons';
import {
  IoLogoLinkedin,
  IoMdMail,
  IoLogoTwitter,
  IoLogoGithub,
} from 'react-icons/io';

interface HeaderLinkProps {
  href: string;
  text: string;
}

interface SocialIconProps {
  Icon: IconType;
  href: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, text }) => (
  <Link href={href} className='mb-1 text-blue-500'>
    {text}
  </Link>
);

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href }) => (
  <a target='_blank' href={href} className='h-7 w-7'>
    <Icon />
  </a>
);

const Header = () => (
  <header>
    <div className='md:flex md:justify-between'>
      <Link href='/' className='whitespace-nowrap text-lg font-semibold'>
        Kelvin Zhang
      </Link>
      <nav className='mb-2 flex flex-col last:mb-0 md:flex-row md:space-x-6 md:last:mb-0'>
        <HeaderLink href='/' text='About' />
        <HeaderLink href='/blog' text='Blog' />
        <HeaderLink href='/projects' text='Projects' />
      </nav>
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
