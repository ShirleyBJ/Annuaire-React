import logo from './logo.svg';
import './App.css';
import Recherche from './components/Recherche.js';
import './components/Recherche.css'
import React from 'react';
//import React, {Component} from 'react';

/*Composant fonctionnel d'App*/
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>ANNUAIRE des établissements publics de l'administration 📖</h1>
//         <Recherche/>
//       </header>
//     </div>
//   );
// }


/*Composant complexe d'App*/
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data : [],
      error : ""
    }
  } 
  
  onSearch = (dpt,type) =>{
    console.log(dpt,type);
  }
  
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ANNUAIRE des établissements publics 📖</h1>
          <Recherche onsearch = {this.onSearch}/>
        </header>
      </div>
    )
  }

}

export default App;
