import { ROUTES } from '../../lib/constants/Routes';
import FooterItemHeadline from '../atoms/footer/FooterItemHeadline';
import FooterLink from '../atoms/footer/FooterLink';
import FooterNavLink from '../atoms/footer/FooterNavLink';
import FooterManagerItem from '../moleculs/footer/FooterManagerItem';
import SocialsContainer from '../moleculs/footer/SocialsContainer';

const Footer = () => {
  const managers = [
    {
      name: 'LEONA VYHNÁLKOVÁ',
      pos: 'manažerka projektu',
      mail: 'vyhnalkova@sutb.cz',
    },
    {
      name: 'Rastík škojec',
      pos: 'koordinátor spolupráce',
      mail: 'skojec@sutb.cz',
    },
    {
      name: 'MICHAELA FILIPCOVÁ',
      pos: 'public relations',
      mail: 'filipcova@sutb.cz',
    },
  ];

  const behindTheScenesGuyz = [
    {
      name: 'Adam Utíkal',
      pos: 'statutární zástupce',
      mail: 'utikal@sutb.cz',
    },
    {
      name: 'Fifko Tomeš',
      pos: 'správa webu a IT',
      mail: '',
    },
    {
      name: 'Klárka bárová',
      pos: 'webdesign a vizuální zpracování',
      mail: '',
    },
  ];

  const footerLinks = [
    {
      linkTo: 'sunovy.utb.cz',
    },
    {
      linkTo: 'utb.cz',
    },
    {
      linkTo: 'su@utb.cz',
      isMailLink: true,
    },
  ];

  return (
    <footer className='bg-[url("/src/assets/footer_img.png")] bg-no-repeat bg-center bg-cover'>
      <div className="flex flex-col items-center justify-around text-center footer-inner md:items-start md:flex-row md:text-left">
        <div className="mb-4 footer-nav-links md:mb-0">
          <FooterItemHeadline
            headlineText="majáles"
            classNames="mb-4 md:mb-6"
          />
          {ROUTES.map((route) => (
            <div key={route.path} className="mb-2 footer-nav-link">
              <FooterNavLink linkTo={route.path} linkText={route.linkText} />
            </div>
          ))}
          <div className="flex flex-col items-center mt-4 footer-contact-links md:mt-6 md:items-start">
            {footerLinks.map((footerLink) => (
              <FooterLink
                key={footerLink.linkTo}
                isMailLink={footerLink.isMailLink}
                linkTo={footerLink.linkTo}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between my-4 managers space-y-8 md:my-0">
          {managers.map((manager) => (
            <div key={manager.name} className="footer-manager-item">
              <FooterManagerItem
                managerName={manager.name}
                managerPos={manager.pos}
                managerMail={manager.mail}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center footer-contacts md:items-start">
          <SocialsContainer />
          <div className="flex flex-col footer-guyz">
            {behindTheScenesGuyz.map((guy) => (
              <div key={guy.name} className="mb-8 footer-guy-item">
                <FooterManagerItem
                  managerName={guy.name}
                  managerPos={guy.pos}
                  managerMail={guy.mail}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <h6 className="mt-8 text-center uppercase md:mt-12 txt-bold">
        ©Studentská unie utb, 2023
      </h6>
    </footer>
  );
};

export default Footer;
