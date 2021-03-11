import React, { Component } from 'react';
import Plan from './svg.js';
import Keyboard from "react-simple-keyboard";
import 'react-simple-keyboard/build/css/index.css';


class List extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      plan: Plan,
      companies: [],
      notfound:false,
      search: false,
      keywords : [],
      list_kw : false,
      card : false,
      keyboard : false,
      company : {}
    };
  this.kwords()
  }


  changeColor(idr) {
    var elem = document.getElementById(idr);
    if(elem != null){
    if(elem.style.fill != "pink"){
    elem.style.fill= "pink";}
    else {
      elem.style.fill= "red"}
    }
    }

  inputkeyword(name){
    this.setState({keyboard: false })
    if(name!= ""){
      if(this.state.companies.length == 0) {
        this.setState({
          notfound: true});}
    fetch(`http://localhost:3001/companies/list/search/${name}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ companies: responseJson.data });
          if(this.state.companies.length != 0) {
        this.setState({ notfound: false, search:true});}
        else {
          this.setState({ notfound: true, search: false});}
      });
    }
  };


  kwords(){
    fetch("http://localhost:3001/companies/keywords")
    .then(response => response.json())
    .then(responseJson => {
      this.setState({ keywords: responseJson.data });
      this.setState({ list_kw: true });
    });
}

showCard(id){
  this.changeColor(id);
  fetch(`http://localhost:3001/companies/list/${id}`)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({ company: responseJson.data,
        card: true,
        list_kw : false,
        search : false, });
    });
};

backfunc(id){
  this.changeColor(id);
  this.setState({ card: false,
    list_kw : true,
    search : true, })
}

onChange(input) {
  document.getElementById("rechercher").value = input;
  console.log("Input changed", input);
}

  render(){
    return <div className="vw-100 vh-100">
      <div className="w-40 h-40 row justify-content-center">
      <Plan/>
      </div>
    <div className = "row justify-content-center">
    <input 
    type="text"
    id="rechercher"
    className="input"
    placeholder="Search..."
    onClick={() => this.setState({keyboard: true})} 
      />
    <div onClick={() => this.inputkeyword(document.getElementById("rechercher").value)} className="btn btn-primary">
    Search
    </div>
    </div>
    <div className = "row justify-content-center text-center">
    {this.state.list_kw ? (
      <div className="list">
        <h3> Mots-clés</h3>
        {this.state.keywords.map(keywords => (
          <li
          onClick={() => (document.getElementById("rechercher").value = keywords, this.inputkeyword(keywords))}
          className="btn btn-outline-success"
          >
          {keywords}
          </li>
      ))}
      </div>
    ): null}
    </div>
<div className = "row justify-content-center">
  {this.state.notfound ? (
    <h5> Aucun résultat </h5>
  ): null}
  {this.state.search ? (
    <div className="list-group">
      <h5> Résultat de recherche pour {document.getElementById("rechercher").value} </h5>
      {this.state.companies.map(companies => (
        <li
        onClick={() => this.showCard(companies._id)}
        className="list-group-item list-group-item-action"
        >
        {companies.name}
        </li>
      ))}
   </div>
  ): null}
  {this.state.card ? (
  <div className="card" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">{this.state.company.name}</h5>
      <div className="list-group">
      {this.state.company.keywords.map(kw =>(
        <li>{kw}</li>
      )
      )}
      </div>
      <div onClick={() => this.backfunc(this.state.company._id)} className="btn btn-primary">
        Back
      </div>
    </div>
  </div>
  ) :null}
 </div>
 {this.state.keyboard ? (
 <div className = "text-center" style={{position: "fixed", bottom : "0", margin:"auto", left:"0", width: "100%", height:"auto"}}> 
   <Keyboard className="keyyboard" onChange={input => this.onChange(input)} />
 </div>
  ): null}
 </div>
  }
}


export default List;