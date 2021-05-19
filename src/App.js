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
  
  onSearch = async (dpt,type) =>{
    //console.log(dpt,type);
    try{
      var ip = await fetch ("https://etablissements-publics.api.gouv.fr/v3/departements/" + dpt +"/"+ type);
      var data = await ip.json();
      console.log(data);
    } catch(e){
      console.log(e);
    }
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
