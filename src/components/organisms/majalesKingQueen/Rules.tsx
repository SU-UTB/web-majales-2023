import NavToPageBlueButton from '../../atoms/header/NavToPageBlueButton';
import SectionHeading from '../../atoms/section/SectionHeading';

const Rules = () => {
  return (
    <section id="rules-band-contest" className="pt-12 relative -top-40">
      <div className="flex justify-center px-8 md:px-4">
        <div className="w-full md:w-4/5 xl:w-3/5">
          <SectionHeading>
            Pravidla pro účast v soutěži Král a&nbsp;Královna Majálesu UTB 2022
          </SectionHeading>
          <ol className="">
            <li>
              Zúčastnit se může každý, kdo je
              <span className="txt-bold">v tomto roce studentem UTB</span> (i
              dálkové studium).
            </li>
            <li>
              Soutěží se <span className="txt-bold">v párech.</span> Každý pár
              se musí skládat z jednoho muže a&nbsp;jedné ženy.
            </li>
            <li>
              Celý tým musí být ze
              <span className="txt-bold">stejné fakulty.</span>
            </li>
            <li>
              Registrovat se je možné
              <span className="txt-bold">od 18. 4. 00:01 do 1. 5. 23:59.</span>
            </li>
            <li>Registrace probíhá pomocí přihlašovacího formuláře.</li>
            <li>
              Pro výhru v soutěži je potřeba účastnit se
              <span className="txt-bold">všech kol soutěže,</span> které
              proběhnou
              <span className="txt-bold">6. 5. v areálu konání akce.</span>
              <br />
              Způsob jednotlivých soutěžních kol bude upřesněn.
              <span className="txt-bold">Kola budou bodovaná.</span>
            </li>
            <li>
              Čas a&nbsp;místo srazu v den soutěže bude upřesněn skrze e-maily
              účastníků.
            </li>
          </ol>
          <div className="mt-12 md:mt-20">
            <NavToPageBlueButton
              blank={true}
              linkText="registruj se!"
              linkTo="https://docs.google.com/forms/d/1OdwDsAbSIjbJw9RzmeTneiEAmWY37mked_KPqKg-RIU/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
