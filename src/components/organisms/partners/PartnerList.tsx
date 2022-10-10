import PartnerBox from '../../atoms/partner/PartnerBox';
import PartnerPicture from '../../atoms/partner/PartnerPicture';
import PartnerSection from '../../atoms/partner/PartnerSection';

const PartnerList = () => {
  const generalPartner = {
    partnerImg: './assets/partners/logos/oveckarna',
    partnerImgAlt: 'Ovečkárna',
    partnerLink: 'https://www.oveckarna.cz/',
  };

  const logisticPartner = {
    partnerImg: './assets/partners/logos/posta_bez_hranic',
    partnerImgAlt: 'Pošta bez hranic',
    partnerLink: 'https://www.postabezhranic.cz/',
  };

  const bandContestPartner = {
    partnerImg: './assets/partners/logos/radegast',
    partnerImgAlt: 'Radegast',
    partnerLink: 'https://www.radegast.cz/',
  };

  const mainPartners = [
    {
      partnerImg: './assets/partners/logos/svoboda_brezik',
      partnerImgAlt: 'svoboda brezik',
      partnerLink: 'http://www.svobodabrezik.cz/',
    },
    {
      partnerImg: './assets/partners/logos/is_produkce',
      partnerImgAlt: 'IS Produkce',
      partnerLink: 'https://isprodukce.cz/',
    },
    {
      partnerImg: './assets/partners/logos/zlin',
      partnerImgAlt: 'Zlín',
      partnerLink: 'https://www.zlin.eu/',
    },
    {
      partnerImg: './assets/partners/logos/kalina',
      partnerImgAlt: 'kalina',
      partnerLink: 'https://kalina.cz/',
    },
    {
      partnerImg: './assets/partners/logos/vest',
      partnerImgAlt: 'vest',
      partnerLink: 'https://vestzlin.cz/',
    },
    {
      partnerImg: './assets/partners/logos/graspo',
      partnerImgAlt: 'graspo',
      partnerLink: 'https://www.graspo.com/',
    },
    {
      partnerImg: './assets/partners/logos/ms_elektro',
      partnerImgAlt: 'ms elektro',
      partnerLink: 'https://www.mselektro.cz/',
    },
    {
      partnerImg: './assets/partners/logos/zlinsky_kraj',
      partnerImgAlt: 'zlinsky kraj',
      partnerLink: 'https://www.kr-zlinsky.cz/',
    },
    {
      partnerImg: './assets/partners/logos/captain_morgan',
      partnerImgAlt: 'captain morgan',
      partnerLink: 'https://www.captainmorgan.com/cs-cz/',
    },
    {
      partnerImg: './assets/partners/logos/cisty_festival_ekokom',
      partnerImgAlt: 'cisty festival ekokom',
      partnerLink: 'https://www.cistyfestival.cz/',
    },
    {
      partnerImg: './assets/partners/logos/gnotes',
      partnerImgAlt: 'G Notes',
      partnerLink: 'https://www.gnotes.cz/',
    },
  ];

  const partners = [
    {
      partnerImg: './assets/partners/logos/zlinstav',
      partnerImgAlt: 'zlinstav',
      partnerLink: 'https://www.zlinstav.com/',
    },
    {
      partnerImg: './assets/partners/logos/dimer',
      partnerImgAlt: 'dimer',
      partnerLink: 'https://www.dimer.cz/tesneni/index.php',
    },
    {
      partnerImg: './assets/partners/logos/nadace_tomase_bati',
      partnerImgAlt: 'nadace tomase bati',
      partnerLink: 'https://www.nadacetomasebati.cz/',
    },
    {
      partnerImg: './assets/partners/logos/awl',
      partnerImgAlt: 'awl',
      partnerLink: 'https://awl.nl/cs/',
    },
    {
      partnerImg: './assets/partners/logos/teplarna_otrokovice',
      partnerImgAlt: 'teplarna otrokovice',
      partnerLink: 'https://www.tot.cz/',
    },
    {
      partnerImg: './assets/partners/logos/leaves',
      partnerImgAlt: 'leaves',
      partnerLink: 'https://leaves.bar/',
    },
    {
      partnerImg: './assets/partners/logos/nextbike',
      partnerImgAlt: 'nextbike',
      partnerLink: 'https://www.nextbikeczech.com/',
    },
    {
      partnerImg: './assets/partners/logos/burger',
      partnerImgAlt: 'burger',
      partnerLink: 'https://www.facebook.com/burgerzlin/',
    },
    {
      partnerImg: './assets/partners/logos/exitroom_zlin',
      partnerImgAlt: 'exitroom zlin',
      partnerLink: 'https://www.exitroomzlin.cz/',
    },
    {
      partnerImg: './assets/partners/logos/faency_fries',
      partnerImgAlt: 'faency fries',
      partnerLink: 'https://www.faencyfries.cz/',
    },
    {
      partnerImg: './assets/partners/logos/impacthub_zlin_blue',
      partnerImgAlt: 'impacthub zlin blue',
      partnerLink: 'https://hubzlin.cz/',
    },
    {
      partnerImg: './assets/partners/logos/kfc',
      partnerImgAlt: 'kfc',
      partnerLink: 'https://kfc.cz/',
    },
    {
      partnerImg: './assets/partners/logos/laser_game_zlin',
      partnerImgAlt: 'laser game zlin',
      partnerLink: 'http://lasergamezlin.cz/',
    },
    {
      partnerImg: './assets/partners/logos/makalu',
      partnerImgAlt: 'makalu',
      partnerLink: 'http://www.nepalska-restaurace-makalu.cz/zlin.php',
    },
    {
      partnerImg: './assets/partners/logos/mdz',
      partnerImgAlt: 'mdz',
      partnerLink: 'https://divadlozlin.cz/',
    },
    {
      partnerImg: './assets/partners/logos/matchball',
      partnerImgAlt: 'matchball',
      partnerLink: 'http://mball.cz/',
    },
  ];

  const medialPartners = [
    {
      partnerImg: './assets/partners/logos/medial/inzlin_logo',
      partnerImgAlt: 'inzlin',
      partnerLink: 'http://www.inzlin.info/',
    },
    {
      partnerImg: './assets/partners/logos/medial/jsem_ze_zlina',
      partnerImgAlt: 'jsem ze zlina',
      partnerLink: 'https://www.jsemzezlina.cz/',
    },
    {
      partnerImg: './assets/partners/logos/medial/kudyznudy',
      partnerImgAlt: 'kudyznudy',
      partnerLink: 'https://www.kudyznudy.cz/',
    },
    {
      partnerImg: './assets/partners/logos/medial/cesky_rozhlas_zlin',
      partnerImgAlt: 'zlin cesky rozhlas',
      partnerLink: 'https://zlin.rozhlas.cz/',
    },
  ];

  const organizators = [
    {
      partnerImg: './assets/partners/logos/utb',
      partnerImgAlt: 'utb',
      partnerLink: 'https://www.utb.cz/',
    },
    {
      partnerImg: './assets/partners/logos/studentska_unie',
      partnerImgAlt: 'studentska unie',
      partnerLink: 'https://sunovy.utb.cz/',
    },
  ];

  return (
    <section id="partner-list">
      <div className="partners-gallery flex flex-col items-center px-8 md:w-4/5 mx-auto py-12">
        <PartnerSection>
          <h4 className="txt-extrabold text-5xl mb-8 text-center">
            Generální partner
          </h4>
          <PartnerBox>
            <PartnerPicture
              linkTo={generalPartner.partnerLink}
              imgSrc={generalPartner.partnerImg}
              imgAlt={generalPartner.partnerImgAlt}
            />
          </PartnerBox>
        </PartnerSection>

        <PartnerSection>
          <h4 className="txt-extrabold text-4xl text-center">
            Logistický partner
          </h4>
          <PartnerBox>
            <PartnerPicture
              linkTo={logisticPartner.partnerLink}
              imgSrc={logisticPartner.partnerImg}
              imgAlt={logisticPartner.partnerImgAlt}
            />
          </PartnerBox>
        </PartnerSection>

        <PartnerSection>
          <h4 className="txt-extrabold text-2xl text-center mb-8">
            Hlavní partneři
          </h4>
          <div className="main-partners flex flex-wrap justify-around mb-8 md:mb-16">
            {mainPartners.map((mainPartner) => (
              <PartnerBox>
                <PartnerPicture
                  linkTo={mainPartner.partnerLink}
                  imgSrc={mainPartner.partnerImg}
                  imgAlt={mainPartner.partnerImgAlt}
                />
              </PartnerBox>
            ))}
          </div>
        </PartnerSection>

        <PartnerSection>
          <h4 className="txt-extrabold text-2xl text-center mb-8">Partneři</h4>
          <div className="partners flex flex-wrap justify-around mb-8 md:mb-16">
            {partners.map((partner) => (
              <PartnerBox>
                <PartnerPicture
                  linkTo={partner.partnerLink}
                  imgSrc={partner.partnerImg}
                  imgAlt={partner.partnerImgAlt}
                />
              </PartnerBox>
            ))}
          </div>
        </PartnerSection>

        <PartnerSection>
          <h4 className="txt-extrabold text-2xl text-center mb-8">
            Mediální partneři
          </h4>
          <div className="medial-partners flex flex-wrap justify-around mb-8 md:mb-16">
            {medialPartners.map((medialPartner) => (
              <PartnerBox>
                <PartnerPicture
                  linkTo={medialPartner.partnerLink}
                  imgSrc={medialPartner.partnerImg}
                  imgAlt={medialPartner.partnerImgAlt}
                />
              </PartnerBox>
            ))}
          </div>
        </PartnerSection>

        <PartnerSection>
          <h4 className="txt-extrabold text-2xl text-center">
            Partner soutěže kapel
          </h4>
          <PartnerBox>
            <PartnerPicture
              linkTo={bandContestPartner.partnerLink}
              imgSrc={bandContestPartner.partnerImg}
              imgAlt={bandContestPartner.partnerImgAlt}
            />
          </PartnerBox>
        </PartnerSection>

        <PartnerSection>
          <h4 className="txt-extrabold text-2xl text-center mb-4">
            Organizátoři
          </h4>
          <div className="partners flex flex-wrap justify-around">
            {organizators.map((organizator) => (
              <PartnerBox>
                <PartnerPicture
                  linkTo={organizator.partnerLink}
                  imgSrc={organizator.partnerImg}
                  imgAlt={organizator.partnerImgAlt}
                />
              </PartnerBox>
            ))}
          </div>
        </PartnerSection>
      </div>
    </section>
  );
};

export default PartnerList;
