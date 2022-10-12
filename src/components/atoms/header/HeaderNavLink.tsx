import { Link } from 'react-router-dom';
import LinkItem from '../../../lib/types/TLinkItem';

const HeaderNavLink = ({ linkTo, linkText }: LinkItem) => {
  return <Link to={linkTo}>{linkText}</Link>;
};

export default HeaderNavLink;
