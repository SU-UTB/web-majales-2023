type Props = {
  landingHeadingText: string;
};

const LandingHeading = ({ landingHeadingText }: Props) => {
  return (
    <h2 className="text-4xl txt-bold mb-8 {$$props.class}">
      {landingHeadingText}
    </h2>
  );
};

export default LandingHeading;
