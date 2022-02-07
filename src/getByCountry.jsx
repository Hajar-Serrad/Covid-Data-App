import React, { Component } from 'react';

import {Link} from "react-router-dom";
import Data from './data';

class GetByCountry extends Component {
   
    state={
        data:[],
        codePays:"", 
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
            fetch('/covid/dataByCountry?country='+this.props.pays,this.state.options)
              .then(response =>  response.json())
              
              .then(response => {console.log(response); this.setState({data:response,loading:1});})
              .catch(err => console.error(err));
        
              fetch('https://restcountries.com/v2/all',this.state.options)
      .then(response =>  response.json())
      
      .then(response => {console.log(response); 
        this.setState({countries:response});
        this.state.countries.map(country=>{if(country.translations.fr==this.props.pays || country.translations.es==this.props.pays) this.setState({codePays:country.alpha2Code});})
      
      })
      .catch(err => console.error(err));
        
          }
        
        
        
          render(){
           console.log(this.state.data.length);
            
          return (
            <>
           <div className="container">
           {this.state.loading==1 && this.state.data.length>0?<>         
    
       
         <Data countryName={this.props.pays}/>
    
 
 
   
        
            <table className="table table-bordered table-hover"  style={{marginTop:"50px"}}>
          <thead>
            <tr className="table-dark">
              <th scope="col">Date</th>
              <th scope="col">Pays</th>
              <th scope="col">Infections (cas)</th>
              <th scope="col">Décès (cas)</th>
              <th scope="col">Guérisons (cas)</th>
             
            </tr>
          </thead>
          <tbody>
            
              {this.state.data.length>0  && this.state.data.map(cas => 
             
               <tr>
                      <td>{cas.date}</td>
                      <td>
                          {this.state.codePays.length>0?<img src={'https://countryflagsapi.com/png/'+this.state.codePays} key="img" alt={"drapeau de/du "+cas.pays} height="20px" width="30px" style={{marginBottom:"4px"}}/>:""}
                          
  &nbsp;&nbsp;
                      {cas.pays}</td>
                           <td>{cas.infections}</td>
                      <td>{cas.deces}</td>
                      <td>{cas.guerisons}</td>
                     
                  </tr>
             )}
            
          </tbody>
        </table>
        <Link to="/" >
             <button type="button" className="btn btn-dark" style={{marginTop:"50px", marginBottom:"30px"}}>Retourner à la page d'accueil</button>
        </Link>
        </>:this.state.loading==1 && this.state.data.length==0?window.location.href="/404":<></>}       
         </div>
           </>
          );
        }
}

export default GetByCountry;
