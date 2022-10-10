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
      rel="noopener noreferrer"
      className="inline-block text-white bg-dark_blu uppercase txt-bold text-lg px-8 py-4"
    >
      {linkText}
    </Link>
  );
};

export default NavToPageBlueButton;
