type Props = {
  landingHeadingText: string;
};

const LandingHeading = ({ landingHeadingText }: Props) => {
  return (
    <h2 className="text-4xl txt-bold mb-4 text-white">{landingHeadingText}</h2>
  );
};

export default LandingHeading;
