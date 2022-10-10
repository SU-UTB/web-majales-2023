import ContactList from '../components/organisms/contact/ContactList';
import GoogleMap from '../components/organisms/contact/GoogleMap';
import Landing from '../components/organisms/contact/Landing';

const Contact = () => {
  return (
    <>
      <Landing />
      <ContactList />
      <GoogleMap />
    </>
  );
};

export default Contact;
