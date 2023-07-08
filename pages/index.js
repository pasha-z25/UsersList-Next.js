import Header from "../components/Header";
import Footer from "../components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="py-4">
          <div className="container mx-auto">
            <h1 className="font-bold mb-8">Main page</h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
};

export default Home;