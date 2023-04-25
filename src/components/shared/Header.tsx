import HeaderNavLink from '../atoms/header/HeaderNavLink';
import LogoDateContainer from '../moleculs/header/LogoDateContainer';
import HamburgerMenu from './HamburgerMenu';

const headerItems = [
  {
    tag: '#lineup',
    text: 'LineUP',
  },
  {
    tag: '#kral',
    text: 'Král Majálesu',
  },
  {
    tag: '#kontakt',
    text: 'Kontakt',
  },
  {
    tag: '#partneri',
    text: 'Partneři',
  },
];

const Header = () => {
  return (
    <header className='fixed w-full top-0 z-10'>
      <nav className='flex flex-wrap align-middle justify-between px-2 pt-2 items-center sm:px-6 md:justify-around md:px-0  bg-white '>
        <LogoDateContainer />

        <ul className='hidden md:block items-center md:w-auto md:flex-row md:space-x-8 lg:space-x-8 '>
          {headerItems.map((item) => (
            <HeaderNavLink
              key={item.text}
              linkTo={item.tag}
              linkText={item.text}
            />
          ))}
        </ul>
        <HamburgerMenu items={headerItems} />
      </nav>
    </header>
  );
};

export default Header;
