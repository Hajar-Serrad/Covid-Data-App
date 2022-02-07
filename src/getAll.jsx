import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './pagination';
import {Link} from "react-router-dom";



class GetAll extends Component {

  
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
  currentPage:1,
  dataPerPage:160,

  };

  

  
  
  componentDidMount= () => {
    fetch('/covid/data',this.state.options)
      .then(response =>  response.json())
      
      .then(response => {console.log(response); this.setState({data:response});})
      .catch(err => console.error(err));

      fetch('https://restcountries.com/v2/all',this.state.options)
      .then(response =>  response.json())
      
      .then(response => {console.log(response); 
        this.setState({countries:response});})
      .catch(err => console.error(err));

  }

paginate = pageNumber => this.setState({currentPage:pageNumber});


  render(){
    let pays="";
    const indexOfLastPost = this.state.currentPage * this.state.dataPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.dataPerPage;
    const currentData = this.state.data.slice(indexOfFirstPost, indexOfLastPost);
    
  return (
    <>
      

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
    
      {this.state.countries.length==250  && currentData.map(cas => 
     
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
{this.state.countries.length==250  && 
<Pagination
        dataPerPage={this.state.dataPerPage}
        totalData={this.state.data.length}
        paginate={this.paginate}
/>

 }

   </>
  );
}

}

export default GetAll;
