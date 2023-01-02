import { Link } from 'react-router-dom';
import LinkItem from '../../../lib/types/TLinkItem';

const HeaderNavLink = ({ linkTo, linkText }: LinkItem) => {
  return (
    <Link className="uppercase txt-bold lg:mt-0 text-dark_blu" to={linkTo}>
      {linkText}
    </Link>
  );
};

export default HeaderNavLink;
