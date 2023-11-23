import React from 'react';
import Dashboad from './Components/dashboad/Dashboad';
import './App.css';
// import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import NewsManager from './Components/NewsManager';

class App extends React.Component{
  render(){

    return <div className = 'main-content' >
      <NewsManager />
    </div>
   
  }
}
export default App;
