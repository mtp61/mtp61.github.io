import './reset.css';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
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
            // image: colors 3, above 3, rule 6270945478114
            info: "This program allows users to view the behavior of one-dimensional cellular automata. The program supports both [elementary cellular automata](https://mathworld.wolfram.com/ElementaryCellularAutomaton.html) as well as an extension allowing for an arbitrary number of states and neighbors. Like the fractal generator, this program was written in python and uses pygame for the graphics.",
            link: "https://github.com/mtp61/OneDimentionalCellularAutomata"
        },
        {
            title: "Line Replacement Fractal Generator",
            imageNum: 8,
            info: "This python program generates fractals based on lines drawn by the user. The user first draws a series of line segments, then can repeatedly press the enter key which replaces each line in the drawing with a scaled and rotated version of the original drawing, creating a fractal. Experimenting with different starting lines can result in lots of interesting behavior.",
            link: "https://github.com/mtp61/LineReplacementFractalGenerator"
        }
    ];

    const experience = [
        {
            title: "UHG Internship",
            info: "todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo"
        },
        {
            title: "CS 50 Course Assistant",
            info: "todo"
        }
    ];

    return (
        <div className="App">
            <Header />
            <Navbar />
            <About />
            <Experience experience={ experience } />
            <Projects projects={ projects } />
            <Footer />
        </div>
    );
}

export default App;
