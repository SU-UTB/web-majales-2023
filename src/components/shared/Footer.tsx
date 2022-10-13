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
      <div className="footer-inner flex flex-col items-center md:items-start md:flex-row text-center md:text-left justify-around">
        <div className="footer-nav-links mb-4 md:mb-0">
          <FooterItemHeadline
            headlineText="majáles"
            classNames="mb-4 md:mb-6"
          />
          {ROUTES.map((route) => (
            <div key={route.path} className="footer-nav-link mb-2">
              <FooterNavLink linkTo={route.path} linkText={route.linkText} />
            </div>
          ))}
          <div className="footer-contact-links flex flex-col mt-4 md:mt-6 items-center md:items-start">
            {footerLinks.map((footerLink) => (
              <FooterLink
                key={footerLink.linkTo}
                isMailLink={footerLink.isMailLink}
                linkTo={footerLink.linkTo}
              />
            ))}
          </div>
        </div>
        <div className="managers flex flex-col justify-between space-y-8 my-4 md:my-0">
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
        <div className="footer-contacts flex flex-col items-center md:items-start">
          <SocialsContainer />
          <div className="footer-guyz flex flex-col">
            {behindTheScenesGuyz.map((guy) => (
              <div key={guy.name} className="footer-guy-item mb-8">
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
      <h6 className="text-center mt-8 md:mt-12 uppercase txt-bold">
        ©Studentská unie utb, 2023
      </h6>
    </footer>
  );
};

export default Footer;
