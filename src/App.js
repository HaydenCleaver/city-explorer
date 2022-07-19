import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from 'react';
import Main from './components/Main';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class App extends Component {


render(){
  return (
    <div className='App'>
      <Main/>
    </div>
  );
  }
}

export default App;
