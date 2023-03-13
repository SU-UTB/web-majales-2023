import { ROUTES } from '../../lib/constants/Routes';
import FooterItemHeadline from '../atoms/footer/FooterItemHeadline';
import FooterLink from '../atoms/footer/FooterLink';
import FooterNavLink from '../atoms/footer/FooterNavLink';
import FooterManagerItem from '../moleculs/footer/FooterManagerItem';
import SocialsContainer from '../moleculs/footer/SocialsContainer';

const Footer = () => {
  const managers = [
    {
      name: 'Marek Hujo, Martin Šálek',
      pos: 'manažeři projektu',
      mail: 'hujo@sutb.cz, martin.salek@sutb.cz',
    },
    {
      name: 'Rastík škojec',
      pos: 'marketing',
      mail: 'skojec@sutb.cz',
    },
    {
      name: 'Michelle Hozzová',
      pos: 'externí spolupráce',
      mail: 'hozzova@sutb.cz',
    },
  ];

  const behindTheScenesGuyz = [
    {
      name: 'Jan Bureš',
      pos: 'správa webu a IT',
      mail: 'j_bures@sutb.cz',
    },
    {
      name: 'Dominik Gerža',
      pos: 'statutární zástupce',
      mail: 'gerza@sutb.cz',
    },
    {
      name: 'Sára Hlásenská',
      pos: 'artdirectior',
      mail: 'hlasenska@sutb.cz',
    },
    // {
    //   name: "Sára Hlásenská, David Štolba",
    //   pos: "webdesign a vizuální zpracování",
    //   mail: "hlasenksa@sutb.cz, stolba@sutb.cz",
    // },
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
    <footer className="bg-[url('/src/assets/footer/footer_bg_phone.png')] md:bg-[url('/src/assets/footer/footer_bg.png')] bg-no-repeat bg-center bg-cover pt-12 pb-4">
      <div className='flex flex-col items-center justify-around text-center footer-inner md:items-start md:flex-row md:text-left'>
        <div className='mb-4 footer-nav-links md:mb-0'>
          <FooterItemHeadline
            headlineText='majáles'
            classNames='mb-4 md:mb-6'
          />
          {ROUTES.map(
            (route) =>
              route.linkText && (
                <div key={route.path} className='mb-2 footer-nav-link'>
                  <FooterNavLink
                    linkTo={route.path}
                    linkText={route.linkText}
                  />
                </div>
              )
          )}

          <div className='flex flex-col items-center mt-4 footer-contact-links md:mt-6 md:items-start'>
            {footerLinks.map((footerLink) => (
              <FooterLink
                key={footerLink.linkTo}
                isMailLink={footerLink.isMailLink}
                linkTo={footerLink.linkTo}
              />
            ))}
          </div>
          <div className='hidden md:block pt-10'>
            <SocialsContainer />
          </div>
        </div>
        <div className='flex flex-col justify-between my-4 managers space-y-8 md:my-0'>
          {managers.map((manager) => (
            <div key={manager.name} className='footer-manager-item'>
              <FooterManagerItem
                managerName={manager.name}
                managerPos={manager.pos}
                managerMail={manager.mail}
              />
            </div>
          ))}
        </div>
        <div className='flex flex-col items-center footer-contacts md:items-start'>
          <div className='flex flex-col footer-guyz'>
            {behindTheScenesGuyz.map((guy) => (
              <div key={guy.name} className='mb-8 footer-guy-item'>
                <FooterManagerItem
                  managerName={guy.name}
                  managerPos={guy.pos}
                  managerMail={guy.mail}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='block md:hidden'>
          <SocialsContainer />
        </div>
      </div>
      <h6 className='mt-8 text-center uppercase md:mt-12 txt-bold text-[14px] md:text-[18px]'>
        ©Studentská unie utb, 2023
      </h6>
    </footer>
  );
};

export default Footer;
