type Props = {
  linkTo: string;
  linkText: string;
  blank: boolean;
};

const NavToPageWhiteButton = ({ linkTo, linkText, blank = false }: Props) => {
  return (
    <a
      target={blank ? '_blank' : '_self'}
      href={linkTo}
      rel="noopener noreferrer"
      className="text-dark_blu inline-block bg-white uppercase txt-bold text-lg px-8 py-4 text-center"
    >
      {linkText}
    </a>
  );
};

export default NavToPageWhiteButton;
