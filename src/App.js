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
            title: "Evolving Neural Nets in Java",
            imageNum: 0,
            info: "filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text",
            link: "a"
        },
        {
            title: "Information Set Monte-Carlo Tree Search for Gang of Four",
            imageNum: 1,
            info: "filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text",
            link: "a"
        },
        {title: "filler", imageNum: 0, info: "filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text", link: "a"},
        {title: "filler", imageNum: 0, info: "filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text", link: "a"},
        {title: "filler", imageNum: 0, info: "filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text", link: "a"},
        {title: "filler", imageNum: 0, info: "filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text", link: "a"}
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
