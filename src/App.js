import React from 'react';
import logo from './logo.svg';
import './App.css';
import wordBank from './wordBank.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: wordBank
    }
  }
  
      // {words.noun.map(word => {
      //       console.log(word)

      //       return ;
      //       (<h2>{word}</h2>)
      //     })}
          
  render() {
    const { words } = this.state
    
    return (
      <div className="App">
        <React.Fragment>
          <h1>Input Component</h1>
          {words.noun.map((word, index) => {
            return (
              <h2 key={index}>{word}</h2>
            )
          })}
      
          
        </React.Fragment>
        
        <React.Fragment>
          <h1>Madlib Sentence Component</h1>
        </React.Fragment>
        
        <React.Fragment>
          <h1>List of Words</h1>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
