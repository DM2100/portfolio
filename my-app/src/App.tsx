import "./App.css";
import AnimatedHeading from "./components/Heading";
import AboutMe from "./components/AboutMe";
import MyNavbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import FooterText from "./components/Footer";
import ContactMe from "./components/ContactMe";
import MyProjects from "./components/Project";

function App() {
  return (
    <div className="MyApp">
      <MyNavbar />
      {/* <AnimatedHeading /> */}
      <AboutMe />
      <MyCard />
      <MyProjects />
      <ContactMe />
      <FooterText />
    </div>
  );
}

export default App;
