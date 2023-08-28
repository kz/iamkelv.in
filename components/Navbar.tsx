'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderLinkProps {
  href: string;
  text: string;
  isActive: boolean;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, text, isActive }) => (
  <Link
    href={href}
    className={`mb-1 text-blue-500 hover:underline ${
      isActive ? 'font-semibold' : ''
    }`}
  >
    {text}
  </Link>
);

const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <nav className='mb-2 flex flex-col last:mb-0 md:flex-row md:space-x-6'>
      <HeaderLink href='/' text='About' isActive={currentRoute === '/'} />
      <HeaderLink
        href='/blog'
        text='Blog'
        isActive={currentRoute.startsWith('/blog')}
      />
      <HeaderLink
        href='/projects'
        text='Projects'
        isActive={currentRoute === '/projects'}
      />
    </nav>
  );
};

export default Navbar;
