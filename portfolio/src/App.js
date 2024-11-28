import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "./components/ContactForm";

function App() {
  return (
      <div>
          <Header />
          <Hero />
          <ContactForm />
      </div>
      );
}

export default App;
