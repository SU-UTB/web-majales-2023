import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="container px-4 mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
