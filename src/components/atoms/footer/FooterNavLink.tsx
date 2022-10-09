type Props = {
  linkTo: string;
  linkText: string;
};

const FooterNavLink = ({ linkTo, linkText }: Props) => {
  return (
    <a href={linkTo} className="uppercase text-dark_blu txt-bold">
      {linkText}
    </a>
  );
};

export default FooterNavLink;
