import { generalPartner, logisticPartner } from '../../../data/partners';

const Partners = () => {
  return (
    <section id="partners" className="mx-auto md:w-4/5 lg:w-4/5">
      <h5 className="mb-8 mr-8 text-right section-heading text-light_blu">
        Naši partneři
      </h5>
      <div className="flex flex-col items-center partners-gallery">
        <div className="flex flex-col items-center my-20 general-partner">
          <h4 className="mb-4 text-3xl text-center txt-extrabold">
            Generální partner
          </h4>
          <img
            src={generalPartner.partnerImg}
            alt={generalPartner.partnerImgAlt}
          />
        </div>
        <div className="flex flex-col items-center logistic-partner">
          <h4 className="text-2xl text-center txt-extrabold">
            Logistický partner
          </h4>
          <img
            src={logisticPartner.partnerImg}
            alt={logisticPartner.partnerImgAlt}
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
