import "./App.css";
import Navbar from "./navbar";
import Hero from "./hero";
import About from "./about";
import Projek from "./projek";

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
      <Projek/>
    </div>
  );
}

export default App;
