import FooterItemHeadline from '../../atoms/footer/FooterItemHeadline';

type Props = {
  managerName: string;
  managerPos: string;
  managerMail: string;
};

const FooterManagerItem = ({ managerName, managerPos, managerMail }: Props) => {
  return (
    <>
      <FooterItemHeadline headlineText={managerName} />
      <p className="manager-position">{managerPos}</p>
      <a href={`mailto:${managerMail}`}>{managerMail}</a>
    </>
  );
};

export default FooterManagerItem;
