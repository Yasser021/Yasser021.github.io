import "./App.css";
import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Projek from "./projek";
import Design from "./design";
import Tech from "./tech";

function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar />
      </header>
      <main className="container mx-auto mt-10 py-10">
        <Hero />
      </main>
      <About />
      <Projek />
      <Design />
      <Tech />
    </div>
  );
}

export default App;
