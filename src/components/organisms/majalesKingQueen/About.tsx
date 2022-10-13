import kingQueenImg from '../../../assets/home/king_queen.jpg';

const About = () => {
  return (
    <section id="about-king" className="relative pb-12 -top-40">
      <div className="mt-24">
        <div className="flex flex-wrap items-center justify-center w-full px-8 mx-auto md:w-4/5 md:px-4 lg:justify-between">
          <div className="max-w-lg mb-8 img-wrapper lg:w-3/5 2xl:w-2/5 md:max-w-none lg:mb-0">
            <img src={kingQueenImg} alt="Král a Královná Majálesu" />
          </div>
          <div className="w-full about-desc lg:w-2/3 2xl:w-1/2 lg:mt-4">
            <p className="mt-6 mb-2">
              <span className="txt-bold">
                Soutěž probíhá ve smíšených párech,
              </span>
              muž i žena musí být ze stejné fakulty. Pokud nemáš parťáka, tak
              nezoufej — nějakého ti dohodíme.
            </p>
            <p className="mb-2">
              Registrovat se můžeš prostřednictvím online dotazníku v rozmezí
              <br />
              <span className="txt-bold">od 18. 4. do 1. 5. do 23:59.</span>
            </p>
            <p className="mb-2">
              Na základě vyřazovacích kol a&nbsp;urozených disciplín přímo na
              akci <span className="txt-bold">6. 5. </span>zjistíme, kdo je
              hoden nosit po další rok korunu a&nbsp;usednout na trůn.
              <br />
              <span className="txt-bold">Budeš to právě ty?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
