import About from "@/sections/About";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";

export default function Home() {

  return(
      <>
        <Header />
        <Hero />
        <Intro />
        <About />
        <Footer />
      </>
  );
}