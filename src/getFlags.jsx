import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './data';
import GetAll from './getAll';
class GetFlags extends Component {

  
  state={

  data:{},
  countryName:"France",  
  options:{
    method: 'GET',
    headers: {
      'Accept': 'application/json',

      
    }
  },
  pays:"",
  date:"",
  };

  

handleChangePays=event=> {
  this.setState({pays: event.target.value});
  console.log(this.state.pays.length);
  console.log(this.state.date.length);
 
}

handleChangeDate=event=> {
  this.setState({date: event.target.value});
  console.log(this.state.pays.length);
  console.log(this.state.date.length);
}

handleClick=event=>{
 
  event.preventDefault();
  console.log(event); console.log(this.state.pays);console.log(this.state.date);
  if(this.state.pays.length>0 && this.state.date.length==0) 
  window.location.href="/covid/byCountry/"+this.state.pays;
  else if(this.state.pays.length==0 && this.state.date.length>0) 
  window.location.href="/covid/byDate/"+this.state.date;
  //console.log(this.state.date);
  else if(this.state.pays.length>0 && this.state.date.length>0) 
  window.location.href="/covid/"+this.state.pays+"/"+this.state.date;
 //console.log(this.state.date+"--------"+this.state.pays);
 else
 console.log("HEEEEEEEEELLOOOOOOOOOO");
}


  render(){
   
   
  return (
    <div className="container">{this.state.countryName.length>0  &&
  <Data countryName={this.state.countryName}/>
 
   }
   <div className="row" style={{marginTop:"60px"}}>
     <div className="col-sm-5">
     <div className="input-group" style={{marginLeft: "100px", height:"45px", width:"350px"}}>
  <input type="search" className="form-control rounded" placeholder="Entrez un pays..." aria-label="Search" aria-describedby="search-addon" value={this.state.pays} onChange={this.handleChangePays}/>
  
</div>
     </div>
     <div className="col-sm-2"></div>
     <div className="col-sm-5">
     <div className="input-group" style={{height:"45px", width:"350px"}}>
  <input type="date" className="form-control rounded" placeholder="Entrez une date..." aria-label="Search" aria-describedby="search-addon" value={this.state.date} onChange={this.handleChangeDate}/>
 
</div>
     </div>
   </div>
   <div className="row" style={{marginTop:"35px", marginBottom:"40px"}}>
   <div className="col-sm-5"></div>
     <div className="col-sm-5">
   <button type="button" className="btn btn-dark btn-lg" style={{textAlign:'center'}} onClick={this.handleClick}><b>Chercher</b></button>
   </div>
   <div className="col-sm-2"></div>
   </div>
    <GetAll/>
  
   
 </div>
  );
}

}
export default GetFlags;
