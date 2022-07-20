import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react';
import Main from './components/Main';

class App extends Component {


render(){
  return (
    <div className='App'>
      <h1 style = {{marginBottom: '100px'}}>City Explorer</h1>
      <Main className ='Main'/>
    </div>
  );
  }
}

export default App;
