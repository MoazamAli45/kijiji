import "../layout/layout.css";
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import Hero from "../Hero";

export const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      {/* <LocationSection /> */}
      <Hero />
      <Footer />
    </>
  );
};
