type Props = {
  landingHeadingText: string;
};

const LandingHeading = ({ landingHeadingText }: Props) => {
  return (
    <h2 className="mb-4 text-4xl text-white txt-bold">{landingHeadingText}</h2>
  );
};

export default LandingHeading;
