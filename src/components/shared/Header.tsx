import { useState } from 'react';
import HamburgerButton from '../atoms/header/HamburgerButton';
import HeaderNavLink from '../atoms/header/HeaderNavLink';
import HorizontalSocials from '../moleculs/header/HorizontalSocials';
import LogoDateContainer from '../moleculs/header/LogoDateContainer';

const Header = () => {
  const [toggledMenu, setToggledMenu] = useState<boolean>(false);
  console.log('toggled menu?:' + toggledMenu);

  return (
    <header className="w-full h-20 fixed top-0 z-10">
      <nav className="flex justify-around items-center bg-white relative h-full">
        <LogoDateContainer />
        <HamburgerButton
          active={toggledMenu}
          handleClick={() => setToggledMenu(!toggledMenu)}
        />
        <ul className="nav-items w-full lg:pt-4 lg:w-auto flex flex-col lg:flex-row items-center lg:space-x-8 absolute lg:static bg-white top-20 lg:top-0">
          <HeaderNavLink linkTo="/lineup" linkText="lineup" />
          <HeaderNavLink linkTo="/soutez-kapel" linkText="soutěž kapel" />
          <HeaderNavLink linkTo="/kral-a-kralovna" linkText="král majálesu" />
          <HeaderNavLink linkTo="/aktuality" linkText="aktuality" />
          <HeaderNavLink linkTo="/partneri" linkText="partneři" />
          <HeaderNavLink linkTo="/kontakt" linkText="kontakt" />
          <HorizontalSocials />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
