import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import Wrapper from "./components/Wrapper"
import HeroCard from "./components/HeroCard"
import heroes from "./heroes.json"
import Footer from "./components/Footer"
import './App.css';



class App extends Component {

  state = {
    clicked: [],
    list: heroes,
    score: 0,
    bestScore: 0
}


shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])      
)


handleClick = (id) => {
    if (this.state.clicked.includes(id)) {
        this.resetGame();

        
    } else {
      let clickedArr = [...this.state.clicked, id]
      console.log(clickedArr)
      this.setState( {clicked: clickedArr} )
      this.handleIncrement();
      let newArray = this.shuffleArray(this.state.list); 
      this.setState({list: newArray})
      console.log(newArray);
    }
}

handleIncrement = () => {
  if (this.state.score >= this.state.bestScore) {
      this.setState({ score: this.state.score += 1 });
      this.setState({ bestScore: this.state.bestScore += 1 })
  } else {
      this.setState({ score: this.state.score += 1 });
  }
  
};

resetGame = () => {
  this.setState({
    score: 0,
    clicked: []
  })
  //empty clicked heroes array
  //set current score = 0
  //modal saying you lose
}

  render() {
    return (
      <div>
        <Navbar 
        bestScore={this.state.bestScore}
        score={this.state.score}/>
        <Jumbotron />
        <Wrapper>
        {this.state.list.map(hero => (
          <HeroCard
            id={hero.id}
            key={hero.id}
            name={hero.name}
            image={hero.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
      <Footer />

      </div>
    )
  }


}

export default App;



