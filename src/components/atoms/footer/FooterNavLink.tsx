import LinkItem from '../../../lib/types/LinkItem';

const FooterNavLink = ({ linkTo, linkText }: LinkItem) => {
  return (
    <a href={linkTo} className="uppercase text-dark_blu txt-bold">
      {linkText}
    </a>
  );
};

export default FooterNavLink;
