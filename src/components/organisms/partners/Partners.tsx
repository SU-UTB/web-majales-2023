import { mainPartners, partners } from './Partners.content';
import plazmaPlus from '../../../assets/partners/2023/plazmaPlus.png';
import PartnerHeading from '../../atoms/section/PartnerHeading';

const Partners = () => {
  return (
    <div className='flex flex-col w-4/5 w-max-[1600px] m-auto my-20 gap-10 xs:gap-8'>
      <div className='flex flex-col max-w-[300px] w-full self-center gap-8'>
        <PartnerHeading>Generální partner</PartnerHeading>
        <div className='flex flex-col lg:w-[250px] xs:w-[200px] w-[150px] mb-14 xs:mb-20 self-center gap-8'>
          <img src={plazmaPlus} alt='Plazma Plus' />
        </div>
      </div>

      <div className='self-center'>
        <PartnerHeading>Hlavní partneři</PartnerHeading>
      </div>
      <div className='flex mb-14 xs:mb-20 flex-wrap justify-center gap-8 xs:gap-12'>
        {mainPartners.map((item, index) => (
          <div
            className='lg:w-[150px] xs:w-[130px] w-[100px] h-auto self-center'
            key={index}
          >
            <img className='w-full' src={item.logoSrc} alt={item.name} />
          </div>
        ))}
      </div>

      <div className='self-center'>
        <PartnerHeading>Partneři</PartnerHeading>
      </div>
      <div className='flex flex-wrap justify-center align-middle gap-8 xs:gap-12'>
        {partners.map((item, index) => (
          <div
            className='lg:w-[150px] xs:w-[130px] w-[100px] h-auto self-center'
            key={index}
          >
            <img className='w-full' src={item.logoSrc} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
