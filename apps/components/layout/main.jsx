import Header from '@/layout/header';
import Footer from '@/layout/footer';

function Main(props) {
  return (
    <>
      <Header />
      <main className="container mx-auto my-5">{props.children}</main>
      <Footer />
    </>
  );
}

export default Main;
