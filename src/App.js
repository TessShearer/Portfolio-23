import Intro from './components/Intro';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';

function App() {

  return (
    <div>
      <main>
        <Intro></Intro>
        <Navbar></Navbar>
        <About></About>
      </main>
    </div>
  );
}

export default App;
