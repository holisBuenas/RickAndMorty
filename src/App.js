
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './App.css';
import Buscador from './components/Buscador';
import ListCards from './components/ListCards';
import Paginacion from './components/Paginacion';

function App() {
  const url = "https://rickandmortyapi.com/api/character?page=1"
  const initialState = {
  id: 1,
  title: '...',
  body: '...',
  userId: 1
}

  const [pagina,setPagina] = useState([initialState])

  const [busqueda,setBusqueda] = useState({})

  
  // const manejadorBusqueda = async (event) =>{
  //     event.preventDefault();
  //     const nombre = String(event.target.personajeNombre.value)
  //       fetch("https://rickandmortyapi.com/api/character/?name="+nombre)
  //       .then(res => res.json)
  //       .then(data => setBusqueda({data}) )
        
  // }

  useEffect(()=>{
    fetch(url+"?page=1")
    .then(res => res.json())
    .then(data => setPagina(data))
    
  },[])


  return (
    <div className="App">
      <Paginacion
      setPagina= {setPagina}
      pagina = {pagina}

      
      >

      </Paginacion>
      <Buscador
      setBusqueda = {setBusqueda}
      busqueda = {busqueda}
      ></Buscador>
      <ListCards
      busqueda={busqueda}
      pagina={pagina}
      ></ListCards>
      <Paginacion setPagina= {setPagina}
      pagina = {pagina} ></Paginacion>
    </div>
  );
}

export default App;
