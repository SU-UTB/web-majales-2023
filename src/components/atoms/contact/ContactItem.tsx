type Props = {
  contactName: string;
  contactPos: string;
  contactMail: string;
};

const ContactItem = ({ contactName, contactPos, contactMail }: Props) => {
  return (
    // TODO: props class for contact-item
    <div className="contact-item my-6 mx-4 text-center">
      <div className="mx-auto contact-desc">
        <h6 className="text-pinky uppercase txt-bold mb-2 md:mb-4">
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
