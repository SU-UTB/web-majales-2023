import LinkItem from '../../../lib/types/TLinkItem';

const FooterNavLink = ({ linkTo, linkText }: LinkItem) => {
  return (
    <a href={linkTo} className='uppercase txt-bold'>
      {linkText}
    </a>
  );
};

export default FooterNavLink;
