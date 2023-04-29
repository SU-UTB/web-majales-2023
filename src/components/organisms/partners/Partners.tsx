import { mainPartners, partners } from './Partners.content';
import trinityBank from '../../../assets/partners/2023/trinityBank.png';
import postaBezHranic from '../../../assets/partners/2023/mainPartners/postaBezHranic.png';
import vest from '../../../assets/partners/2023/classicPartners/vest.png';
import PartnerHeading from '../../atoms/section/PartnerHeading';
import su from '../../../assets/partners/2023/suCut.png';
import utb from '../../../assets/partners/2023/utb.svg';

const Partners = () => {
  return (
    <div
      id='partneri'
      className='flex flex-col w-4/5 w-max-[1600px] m-auto my-12 xs:mt-20 xs:mb-0 gap-10 xs:gap-8'
    >
      <div className='flex flex-col w-full self-center'>
        <PartnerHeading>Generální partner</PartnerHeading>
        <a
          className='lg:w-[250px] xs:w-[200px] w-[150px] mt-4 mb-10 xs:mb-20 self-center gap-8'
          href='https://www.trinitybank.cz/'
          target='_blank'
        >
          <img src={trinityBank} alt='Trinity Bank' />
        </a>
      </div>

      <div className='self-center'>
        <PartnerHeading>Hlavní partneři</PartnerHeading>
      </div>
      <div className='flex mb-14 xs:mb-20 flex-wrap justify-center gap-8 xs:gap-12'>
        {mainPartners.map((item, index) => (
          <a
            key={index}
            className='lg:w-[170px] xs:w-[150px] w-[120px] h-auto self-center'
            href={item.linkURL}
            target='_blank'
          >
            <img className='w-full' src={item.logoSrc} alt={item.name} />
          </a>
        ))}
      </div>

      <PartnerHeading>Logistický partner</PartnerHeading>
      <a
        className='flex flex-col lg:w-[200px] xs:w-[170px] w-[130px] mb-14 xs:mb-20 self-center gap-8'
        href='https://www.postabezhranic.cz/'
        target='_blank'
      >
        <img src={postaBezHranic} alt='Posta bez hranic' />
      </a>

      <PartnerHeading>Partner pro RoadShow Majáles UTB 2023</PartnerHeading>
      <a
        className='flex flex-col lg:w-[150px] xs:w-[150px] w-[100px] mb-14 xs:mb-20 self-center gap-8'
        href='https://vestzlin.cz/'
        target='_blank'
      >
        <img src={vest} alt='Vest' />
      </a>

      <div className='self-center'>
        <PartnerHeading>Partneři</PartnerHeading>
      </div>
      <div className='flex flex-wrap justify-center align-middle gap-8 xs:gap-12 mb-20'>
        {partners.map((item, index) => (
          <a
            key={index}
            className='lg:w-[150px] xs:w-[130px] w-[100px] h-auto self-center'
            href={item.linkURL}
            target='_blank'
          >
            <img className='w-full' src={item.logoSrc} alt={item.name} />
          </a>
        ))}
      </div>

      <div className='self-center'>
        <PartnerHeading>Organizátoři</PartnerHeading>
      </div>
      <div className='flex mb-10 xs:mb-20 xs:mt-6 flex-wrap justify-center gap-12 md:gap-20'>
        <a
          className='flex flex-col lg:w-[300px] xs:w-[250px] w-[200px] self-center'
          href='https://www.instagram.com/studentskaunieutb/'
          target='_blank'
        >
          <img src={su} alt='Studentská Unie UTB' />
        </a>
        <a
          className='flex flex-col lg:w-[300px] xs:w-[250px] w-[200px] self-center'
          href='https://www.utb.cz/'
          target='_blank'
        >
          <img src={utb} alt='Univerzita Tomase Bati' />
        </a>
      </div>
    </div>
  );
};

export default Partners;
