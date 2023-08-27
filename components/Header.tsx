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
  <Link href={href} className='text-blue-500'>
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
    <div className='flex justify-between'>
      <div className='text-lg font-semibold'>Kelvin Zhang</div>
      <nav className='space-x-3 md:space-x-6'>
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
