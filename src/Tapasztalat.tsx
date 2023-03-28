import { Component } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import petrik from './petrik.jpg';

export default class Tapasztalat extends Component{
    render(){
    return<div>
      <h2>Szakmai tapasztalat</h2>
        <div>
        <img className="kep" src={petrik} alt="Petrik"  width={380}/>
          <h3>Probono Bulik</h3>
          <ul>
            <li>Csibeavató, 2021. 08. 31.</li>
            <li>Karácsonyi bál, 2021. 12. 22.</li>
            <li>Farsangi mulatság, 2022. 02. 20.</li>
          </ul>
          <h3>Professzionális bulik</h3>
          <ul>
            <li>Tanárkarácsony, 2021. 12. 20.</li>
            <li>Ballagás, 2022. 04. 30.</li>
          </ul>
        
        </div>
  </div>
}
};