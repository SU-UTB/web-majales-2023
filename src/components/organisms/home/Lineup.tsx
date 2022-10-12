import { ROUTES, ROUTE_PATHS } from '../../../lib/constants/Routes';
import NavToPageBlueButton from '../../atoms/header/NavToPageBlueButton';

const stageSchedules = [
  {
    stageType: 'hlavní stage',
    stageName: 'Huňatá stéééjdž',
    stageLogo: '',
    bands: [
      {
        bandName: 'qočna',
        bandTime: '14:30 – 14:50',
      },
      {
        bandName: 'jakub děkan band',
        bandTime: '15:00 – 16:00',
      },
      {
        bandName: 'maniak',
        bandTime: '17:00 – 18:00',
      },
      {
        bandName: 'trocha klidu',
        bandTime: '19:00 – 20:00',
      },
      {
        bandName: 'UDG',
        bandTime: '21:00 – 22:00',
      },
      {
        bandName: 'circus problem',
        bandTime: '23:00 – 00:00',
      },
    ],
  },
  {
    stageType: 'vedlejší stage',
    stageName: 'UTB STAGE',
    stageLogo: '',
    bands: [
      {
        bandName: 'meivis',
        bandTime: '16:00 – 16:50',
      },
      {
        bandName: 'alchymie',
        bandTime: '18:00 – 18:50',
      },
      {
        bandName: 'šamat',
        bandTime: '20:00 – 20:50',
      },
      {
        bandName: 'votaano',
        bandTime: '22:00 – 23:00',
      },
    ],
  },
];

const Lineup = () => {
  return (
    <section id="lineup" className="md:w-4/5 mx-auto pt-4 mb-32 px-8 md:px-0">
      <div className="lineup-header lg:w-10/12">
        <h5 className="section-heading text-light_blu text-right mb-8">
          Line-up
        </h5>
      </div>
      <div className="stage-schedule sm:w-4/5 md:w-3/5 xl:w-2/5 mx-auto my-4 md:my-8 xl:my-16">
        {stageSchedules.map((stage) => (
          <div key={stage.stageName} className="stage mb-16">
            <h4 className="text-2xl sm:text-3xl txt-medium text-center mb-2">
              {stage.stageType}
            </h4>
            <h3 className="text-4xl sm:text-5xl txt-bold text-center mb-12">
              {stage.stageName}
            </h3>
            {stage.bands.map((band) => (
              <div
                key={band.bandName}
                className="flex justify-between items-center text-lg sm:text-xl uppercase txt-medium mb-5"
              >
                <span>{band.bandTime}</span>
                <span className="hidden sm:block divider flex-grow border-b-2 mx-4"></span>
                <span>{band.bandName}</span>
              </div>
            ))}
          </div>
        ))}

        <div className="nav-btn mt-12 flex justify-center">
          <NavToPageBlueButton
            linkText="všichni interpreti"
            linkTo={ROUTE_PATHS.LINEUP.path}
          />
        </div>
      </div>
    </section>
  );
};

export default Lineup;
