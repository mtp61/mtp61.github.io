import './reset.css';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    const projects = [
        {
            title: "Evolving Neural Networks in Java",
            imageNum: 0,
            info: "todo",
            link: "https://github.com/lakes26/EvolutionSim"
        },
        {
            title: "Information Set Monte-Carlo Tree Search Applied to Gang of Four",
            imageNum: 1,
            info: "todo",
            link: "https://github.com/mtp61/gof_ISMCTS"
        },
        {
            title: "Proximal Policy Optimization Applied to Gang of Four",
            imageNum: 2,
            info: "todo",
            link: "https://github.com/mtp61/gof_PPOalgorithm"
        },
        {
            title: "Power Grid Online",
            imageNum: 3,
            info: "todo",
            link: "https://github.com/mtp61/powergrid-online"
        },
        {
            title: "Image Recognition Neural Network for Objects Relevant to Self-Driving Cars",
            imageNum: 4,
            info: "todo",
            link: "https://github.com/mtp61/ImageClassificationNeuralNet"
        },
        {
            title: "Chaotic Dynamical System Simulator",
            imageNum: 5,
            info: "todo",
            link: "https://github.com/mtp61/chaosSimulator"
        },
        {
            title: "Kingdomino Online",
            imageNum: 6,
            info: "todo",
            link: "https://github.com/mtp61/kingdomino-online"
        },
        {
            title: "One Dimensional Cellular Automata",
            imageNum: 7,
            info: "todo   6270945478114",
            link: "https://github.com/mtp61/OneDimentionalCellularAutomata"
        },
        {
            title: "Line Replacement Fractal Generator",
            imageNum: 8,
            info: "todo",
            link: "https://github.com/mtp61/LineReplacementFractalGenerator"
        }
    ];

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
