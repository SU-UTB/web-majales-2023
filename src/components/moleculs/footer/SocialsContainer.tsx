import MajalesSocials from './MajalesSocials';
import StudentUnionSocials from './StudentUnionSocials';

const SocialsContainer = () => {
  return (
    <div className="flex flex-col mb-6 soc-container md:flex-row md:space-x-8">
      <MajalesSocials />
      <StudentUnionSocials />
    </div>
  );
};

export default SocialsContainer;
