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
      <p className='text-[18px] md:text-[20px]'>{managerPos}</p>
      <a className='text-[16px] md:text-[18px]' href={`mailto:${managerMail}`}>
        {managerMail}
      </a>
    </>
  );
};

export default FooterManagerItem;
