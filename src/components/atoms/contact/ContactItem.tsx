type Props = {
  contactName: string;
  contactPos: string;
  contactMail: string;
};

const ContactItem = ({ contactName, contactPos, contactMail }: Props) => {
  return (
    // TODO: props class for contact-item
    <div className="mx-4 my-6 text-center contact-item">
      <div className="mx-auto contact-desc">
        <h6 className="mb-2 uppercase text-pinky txt-bold md:mb-4">
          {contactName}
        </h6>
        <p className="manager-position">{contactPos}</p>
        <a className="txt-normal" href={`mailto:${contactMail}`}>
          {contactMail}
        </a>
      </div>
    </div>
  );
};

export default ContactItem;
