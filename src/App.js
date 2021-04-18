import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
class App extends Component{
  state={
    text:""
  }
  handleText=e=>{
    this.setState({
      text:e.target.value
    })
  }
  handleSubmit=e=>{
    let messageRef=fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.text);
    this.setState({
      text:""
    })
  }


render() {
  return (
    <div className="App">
      <header className="App-header">
        <label for="name">Enter something...</label>
      <input type="text" onChange={this.handleText} id="txtName"/>
      <br />
      <button id="btnSave" onClick={this.handleSubmit}>Save</button>
      </header>
    </div>
  );
}
}

export default App;
