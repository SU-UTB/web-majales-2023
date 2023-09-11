import NavToPageBlueButton from '../../atoms/header/NavToPageBlueButton';
import SectionHeading from '../../atoms/section/SectionHeading';

const Rules = () => {
  return (
    <section id="rules-band-contest" className="relative py-12 -top-40">
      <div className="flex justify-center px-8 md:px-4">
        <div className="w-full md:w-4/5 xl:w-3/5">
          <SectionHeading sectionHeadingText="Pravidla pro účast v soutěži kapel a interpretů na Majálesu UTB 2022" />
          <ol>
            <li>
              Registrovat se může každé hudební těleso živě produkující
              <span className="txt-bold">vlastní autorské skladby</span> všech
              žánrů.
            </li>
            <li>
              Registrace sebe nebo kapely proběhne v rozmezí
              <span className="txt-bold">od 1. 3. 00:01 do 31. 3. 23:59.</span>
            </li>
            <li>
              Registrace probíhá pomocí
              <span className="txt-bold">přihlašovacího formuláře.</span>
            </li>
            <li>
              Pro výhru v soutěži je potřeba účastnit se
              <span className="txt-bold">všech kol soutěže.</span>
            </li>
            <li>
              První kolo proběhne formou veřejného
              <span className="txt-bold">online hlasování,</span> které bude
              probíhat
              <span className="txt-bold">1. 4. 00:01 — 15. 4. 23:59.</span>
            </li>
            <li>
              Do druhého kola postoupí první
              <span className="txt-bold">tři finalisté hlasování;</span> ti
              dostanou příležitost zahrát si 5. 5. přímo na
              <span className="txt-bold">stagi Majálesu UTB 2022.</span>
              Vystoupení musí trvat
              <span className="txt-bold">40—55 minut.</span>
            </li>
            <li>
              Vítěz bude <span className="txt-bold">zvolen publikem,</span>
              hlavní cenou je roční zásoba piva.
            </li>
          </ol>
          <div className="mt-12 md:mt-20">
            <NavToPageBlueButton
              blank={true}
              linkText="hlasuj!"
              linkTo="https://docs.google.com/forms/d/17IudnbZ7zvYDyLwqZ-tvyY214hpQp2ZLyT9RzQATTI0/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
