import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from
 'react-router-dom';
import axios from 'axios';

import Header from './Components/Header';
import Productos from './Components/Productos';
import EditarProducto from './Components/EditarProducto';
import AgregarProducto from './Components/AgregarProducto';
import Producto from './Components/Producto';



function App() {


const [ productos, guardarProductos] = useState([]);
const [ recargarProductos, guardarRecargarRegistros] = useState(true);

useEffect(() => {
if(recargarProductos) {
  const consultarApi = async () => {
    //Consultar Api de json-server
    //const resultado = await axios.get('http://localhost:4000/restaurant');
    const resultado = await axios.get('https://prueba-ap.herokuapp.com/restaurant');
    guardarProductos(resultado.data);
  }
  consultarApi();
  //Cambiar a false la recarga de los productos
  guardarRecargarRegistros(true);
}
}, [recargarProductos]);


  return (
<Router>
<Header />
<main className="container mt-5">
<Switch>
  <Route exact path="/registros"
      render={() => (
        <Productos
         productos={productos}
         guardarRecargarRegistros={guardarRecargarRegistros}
         />
      )}
   /> 

  <Route exact path="/nuevo-registro" 
  render={() => (
  <AgregarProducto
  guardarRecargarRegistros={guardarRecargarRegistros}
  />
  )} />
  <Route exact path="/registros/:id" component={Producto} />
  <Route exact path="/registros/editar/:id"
   render={props => {
     //Tomar ID del producto 
    const idProducto = parseInt(props.match.params.id);
    
    //El producto que se pasa al state
    const producto = productos.filter(producto => producto.id ===
      idProducto); 
     return(
       <EditarProducto
         producto={producto[0]}
         guardarRecargarRegistros = {guardarRecargarRegistros}
       />
     )
   }} />
</Switch>
</main>
<p className = "mt-4 p2 text-center">Todos los Derechos Reservados</p>
</Router>
  );
}

export default App;
