import React, { Component } from 'react';
import {Link} from "react-router-dom";


class GetError extends Component {
  render() {
    return (
        <div className="container">
        
        <nav className="navbar fixed-top navbar-dark bg-dark" >
          <a className="navbar-brand" href="#">&nbsp;&nbsp;<img src="http://acces.ens-lyon.fr/acces/thematiques/evolution/logiciels/anagene/Icone-Coronavirus.png" height="40px" width="40px"/>&nbsp;&nbsp;<b style={{fontSize:"22px"}}>Evolution des cas Coronavirus dans le monde</b></a>
        </nav>
    <h2 style={{marginTop:"130px"}}>
        Oups... Nous n'arrivons pas à trouver la ressource que vous recherchez!
    </h2>
    <p>
    <b style={{fontSize:"18px"}}>Veuillez vérifier les données que vous avez entrées et réessayer!</b></p>
    <Link to="/" >
             <button type="button" className="btn btn-dark" style={{marginTop:"150px"}}>Retourner à la page d'accueil</button>
        </Link>
    </div>
    );
  }
}

export default GetError;

