import LinkItem from '../../../lib/types/TLinkItem';

const HeaderNavLink = ({ linkTo, linkText }: LinkItem) => {
  return (
    <a className='uppercase txt-bold lg:mt-0 text-sm lg:text-lg' href={linkTo}>
      {linkText}
    </a>
  );
};

export default HeaderNavLink;
