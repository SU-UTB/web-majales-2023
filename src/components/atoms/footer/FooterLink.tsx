type Props = {
  linkTo: string;
  isMailLink: boolean;
};

const FooterLink = ({ linkTo, isMailLink }: Props) => {
  return (
    <a
      href={isMailLink ? `mailto:${linkTo}` : `https://${linkTo}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-dark_blu underline max-w-max"
    ></a>
  );
};

export default FooterLink;
