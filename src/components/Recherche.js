import React,{Component} from 'react';
import {Button,Select} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Recherche extends React.Component{
    constructor(props){
        super(props);
    }render(){
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
            {key: 'mairie_com', value: 'mairie_com', text: 'Mairie des collectivités d\'outre-mer'},
            {key: 'maison_arret', value: 'maison_arret', text: 'Maison d\'arrêt'},
        ];
        return(
            <div className="recherche">
                <Select placeholder= 'Choisissez un département' options= {optionsDpt} />
                <Select placeholder= 'Choisissez une administration' options= {optionsType} />
                <Button primary>Lancer la recherche</Button>
                <Button secondary>Effacer la recherche</Button>
            </div>
        )
    }
}

export default Recherche;