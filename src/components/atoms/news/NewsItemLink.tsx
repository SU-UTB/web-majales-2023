import LinkItem from '../../../lib/types/TLinkItem';

const NewsItemLink = ({ linkTo, linkText }: LinkItem) => {
  return (
    <a
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
      className="text-right underline text-dark_blu max-w-max"
    >
      {linkText}
    </a>
  );
};

export default NewsItemLink;
