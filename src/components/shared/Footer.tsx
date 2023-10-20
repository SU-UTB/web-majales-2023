import { ROUTES } from "../../lib/constants/Routes";
import FooterItemHeadline from "../atoms/footer/FooterItemHeadline";
import FooterLink from "../atoms/footer/FooterLink";
import FooterNavLink from "../atoms/footer/FooterNavLink";
import FooterManagerItem from "../moleculs/footer/FooterManagerItem";
import SocialsContainer from "../moleculs/footer/SocialsContainer";

const Footer = () => {
  const behindTheScenesGuyz = [
    {
      name: "VERONIKA PAVELKOVÁ",
      pos: "marketing",
      mail: "pavelkova@sutb.cz",
    },
    {
      name: "PETRA NĚMCOVÁ",
      pos: "media relations",
      mail: "nemcova@sutb.cz",
    },
    {
      name: "MARTIN ŠÁLEK",
      pos: "produkce",
      mail: "martin.salek@sutb.cz",
    },
    {
      name: "DAVID ŠTÍCHA",
      pos: "kapely",
      mail: "sticha@sutb.cz",
    },
    {
      name: "KAREL KRATOCHVÍL",
      pos: "sales",
      mail: "kratochvil@sutb.cz",
    },
    {
      name: "SÁRA HLÁSENSKÁ",
      pos: "artdirectior",
      mail: "hlasenska@sutb.cz",
    },
    {
      name: "Michaela Kasardová",
      pos: "manažer projektu",
      mail: "kasardova@sutb.cz",
    },
    {
      name: "Simona Hazuchová",
      pos: "manažer projektu",
      mail: "hazuchova@sutb.cz",
    },
  ];

  const footerLinks = [
    {
      linkTo: "su.utb.cz",
    },
    {
      linkTo: "utb.cz",
    },
    {
      linkTo: "su@utb.cz",
      isMailLink: true,
    },
  ];

  return (
    <footer
      id="kontakt"
      className="bg-gradient-to-r from-[#da920f] to-[#dcc785] pt-12 pb-4"
    >
      <div className="flex flex-col items-center justify-around text-center footer-inner md:items-start md:flex-row md:text-left">
        <div className="mb-4 footer-nav-links md:mb-0">
          <FooterItemHeadline
            headlineText="majáles"
            classNames="mb-4 md:mb-6"
          />
          {ROUTES.map(
            (route) =>
              route.linkText && (
                <div key={route.path} className="mb-2 footer-nav-link">
                  <FooterNavLink
                    linkTo={route.path}
                    linkText={route.linkText}
                  />
                </div>
              )
          )}

          <div className="flex flex-col items-center mt-4 footer-contact-links md:mt-6 md:items-start">
            {footerLinks.map((footerLink) => (
              <FooterLink
                key={footerLink.linkTo}
                isMailLink={footerLink.isMailLink}
                linkTo={footerLink.linkTo}
              />
            ))}
          </div>
          <div className="hidden md:block pt-10">
            <SocialsContainer />
          </div>
        </div>

        <div className="footer-contacts md:items-start">
          <div className=" md:grid md:grid-rows-2 md:grid-cols-4  ml-3 md:gap-4  sm:flex sm:flex-col  footer-guyz">
            {behindTheScenesGuyz.map((guy) => (
              <div key={guy.name} className="mb-8  footer-guy-item">
                <FooterManagerItem
                  managerName={guy.name}
                  managerPos={guy.pos}
                  managerMail={guy.mail}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="block md:hidden">
          <SocialsContainer />
        </div>
      </div>
      <h6 className="mt-8 text-center uppercase md:mt-12 txt-bold text-[14px] md:text-[18px]">
        ©Studentská unie utb, 2023
      </h6>
    </footer>
  );
};

export default Footer;
