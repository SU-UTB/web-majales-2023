type Props = {
  landingHeadingText: string;
  className?: string;
};

const LandingHeading = ({ landingHeadingText, className }: Props) => {
  return (
    <h2 className={`mb-4 text-4xl text-white txt-bold ${className}`}>
      {landingHeadingText}
    </h2>
  );
};

export default LandingHeading;
