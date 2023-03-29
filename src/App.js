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
        <Skills></Skills>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <a target="_blank" href="https://icons8.com/icon/bGjmkh3zMHa0/chevron-down" rel="noreferrer">Chevron Down</a> icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
      </main>
    </div>
  );
}

export default App;
