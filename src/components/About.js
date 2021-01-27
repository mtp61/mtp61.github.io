import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div id="about" className="vsection">
                <div id="about-container">
                    <h2>About Me</h2>
                    <div id="about-content">
                        <div id="description">
                            <p>I'm a sophomore at Harvard University working on a joint concentration in Mathematics and Computer Science. I’m most interested in machine learning and artificial intelligence, which is at the intersection of my two main fields of study. Outside of school, I enjoy the outdoors, playing ultimate frisbee, and board and card games.</p>
                        </div>
                        <div id="info-column">
                            <h4>Relevant Coursework</h4>
                            <p><strong>COMPSCI 61:</strong> Systems Programming and Machine Organization</p>
                            <p><strong>COMPSCI 109A:</strong> Introduction to Data Science</p>
                            <p><strong>COMPSCI 109B:</strong> Advanced Topics in Data Science (Spring 2021)</p>
                            <p><strong>COMPSCI 124:</strong> Data Structures and Algorithims</p>
                            <p><strong>COMPSCI 181:</strong> Machine Learning (Spring 2021)</p>
                            <p><strong>MATH 21A:</strong> Multivariable Calculus</p>
                            <p><strong>MATH 25A:</strong> Theoretical Linear Algebra and Real Analysis I</p>
                            <p><strong>MATH 122:</strong> Algebra I: Theory of Groups and Vector Spaces</p>
                            <p><strong>MATH 123:</strong> Algebra II: Theory of Rings and Fields (Spring 2021)</p>
                            <p><strong>STAT 110:</strong> Introduction to Probability</p>
                            <p><strong>STAT 111:</strong> Introduction to Statistical Inference (Spring 2021)</p>
                        </div>
                    </div>
                </div>            
            </div>
        );
    }
}

export default About;
