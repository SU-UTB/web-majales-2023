type Props = {
  linkTo: string;
  linkText: string;
  blank?: boolean;
  className?: string;
};

const NavToPageWhiteButton = ({
  linkTo,
  linkText,
  className,
  blank = false,
}: Props) => {
  return (
    <a
      target={blank ? '_blank' : '_self'}
      href={linkTo}
      rel="noopener noreferrer"
      className={`inline-block px-8 py-4 text-lg text-center uppercase bg-white text-dark_blu txt-bold ${className}`}
    >
      {linkText}
    </a>
  );
};

export default NavToPageWhiteButton;
