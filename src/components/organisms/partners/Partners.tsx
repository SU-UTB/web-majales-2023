import { mainPartners, partners } from './Partners.content';
import trinityBank from '../../../assets/partners/2023/trinityBank.png';
import postaBezHranic from '../../../assets/partners/2023/mainPartners/postaBezHranic.png';
import vest from '../../../assets/partners/2023/classicPartners/vest.png';
import PartnerHeading from '../../atoms/section/PartnerHeading';

const Partners = () => {
  return (
    <div
      id='partneri'
      className='flex flex-col w-4/5 w-max-[1600px] m-auto my-12 xs:my-20 gap-10 xs:gap-8'
    >
      <div className='flex flex-col w-full self-center'>
        <PartnerHeading>Generální partner</PartnerHeading>
        <div className='lg:w-[350px] xs:w-[250px] w-[200px] mb-10 xs:mb-20 self-center gap-8'>
          <img src={trinityBank} alt='Trinity Bank' />
        </div>
      </div>

      <div className='self-center'>
        <PartnerHeading>Hlavní partneři</PartnerHeading>
      </div>
      <div className='flex mb-14 xs:mb-20 flex-wrap justify-center gap-8 xs:gap-12'>
        {mainPartners.map((item, index) => (
          <div
            className='lg:w-[170px] xs:w-[150px] w-[120px] h-auto self-center'
            key={index}
          >
            <img className='w-full' src={item.logoSrc} alt={item.name} />
          </div>
        ))}
      </div>

      <PartnerHeading>Logistický partner</PartnerHeading>
      <div className='flex flex-col lg:w-[200px] xs:w-[170px] w-[130px] mb-14 xs:mb-20 self-center gap-8'>
        <img src={postaBezHranic} alt='Posta bez hranic' />
      </div>

      <PartnerHeading>Partner pro RoadShow Majáles UTB 2023</PartnerHeading>
      <div className='flex flex-col lg:w-[150px] xs:w-[150px] w-[100px] mb-14 xs:mb-20 self-center gap-8'>
        <img src={vest} alt='Vest' />
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
