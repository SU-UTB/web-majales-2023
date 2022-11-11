import { finalBands } from '../../../data/bands';
import SectionHeading from '../../atoms/section/SectionHeading';

const FinalBandList = () => {
  return (
    <section id="final-band-list" className="py-12">
      <div className="w-full mx-auto md:w-4/5 xl:w-3/5">
        <SectionHeading sectionHeadingText="Finalisté soutěže kapel" />
        {finalBands.map((finalBand) => (
          <div key={finalBand.imgSrc} className="final-band-item">
            <img src={finalBand.imgSrc} alt={finalBand.imgAlt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinalBandList;
