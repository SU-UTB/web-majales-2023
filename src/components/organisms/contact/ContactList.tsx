import ContactItem from '../../atoms/contact/ContactItem';

const ContactList = () => {
  const contacts = [
    {
      name: 'LEONA VYHNÁLKOVÁ',
      pos: 'manažerka projektu',
      mail: 'vyhnalkova@sutb.cz',
    },
    {
      name: 'Adam Utíkal',
      pos: 'statutární zástupce',
      mail: 'utikal@sutb.cz',
    },
    {
      name: 'Rastislav Škojec',
      pos: 'koordinátor spolupráce',
      mail: 'skojec@sutb.cz',
    },
    {
      name: 'martin šálek',
      pos: 'vedoucí produkce',
      mail: 'martin.salek@sutb.cz',
    },
    {
      name: 'adéla pokorná',
      pos: 'koordinátorka účinkujících',
      mail: 'pokorna@sutb.cz',
    },
    {
      name: 'MICHAELA FILIPCOVÁ',
      pos: 'public relations',
      mail: 'filipcova@sutb.cz',
    },
  ];

  return (
    <section id="contact-list" className="py-12 md:py-24">
      <div className="md:w-4/5 mx-auto px-8 md:px-0 flex justify-center md:justify-between items-center flex-wrap">
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
      <div className="info-contact text-center">
        <h6 className="text-pinky uppercase txt-bold mb-2 md:mb-4">
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
