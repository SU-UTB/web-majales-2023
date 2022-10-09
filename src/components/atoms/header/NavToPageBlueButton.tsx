type Props = {
  linkTo: string;
  linkText: string;
  blank: boolean;
};

const NavToPageBlueButton = ({ linkTo, linkText, blank = false }: Props) => {
  return (
    <a
      target={blank ? '_blank' : '_self'}
      href={linkTo}
      rel="noopener noreferrer"
      className="inline-block text-white bg-dark_blu uppercase txt-bold text-lg px-8 py-4"
    >
      {linkText}
    </a>
  );
};

export default NavToPageBlueButton;
