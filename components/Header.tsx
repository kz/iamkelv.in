import Link from 'next/link';

interface HeaderLinkProps {
  href: string;
  text: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, text }) => (
  <Link href={href} className='text-blue-500'>
    {text}
  </Link>
);

const Header = () => (
  <header className='flex justify-between'>
    <div className='text-lg font-semibold'>Kelvin Zhang</div>
    <nav className='space-x-2 md:space-x-6'>
      <HeaderLink href='/' text='About' />
      <HeaderLink href='/blog' text='Blog' />
      <HeaderLink href='/projects' text='Projects' />
    </nav>
  </header>
);

export default Header;
