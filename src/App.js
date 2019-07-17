import React, { Component } from 'react';
import './App.css';
import Accoring from './components/According';
import Counter from './components/Couter';

class App extends Component {

  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
    this.state = {
      showCounter : true
    }

  }
  componentDidMount() {
    this.inputElement.current.focus();

    console.log('did mount app')
  }

  disableCounter(){
    this.setState({
      showCounter : false
    }
    )
  }
  render() {
    console.log('render app')
    return (
      <div className="App">
        <Accoring heading="Heading" >
          Hello
      </Accoring>

        <input type="text" ref={this.inputElement} />

        { this.state.showCounter && <Counter />}
        <button onClick={ () => this.disableCounter()}>Disable Counter</button>
      </div>
    )
  };
}

export default App;
