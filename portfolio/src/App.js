import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import './styles/queries.css';

function App() {
  return (
      <div>
          <Header />
          <Hero />
          <Projects />
          <Skills />
          <ContactForm />
          <Footer />
      </div>
      );
}

export default App;
