import { useState } from 'react';
import HamburgerButton from '../atoms/header/HamburgerButton';

type Props = {
  items: { text: string; tag: string }[];
};

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

const HamburgerMenu = ({ items }: Props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='block md:hidden'>
        <HamburgerButton active={menuOpen} handleClick={handleMenuToggle} />
      </div>

      <div
        className={`flex flex-col w-full items-center mb-6 ${
          menuOpen ? 'block' : 'hidden'
        } md:hidden `}
      >
        <div className='text-md text-center'>
          {items.map((item: any, index: any) => (
            <a key={index} href={item.tag} className='block mt-8'>
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
