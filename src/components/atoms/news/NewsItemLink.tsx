import LinkItem from '../../../lib/types/TLinkItem';

const NewsItemLink = ({ linkTo, linkText }: LinkItem) => {
  return (
    <a
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
      className="text-dark_blu underline max-w-max text-right"
    >
      {linkText}
    </a>
  );
};

export default NewsItemLink;
