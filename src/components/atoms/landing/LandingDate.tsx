type Props = {
  dateText: string;
};

const LandingDate = ({ dateText }: Props) => {
  return <h3 className="landing-date text-white txt-extrabold">{dateText}</h3>;
};

export default LandingDate;
