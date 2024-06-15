import "./App.css";
import Navbar from "./navbar";
import Hero from "./hero";

function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar />
      </header>
      <main className="container mx-auto mt-10">
        <Hero/>
        {/* <section id="about" className="mt-10">
          <h1 className="text-3xl font-bold">About</h1>
          <p>Learn more about us.</p>
        </section>
        <section id="services" className="mt-10">
          <h1 className="text-3xl font-bold">Services</h1>
          <p>Discover our services.</p>
        </section>
        <section id="contact" className="mt-10">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p>Get in touch with us.</p>
        </section> */}
      </main>
    </div>
  );
}

export default App;
