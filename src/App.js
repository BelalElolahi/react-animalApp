import {React,Component} from "react";
import logo from './logo.svg';
import './App.css';
import Header  from "./components/Header";
import Main  from "./components/Main";
import Footer  from "./components/Footer";
import { render } from '@testing-library/react';

class App extends Component {
  render(){
  return (
      <>
      <Header/>
      <Main/>
      <Footer/>
      </>
    )
  
 }
}

export default App;
