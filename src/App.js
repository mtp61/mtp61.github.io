import './reset.css';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    const projects = {
        EvolutionSim: {
            featured: true,
            title: "EvolutionSimulator"
        }
    };

    return (
        <div className="App">
            <Header />
            <Navbar />
            <About />
            <Projects projects={ projects } />
            <Footer />
        </div>
    );
}

export default App;
