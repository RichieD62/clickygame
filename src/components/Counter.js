//CURRENTLY NOT IN USE

import React from "react";

class Counter extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        score: 0,
        bestScore: 0
    };

    // handleIncrement increments this.state.count by 1
    handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ score: this.state.count + 1 });
    };

    handleBestScoreIncrement= () => {
        if (this.state.score = this.state.bestScore) {
            this.setState({ bestScore: this.state.bestScore + 1})
        }
    }

    // The render method returns the JSX that should be rendered
    render() {
        return (
            <span class="navbar-brand mb-0 h1 text-right">Score: {this.state.score} | Top Score: {this.state.bestScore}</span>
            
        );
    }
}

export default Counter;


{/* <div className="card-body">
                <p className="card-text">Click Count: {this.state.count}</p>
                <button className="btn btn-primary" onClick={this.handleIncrement}>
                    Increment
            </button>
            </div> */}
