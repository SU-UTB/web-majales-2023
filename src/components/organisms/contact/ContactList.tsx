import { contacts } from '../../../data/contacts';
import ContactItem from '../../atoms/contact/ContactItem';

const ContactList = () => {
  return (
    <section id="contact-list" className="py-12 md:py-24">
      <div className="flex flex-wrap items-center justify-center px-8 mx-auto md:w-4/5 md:px-0 md:justify-between">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.name}
            contactName={contact.name}
            contactPos={contact.pos}
            contactMail={contact.mail}
          />
        ))}
      </div>
      <hr className="w-1/5 mx-auto my-12 bg-dark_blu_txt" />
      <div className="text-center info-contact">
        <h6 className="mb-2 uppercase text-pinky txt-bold md:mb-4">
          infolinka
        </h6>
        <a className="txt-normal" href="mailto:su@utb.cz">
          su@utb.cz
        </a>
      </div>
    </section>
  );
};

export default ContactList;
