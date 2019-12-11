import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from
 'react-router-dom';
import axios from 'axios';

import Header from './Components/Header';
import Productos from './Components/Productos';
import EditarProducto from './Components/EditarProducto';
import AgregarProducto from './Components/AgregarProducto';
import Producto from './Components/Producto';
import PDF from './Components/PDF';



function App() {


const [ productos, guardarProductos] = useState([]);
const [ recargarProductos, guardarRecargarProductos] = useState(true);

useEffect(() => {
if(recargarProductos) {
  const consultarApi = async () => {
    //Consultar Api de json-server
  
    const resultado = await axios.get('https://github.com/NormaAr/CrudRouter/edit/master/db.json');
  
    guardarProductos(resultado.data);
  }
  consultarApi();
  //Cambiar a false la recarga de los productos
  guardarRecargarProductos(false);
}
}, [recargarProductos]);


  return (
<Router>
<Header />
<main className="container mt-5">
<Switch>
  <Route exact path="/productos"
      render={() => (
        <Productos
         productos={productos}
         guardarRecargarProductos={guardarRecargarProductos}
         />
      )}
   /> 

  <Route exact path="/nuevo-producto" 
  render={() => (
  <AgregarProducto
  guardarRecargarProductos={guardarRecargarProductos}
  />
  )} />
  <Route exact path="/productos/:id" component={Producto} />
  <Route exact path="/PDF" component={PDF} />
  <Route exact path="/productos/editar/:id"
   render={props => {
     //Tomar ID del producto 
    const idProducto = parseInt(props.match.params.id);
    
    //El producto que se pasa al state
    const producto = productos.filter(producto => producto.id ===
      idProducto); 
     return(
       <EditarProducto
         producto={producto[0]}
         guardarRecargarProductos = {guardarRecargarProductos}
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
