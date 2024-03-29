type Props = {
  linkTo: string;
  isMailLink?: boolean;
};

const FooterLink = ({ linkTo, isMailLink = false }: Props) => {
  return (
    <a
      href={isMailLink ? `mailto:${linkTo}` : `https://${linkTo}`}
      target='_blank'
      rel='noopener noreferrer'
      className='underline max-w-max'
    >
      {linkTo}
    </a>
  );
};

export default FooterLink;
