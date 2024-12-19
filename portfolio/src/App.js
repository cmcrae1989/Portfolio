import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import './styles/queries.css';
import Work from "./components/Work";

function App() {
  return (
      <div className="main-container">
          <div className="fixed-container">
            <Hero />
          </div>
          <div className="scroll-container">
              <Projects />
              <Skills />
              <Work />
              <ContactForm />
              <Footer />
          </div>
      </div>
      );
}

export default App;
