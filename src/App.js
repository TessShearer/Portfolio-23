import Intro from './components/Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {

  return (
    <div>
      <main>
        <Intro></Intro>
        <Navbar></Navbar>
        <About></About>
        <Portfolio></Portfolio>
        <Skills></Skills>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
