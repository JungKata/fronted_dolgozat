import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

import Fooldal from './Fooldal';
import Tapasztalat from './Tapasztalat';
import { KapcsolatFelvetel } from './Kapcsolatfelvetel';

class App extends Component{
  render(){
  return (
  <div>
    <Navbar>
      <Container>
        <Link to={'/'}>Főoldal</Link>
        <Link to={'/tapasztalat'}>Szakmai tapasztalat</Link>
        <Link to={'/idopont'}>Időpont foglalás</Link>
      </Container>
    </Navbar>
  


    
    <footer>
      <p>Jung Katalin</p>
    </footer>
    <main>
      <Routes>
        <Route path='/'element={<Fooldal/>}></Route>
        <Route path='/tapasztalat' element={<Tapasztalat/>}></Route>
        <Route path='/idopont' element={<KapcsolatFelvetel/>}></Route>        
      </Routes>
    </main>
  </div>
  );
}
}

export default App;
