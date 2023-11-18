import MyJumbotron from "../components/MyJumbotron";
import MyNav from "../components/MyNav";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import About from "../components/About";
import Portfolio from "./Portfolio";

function HomePage() {
  return (
    <div>
      <MyNav />
      <MyJumbotron />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
