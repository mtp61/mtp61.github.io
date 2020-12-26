import React from 'react';

const facts = [
    'My best worst friend is jy',
    'My worst best friend is danny',
    'I like stir fry',
    'With God all things are possible'
];

var getRandomIndex = (currentIndex) => {
    let randomIndex = Math.floor(Math.random() * (facts.length - 1));
    return randomIndex != currentIndex ? randomIndex : facts.length - 1;
};

class Facts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0  
        };
    };

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentIndex = this.state.index;
            this.setState({ index: getRandomIndex(currentIndex) });
        }, 5000);
    }
    
    componentDidUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        return (
            <div id="facts" className="vsection">
                <div id="facts-container">
                    <h3>Fun Fact:</h3>
                    <p>{ facts[this.state.index] }</p>
                </div>
            </div>
        );
    }
}

export default Facts;
