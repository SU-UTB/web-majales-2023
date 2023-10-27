import PartnerHeading from '../../atoms/section/PartnerHeading';

const Partners = () => {
  return (
    <div
      id='partneri'
      className='flex flex-col w-4/5 w-max-[1600px] m-auto my-12 xs:my-20 gap-10 xs:gap-8'
    >
      <div className='self-center'>
        <PartnerHeading>Partneři</PartnerHeading>
      </div>
      <div className='flex flex-wrap justify-center align-middle gap-8 xs:gap-12'>
        <h6>Chcete se stát partnery tohoto ročníku, tak přesne Vás potřebujeme. Kontaktujte nás na 
            <a href="mailto:kratochvil@sutb.cz"> kratochvil@sutb.cz</a>
        </h6>
      </div>
    </div>
  );
};

export default Partners;
