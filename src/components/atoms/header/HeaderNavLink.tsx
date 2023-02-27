import LinkItem from '../../../lib/types/TLinkItem';

const HeaderNavLink = ({ linkTo, linkText }: LinkItem) => {
  return (
    <a className='uppercase txt-bold lg:mt-0' href={linkTo}>
      {linkText}
    </a>
  );
};

export default HeaderNavLink;
