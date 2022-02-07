import React, { Component } from 'react';
import {Link} from "react-router-dom";


class GetByDate extends Component {
  
    state={
        data:[],
          pays:"", 
          countries:[], 
          options:{
            method: 'GET',
            headers: {
              'Accept': 'application/json'
              
            }
          },
          loading:0,
          
        
          };
        
          
        
          
          
          componentDidMount= () => {
            fetch('/covid/dataByDate?date='+this.props.date,this.state.options)
              .then(response =>  response.json())
              
              .then(response => {console.log(response.length); this.setState({data:response,loading:1}); })
              .catch(err => console.error(err));
        
              fetch('https://restcountries.com/v2/all',this.state.options)
              .then(response =>  response.json())
              
              .then(response => {console.log(response); 
                this.setState({countries:response});})
              .catch(err => console.error(err));
        
          }
        
        
        
          render(){
            let pays="";
            
          return (
            <div className="container">
              <nav className="navbar fixed-top navbar-dark bg-dark" >
              <a className="navbar-brand" href="#">&nbsp;&nbsp;<img src="http://acces.ens-lyon.fr/acces/thematiques/evolution/logiciels/anagene/Icone-Coronavirus.png" height="40px" width="40px"/>&nbsp;&nbsp;<b style={{fontSize:"22px"}}>Evolution des cas Coronavirus dans le monde</b></a>
  </nav>
{this.state.loading==1 && this.state.data.length>0?<>
      <h2 style={{marginTop:"120px",marginBottom:"40px"}}>Derniers chiffres du Coronavirus (Covid19) dans le monde pour le {this.props.date}</h2>
  
        
            <table className="table table-bordered table-hover"  style={{marginTop:"50px"}}>
          <thead>
            <tr className="table-dark">
              <th scope="col">Date</th>
              <th scope="col">Pays</th>
              <th scope="col">Infections (cas)</th>
              <th scope="col">Décès (cas)</th>
              <th scope="col">Guérisons (cas)</th>
              <th scope="col">Taux d'infections (%)</th>
              <th scope="col">Taux de décès (%)</th>
              <th scope="col">Taux de guérisons (%)</th>
            </tr>
          </thead>
          <tbody>
            
              {this.state.countries.length==250  && this.state.data.map(cas => 
             
               <tr>
                      <td>{cas.date}</td>
                      <td>
                         
                           {this.state.countries.map(country=> 
                             {if(country.translations.fr==cas.pays || country.translations.es==cas.pays)
                              //if second part starts with '(' so country.name.split(" ")[0]
                                pays=country.alpha2Code;
                              // country.name.split(" ")[1]?(country.name.split(" ")[1].startsWith("(")?country.name.split(" ")[0]:country.name.split(" ")[0].endsWith(",")?country.name.split(" ")[0].split(",")[0]:country.name):country.name;
                                    
                             })} 
                                  {pays.length>0?<img src={'https://countryflagsapi.com/png/'+pays} key="img" alt={"drapeau de/du "+cas.pays} height="20px" width="30px" style={{marginBottom:"4px"}}/>:""}
          
                      &nbsp;&nbsp;<Link to={"/covid/byCountry/"+cas.pays} style={{ textDecoration: 'none' }}>{cas.pays}</Link></td>
                           <td>{cas.infections}</td>
                      <td>{cas.deces}</td>
                      <td>{cas.guerisons}</td>
                      <td>{cas.tauxInfections}</td>
                      <td>{cas.tauxDeces}</td>
                      <td>{cas.tauxGuerisons}</td>
                  </tr>
             )}
            
          </tbody>
        </table>
        <Link to="/" >
             <button type="button" className="btn btn-dark" style={{marginTop:"50px", marginBottom:"30px"}}>Retourner à la page d'accueil</button>
        </Link>
       
      </>:this.state.loading==1 && this.state.data.length==0?window.location.href="/404":<></>}       
       </div>   );  
        }
}

export default GetByDate;
