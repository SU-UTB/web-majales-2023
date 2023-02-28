import HeaderNavLink from '../atoms/header/HeaderNavLink';
import HorizontalSocials from '../moleculs/header/HorizontalSocials';
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
    tag: '#partneri',
    text: 'Partneři',
  },
  {
    tag: '#kontakt',
    text: 'Kontakt',
  },
];

const Header = () => {
  return (
    <header className='fixed top-0 z-10 w-full'>
      <nav className='flex flex-wrap justify-between px-2 pt-2 items-center sm:px-6 md:justify-around md:px-0 md:pt-0 bg-white '>
        <LogoDateContainer />

        <ul className='hidden md:block items-center lg:w-auto lg:flex-row lg:space-x-8 '>
          {headerItems.map((item) => (
            <HeaderNavLink
              key={item.text}
              linkTo={item.tag}
              linkText={item.text}
            />
          ))}
          <HorizontalSocials />
        </ul>
        <HamburgerMenu items={headerItems} />
      </nav>
    </header>
  );
};

export default Header;
