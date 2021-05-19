import logo from './logo.svg';
import './App.css';
//import recherche.js
import Recherche from './components/Recherche.js';
//import etablissement.js
import Etablissement from './components/Etablissement.js';
import './components/Recherche.css'
import React from 'react';
import {Card, Message} from 'semantic-ui-react';
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
    };
  } ;

  renderResults = () => {
    return this.state.data.map((etablissement) => {
      return(
        <Etablissement
          key={etablissement.properties.id}
          properties={etablissement.properties}
        />
      );
    });
  };

  onEmpty = () =>{
    this.setState({
      data:[],
      error:""
    });
  };
  
  onSearch = async (dpt,type) =>{
    //console.log(dpt,type);
    if(dpt && type){
      try{
        let response = await fetch ("https://etablissements-publics.api.gouv.fr/v3/departements/" + dpt +"/"+ type);
        let data = await response.json();
        console.log(data);
        this.setState({
          data : data.features,
          error : ""
        })
        console.log(this.state.data);
        // data.features.forEach(element =>{
        //   console.log(element.properties.nom);
        //   console.log(element.properties.telephone);
        //   console.log(element.properties.url);
        // })
      } catch(e){
        console.log(e);
        this.setState({
          error : "Erreur lors de la recherche"
        });
      }
    }else{
      this.setState({
        error : "Merci de choisir un département et/ou une administration."
      });
    }
    

  }
  
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ANNUAIRE des établissements publics de l'administration 📖</h1>
          <Recherche onsearch = {this.onSearch} onEmpty = {this.onEmpty}/>
          {this.state.error ? (
          <Message warning>{this.state.error} </Message> ) : undefined }
          {this.state.data ? (
          <Card.Group>{this.renderResults()} </Card.Group> ) : undefined }
        </header>
      </div>
    )
  }

}

export default App;
