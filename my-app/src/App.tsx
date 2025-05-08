import "./App.css";
import MyNavbar from "./components/Navbar";
import FooterText from "./components/Footer";
import { AboutMe } from "./components/AboutMe";
import MyModules from "./components/Modules";
import { Projects } from "./components/Projects";
import { ContactSection } from "./components/ContactMe";

function App() {
  return (
    <div className="MyApp">
      <MyNavbar />
      <AboutMe />
      <MyModules />
      <Projects />
      <ContactSection />
      <FooterText />
    </div>
  );
}

export default App;
