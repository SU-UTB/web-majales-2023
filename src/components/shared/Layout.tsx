import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
