import { useState } from 'react';
import { ROUTES } from '../../lib/constants/Routes';
import HamburgerButton from '../atoms/header/HamburgerButton';
import HeaderNavLink from '../atoms/header/HeaderNavLink';
import HorizontalSocials from '../moleculs/header/HorizontalSocials';
import LogoDateContainer from '../moleculs/header/LogoDateContainer';

const Header = () => {
  const [toggledMenu, setToggledMenu] = useState<boolean>(false);
  console.log('toggled menu?:' + toggledMenu);

  return (
    <header className="fixed top-0 z-10 w-full h-20">
      <nav className="relative flex items-center justify-around h-full bg-white">
        <LogoDateContainer />
        <HamburgerButton
          active={toggledMenu}
          handleClick={() => setToggledMenu(!toggledMenu)}
        />
        <ul className="absolute flex flex-col items-center w-full bg-white nav-items lg:pt-4 lg:w-auto lg:flex-row lg:space-x-8 lg:static top-20 lg:top-0">
          {ROUTES.map((route) => (
            <HeaderNavLink
              key={route.path}
              linkTo={route.path}
              linkText={route.linkText}
            />
          ))}
          <HorizontalSocials />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
