import {
  bandContestPartner,
  generalPartner,
  logisticPartner,
  mainPartners,
  medialPartners,
  organizators,
  partners,
} from '../../../data/partners';
import PartnerBox from '../../atoms/partner/PartnerBox';
import PartnerPicture from '../../atoms/partner/PartnerPicture';
import PartnerSection from '../../atoms/partner/PartnerSection';

const PartnerList = () => {
  return (
    <section id='partner-list'>
      <div className='flex flex-col items-center px-8 py-12 mx-auto partners-gallery md:w-4/5'>
        <PartnerSection>
          <h4 className='mb-8 text-2xl text-center txt-extrabold'>Partneři</h4>
          <div className='flex flex-wrap justify-around mb-8 partners md:mb-16'>
            {/* {partners.map((partner) => (
              <PartnerBox key={partner.partnerImg}>
                <PartnerPicture
                  linkTo={partner.partnerLink}
                  imgSrc={partner.partnerImg}
                  imgAlt={partner.partnerImgAlt}
                />
              </PartnerBox>
            ))} */}
          </div>
        </PartnerSection>
      </div>
    </section>
  );
};

export default PartnerList;
