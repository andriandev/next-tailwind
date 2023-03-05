import Header from '@/layout/header';
import Footer from '@/layout/footer';

function Main(props) {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-[4.5rem] mb-3 px-3">
        {props.children}
      </main>
      <Footer />
    </>
  );
}

export default Main;
