// import './App.css';
// import Hero from "./components/Hero";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ContactForm from "./components/ContactForm";
// import Projects from "./components/Projects";
// import Footer from "./components/Footer";
// import Skills from "./components/Skills";
// import './styles/queries.css';
// import Work from "./components/Work";
//
// function App() {
//   return (
//       <div className="main-container">
//           <div className="fixed-container">
//             <Hero />
//           </div>
//           <div className="scroll-container">
//               <Projects />
//               <Skills />
//               <Work />
//               <ContactForm />
//               <Footer />
//           </div>
//       </div>
//       );
// }
//
// export default App;


// src/App.js

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Work from './components/Work';
import Header from './components/Header'; // Import the header

function App() {
    return (
        <div className="main-container">
            {/*<Header />*/}

            <div className="fixed-container">
                <section id="hero">
                    <Hero />
                </section>
            </div>

            <div className="scroll-container">
                <section id="projects">
                    <Projects />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="work">
                    <Work />
                </section>
                <section id="contact">
                    <ContactForm />
                </section>
                <Footer />
            </div>
        </div>
    );
}

export default App;
