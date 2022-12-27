import {
  bandContestPartner,
  generalPartner,
  logisticPartner,
  mainPartners,
  medialPartners,
  organizators,
  partners,
} from "../../../data/partners";
import PartnerBox from "../../atoms/partner/PartnerBox";
import PartnerPicture from "../../atoms/partner/PartnerPicture";
import PartnerSection from "../../atoms/partner/PartnerSection";

const PartnerList = () => {
  return (
    <section id="partner-list">
      <div className="flex flex-col items-center px-8 py-12 mx-auto partners-gallery md:w-4/5">
        <PartnerSection>
          <h4 className="mb-8 text-5xl text-center txt-extrabold">
            Generální partner
          </h4>
          <PartnerBox>
            {/* <PartnerPicture
              linkTo={generalPartner.partnerLink}
              imgSrc={generalPartner.partnerImg}
              imgAlt={generalPartner.partnerImgAlt}
            /> */}
          </PartnerBox>
        </PartnerSection>

        <PartnerSection>
          <h4 className="text-4xl text-center txt-extrabold">
            Logistický partner
          </h4>
          <PartnerBox>
            {/* <PartnerPicture
              linkTo={logisticPartner.partnerLink}
              imgSrc={logisticPartner.partnerImg}
              imgAlt={logisticPartner.partnerImgAlt}
            /> */}
          </PartnerBox>
        </PartnerSection>

        <PartnerSection>
          <h4 className="mb-8 text-2xl text-center txt-extrabold">
            Hlavní partneři
          </h4>
          <div className="flex flex-wrap justify-around mb-8 main-partners md:mb-16">
            {/* {mainPartners.map((mainPartner) => (
              <PartnerBox key={mainPartner.partnerImg}>
                <PartnerPicture
                  linkTo={mainPartner.partnerLink}
                  imgSrc={mainPartner.partnerImg}
                  imgAlt={mainPartner.partnerImgAlt}
                />
              </PartnerBox>
            ))} */}
          </div>
        </PartnerSection>

        <PartnerSection>
          <h4 className="mb-8 text-2xl text-center txt-extrabold">Partneři</h4>
          <div className="flex flex-wrap justify-around mb-8 partners md:mb-16">
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

        <PartnerSection>
          <h4 className="mb-8 text-2xl text-center txt-extrabold">
            Mediální partneři
          </h4>
          <div className="flex flex-wrap justify-around mb-8 medial-partners md:mb-16">
            {/* {medialPartners.map((medialPartner) => (
              <PartnerBox key={medialPartner.partnerImg}>
                <PartnerPicture
                  linkTo={medialPartner.partnerLink}
                  imgSrc={medialPartner.partnerImg}
                  imgAlt={medialPartner.partnerImgAlt}
                />
              </PartnerBox>
            ))} */}
          </div>
        </PartnerSection>

        <PartnerSection>
          <h4 className="text-2xl text-center txt-extrabold">
            Partner soutěže kapel
          </h4>
          <PartnerBox>
            {/* <PartnerPicture
              linkTo={bandContestPartner.partnerLink}
              imgSrc={bandContestPartner.partnerImg}
              imgAlt={bandContestPartner.partnerImgAlt}
            /> */}
          </PartnerBox>
        </PartnerSection>

        <PartnerSection>
          <h4 className="mb-4 text-2xl text-center txt-extrabold">
            Organizátoři
          </h4>
          <div className="flex flex-wrap justify-around partners">
            {/* {organizators.map((organizator) => (
              <PartnerBox key={organizator.partnerImg}>
                <PartnerPicture
                  linkTo={organizator.partnerLink}
                  imgSrc={organizator.partnerImg}
                  imgAlt={organizator.partnerImgAlt}
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
