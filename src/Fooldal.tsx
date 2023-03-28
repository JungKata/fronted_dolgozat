import { Component, ReactNode } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import dj from './dj.jpg';

export default class Fooldal extends Component{
    render() {
    return<div>
  
    <div>
      <h1>Üdvözöllek DJ Petrik weboldalán!</h1>
    </div>

    <div>
      <h3>Válassz a fenti lehetőségek közül!</h3>
    </div>

    <div>
      <img src={dj} alt="DJ"  width={380}/>
    </div>



    </div>
        
    }
}