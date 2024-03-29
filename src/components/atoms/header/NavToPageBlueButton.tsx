import { Link } from 'react-router-dom';

type Props = {
  linkTo: string;
  linkText: string;
  blank?: boolean;
};

const NavToPageBlueButton = ({ linkTo, linkText, blank = false }: Props) => {
  return (
    <Link
      target={blank ? '_blank' : '_self'}
      to={linkTo}
      rel='noopener noreferrer'
      className='inline-block px-8 py-4 text-lg  uppercase text-black bg-white txt-bold'
    >
      {linkText}
    </Link>
  );
};

export default NavToPageBlueButton;
