import MajalesSocials from './MajalesSocials';
import StudentUnionSocials from './StudentUnionSocials';

const SocialsContainer = () => {
  return (
    <div className="soc-container flex flex-col md:flex-row md:space-x-8 mb-6">
      <MajalesSocials />
      <StudentUnionSocials />
    </div>
  );
};

export default SocialsContainer;
