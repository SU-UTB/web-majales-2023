import { Link } from 'react-router-dom';
import LinkItem from '../../../lib/types/LinkItem';

const HeaderNavLink = ({ linkTo, linkText }: LinkItem) => {
  return <Link to={linkTo}>{linkText}</Link>;
};

export default HeaderNavLink;
