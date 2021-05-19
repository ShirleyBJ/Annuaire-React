import React,{Component} from 'react';
import {Button,Select} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Recherche extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dpt : "",
            type : ""
        }
    }

    onDptChange = (e,data) => {
        console.log(data)
        this.setState({dpt : data.value});
    }

    onTypeChange = (e,data) => {
        console.log(data)
        this.setState({type : data.value});
    }
    
    render(){
        console.log(this.state);
        const optionsDpt = [
            {key: '60', value: '60', text: 'Oise'},
            {key: '02', value: '02', text: 'Aisne'},
            {key: '80', value: '80', text: 'Somme'},
            {key: '93', value: '93', text: 'Seine-St-Denis'},
            {key: '97', value: '97', text: 'Guadeloupe'}
        ];
        const optionsType = [
            {key: 'cio', value: 'cio', text: 'Centre d’information et d’orientation (CIO)'},
            {key: 'cr', value: 'cr', text: 'Conseil régional'},
            {key: 'cpam', value: 'cpam', text: 'Caisse primaire d’assurance maladie (CPAM)'},
            {key: 'caf', value: 'caf', text: 'Caisse d’allocations familiales (CAF)'},
            {key: 'maison_arret', value: 'maison_arret', text: 'Maison d\'arrêt'},
        ];
        return(
            <div className="recherche">
                <div className="select__style">
                    <Select placeholder= 'Choisissez un département' options= {optionsDpt} onChange ={this.onDptChange}/>
                    <Select placeholder= 'Choisissez une administration' options= {optionsType} onChange ={this.onTypeChange}/>
                </div>
                <div className="btn__style">
                    <Button primary onClick = {() => this.props.onsearch(this.state.dpt,this.state.type)}>Lancer la recherche</Button>
                    <Button secondary>Effacer la recherche</Button>
                </div>
            </div>
        )
    }

}

export default Recherche;