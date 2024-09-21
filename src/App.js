import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CardsPanel from "./components/CardsPanel";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardsPanel />
    </>
  );
}
