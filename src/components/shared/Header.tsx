import { useState } from 'react';
import { ROUTES } from '../../lib/constants/Routes';
import HamburgerButton from '../atoms/header/HamburgerButton';
import HeaderNavLink from '../atoms/header/HeaderNavLink';
import HorizontalSocials from '../moleculs/header/HorizontalSocials';
import LogoDateContainer from '../moleculs/header/LogoDateContainer';

// TODO: rework the header for more items - there should be two unordered lists, one for mobile and the other for desktop
const Header = () => {
  // const [toggledMenu, setToggledMenu] = useState<boolean>(false);

  return (
    <header className="fixed top-0 z-10 w-full">
      <nav className="relative flex items-center justify-around h-full bg-white flex-wrap">
        <LogoDateContainer />
        {/* <HamburgerButton
          active={toggledMenu}
          handleClick={() => setToggledMenu(!toggledMenu)}
        /> */}
        <ul className="flex items-center bg-white nav-items lg:w-auto lg:flex-row lg:space-x-8 space-x-4 p-2">
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
