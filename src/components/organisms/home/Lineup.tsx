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
    <section id="lineup" className="px-8 pt-4 mx-auto mb-32 md:w-4/5 md:px-0">
      <div className="lineup-header lg:w-10/12">
        <h5 className="mb-8 text-right section-heading text-light_blu">
          Line-up
        </h5>
      </div>
      <div className="mx-auto my-4 stage-schedule sm:w-4/5 md:w-3/5 xl:w-2/5 md:my-8 xl:my-16">
        {stageSchedules.map((stage) => (
          <div key={stage.stageName} className="mb-16 stage">
            <h4 className="mb-2 text-2xl text-center sm:text-3xl txt-medium">
              {stage.stageType}
            </h4>
            <h3 className="mb-12 text-4xl text-center sm:text-5xl txt-bold">
              {stage.stageName}
            </h3>
            {stage.bands.map((band) => (
              <div
                key={band.bandName}
                className="flex items-center justify-between mb-5 text-lg uppercase sm:text-xl txt-medium"
              >
                <span>{band.bandTime}</span>
                <span className="flex-grow hidden mx-4 border-b-2 sm:block divider"></span>
                <span>{band.bandName}</span>
              </div>
            ))}
          </div>
        ))}

        <div className="flex justify-center mt-12 nav-btn">
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
