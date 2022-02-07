import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class Data extends Component {

  
  state={
  codePays:"",
  data:{}, 
  countries:{}, 
  options:{
    method: 'GET',
    headers: {
      'Accept': 'application/json'
      
    }
  },
  };

  
  componentDidMount= () => {
    //fetch('/covid/dataByCountry?country=France',this.state.options)
    fetch('/covid/todayDataByCountry?country='+this.props.countryName,this.state.options)
      .then(response =>  response.json())
      
      .then(response => {this.setState({data:response});

    
    })
      .catch(err => console.error(err));

      fetch('https://restcountries.com/v2/all',this.state.options)
      .then(response =>  response.json())
      
      .then(response => {console.log(response); 
        this.setState({countries:response});
        this.state.countries.map(country=>{if(country.translations.fr==this.props.countryName || country.translations.es==this.props.countryName) this.setState({codePays:country.alpha2Code});})
      
      })
      .catch(err => console.error(err));

  } 

  render(){
    console.log(this.state);
    console.log(this.props);
  return (
    <>
  
    <div className="container">
      
  <nav className="navbar fixed-top navbar-dark bg-dark" >
  <a className="navbar-brand" href="#">&nbsp;&nbsp;<img src="http://acces.ens-lyon.fr/acces/thematiques/evolution/logiciels/anagene/Icone-Coronavirus.png" height="40px" width="40px"/>&nbsp;&nbsp;<b style={{fontSize:"22px"}}>Evolution des cas Coronavirus dans le monde</b></a>
  </nav>

     <div className="row" style={{marginTop:"130px"}}>
       <h2 style={{marginBottom:"40px"}}>Derniers chiffres du Coronavirus (Covid19) en &nbsp;<img src={'https://countryflagsapi.com/png/'+this.state.codePays} alt="flag" height="20px" width="30px" style={{marginBottom:"4px"}}/> &nbsp;{this.state.data.pays} pour le {this.state.data.date}</h2>
  <div className="col-sm-4">
    <div className="card" style={{backgroundColor: '#FF7F50', textAlign:'center', color:'#FFF'}}>
      <div className="card-body" >
        <h5 className="card-title" style={{fontSize:'27px'}}>Infections</h5>
        <p className="card-text" style={{fontSize:'24px'}}>{this.state.data.infections} cas</p>
       
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card" style={{backgroundColor: '#66CDAA', textAlign:'center', color:'#FFF'}}>
      <div className="card-body">
        <h5 className="card-title" style={{fontSize:'27px'}}>Guérisons</h5>
        <p className="card-text" style={{fontSize:'24px'}}>{this.state.data.guerisons} cas</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card" style={{backgroundColor: '#DC143C', textAlign:'center', color:'#FFF'}}>
      <div className="card-body">
        <h5 className="card-title" style={{fontSize:'27px'}}>Décès</h5>
        <p className="card-text" style={{fontSize:'24px'}}>{this.state.data.deces} cas</p>
      </div>
    </div>
  </div>
</div>
  </div> 
  
   </>
  );
}

}

export default Data;
