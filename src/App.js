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
            info: "This project simulates the evolution of the traits and behaviors of agents in a simple environment consisting of just agents, food, and walls. The rules of the simulated world are simple; the agents’ energy levels are constantly going down so they must eat food to survive. If an agent is successful and reaches a specified energy threshold, it will asexually reproduce, resulting in a new child with slightly different traits and neural network weights. Each agent has the choice of whether to turn left, turn right, or go straight on each frame of the simulation. The distances of nearby food and walls are calculated using rays cast from the agent and this information is normalized before being fed into the agent’s neural network brain. Over thousands of generations, the agents are able to learn to find food and avoid walls. The simulation is controlled using many, many user-defined parameters that specify everything from the speed at which the simulation runs to the way the agent’s traits and networks are mutated.",
            link: "https://github.com/lakes26/EvolutionSim"
        },
        {
            title: "Information Set Monte-Carlo Tree Search Applied to Gang of Four",
            imageNum: 1,
            info: "In this project, I implemented Information Set Monte-Carlo Tree Search for the card game Gang of Four. The ISMCTS algorithm extends MCTS to imperfect-information games such as Gang of Four. Since SMCTS is an online algorithm and can calculate each move for an arbitrary length of time, evaluating the performance is only possible after choosing how long to run the algorithm. I chose to evaluate ten thousand nodes for each move, which took around five seconds on a modern laptop processor. At this depth, the agent seems to play at a slightly sub-human level. In the future, it would be interesting to investigate the strength of the algorithm with greater depth, or with other tweaks to the algorithm to better fit the game Gang of Four specifically. The Github repos for this project as well as the PPO project include clients that are able to easily interface with the [online version of Gang of Four](https://github.com/mtp61/gof-online) I developed which makes it--somewhat--easy to play against the agent on your local machine or with a mix of human players and agents.",
            link: "https://github.com/mtp61/gof_ISMCTS"
        },
        {
            title: "Proximal Policy Optimization Applied to Gang of Four",
            imageNum: 2,
            info: "In this project, I implemented the Proximal Policy Optimization reinforcement learning algorithm for the card game Gang of Four. PPO is a modern reinforcement learning algorithm developed by OpenAI that performs well on a wide variety of tasks with minimal problem-specific setup and hyperparameter tuning. To create the project I adapted a [similar project](https://github.com/henrycharlesworth/big2_PPOalgorithm) which used the PPO algorithm for the game Big 2, which is very similar to Gang of Four. I was only able to train the network for a limited amount of time on a slow GPU which resulted in a level of play worse than my ISMCTS agent. For more information see the README file in the Gitpage repo.",
            link: "https://github.com/mtp61/gof_PPOalgorithm"
        },
        {
            title: "Power Grid Online",
            imageNum: 3,
            info: "This project implements the board game Powergrid using Node.js enabling real-time play in the browser. The site supports multiple games, 2-6 players, and selecting different regions of the game board. Players can only interact with the game by entering commands in the chat, but the game state is rendered which makes the game relatively easy to play. In its current state, this project is quite buggy to the point of being almost unplayable. A few full games were completed using the site, but many more were abandoned because of problems with the server code. At some point I may come back to the project and completely rewrite the backend and front end and get the site good enough to publish.",
            link: "https://github.com/mtp61/powergrid-online"
        },
        {
            title: "Image Recognition Neural Network for Objects Relevant to Self-Driving Cars",
            imageNum: 4,
            info: "This project implements a deep neural network for the purpose of classifying objects relevant to self-driving cars: stop signs, cars, motorcycles, traffic lights, city buses, and fire hydrants. The feed-forward network and backpropagation algorithm were implemented using numpy. The network was trained and validated using images obtained from the [Common Objects in Context Dataset](https://cocodataset.org/#download) that were manually cropped and labeled. The network ended up with a validation accuracy above 90 percent, although the accuracy across classes was not uniform. This was completed in spring 2018 as an end-of-year project at Saint Paul Academy in collaboration with four other students and with the instruction and materials provided by Max Lundgren, a graduate student studying machine learning and music at the University of Minnesota.",
            link: "https://github.com/mtp61/ImageClassificationNeuralNet"
        },
        {
            title: "Chaotic Dynamical System Simulator",
            imageNum: 5,
            info: "This project implements a GUI for interacting with a chaotic dynamical system. The system modeled is a [physics demonstration](https://www.youtube.com/watch?v=yQeQwwXXa7A&feature=emb_title) involving a swinging arm over a sheet of magnets. The program can display an interactive version of the system as well as generate plots that are very visually appealing. These plots, such as the one used as the project image, are created by starting the simulated arm in a grid of set starting points then running the simulation until the arm stops and recording the stopping point. The ordered pairs of starting points and ending points can then be translated into an image where each pixel’s location corresponds to a starting point for the arm and the color corresponds to the class of ending point which is usually one of the attracting magnets. I worked on this project in the fall of my senior year of high school along with two of my friends so got some practice using git and dividing complex projects among multiple people.",
            link: "https://github.com/mtp61/chaosSimulator"
        },
        {
            title: "Kingdomino Online",
            imageNum: 6,
            info: "In this project, I implemented a client and server for the board game Kingdomino which allows users to play online. Both the client and server are written in python and the client visualization uses pygame. While this wasn’t a very complex project, I got some experience with networking in python and got an end product that works well.",
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
        // {
        //     title: "Amazon Internship",
        //     info: "todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo todo ",
        //     organization: "Amazon",
        //     daterange: "July 2020 - August 2020"
        // },
        {
            title: "Course Assistant for CS 50",
            info: "In the fall semester of 2020 I was a CA for CS 50: Introduction to Computer Science. The primary duty of the job was to hold office hours every week to help students with their work on problem sets and understanding the course material. I enjoyed this a lot and I hope to continue with more teaching of some kind later in 2021.",
            organization: "Harvard University",
            daterange: "September 2020 - December 2020"
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
