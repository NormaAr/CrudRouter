
import React, {useState} from "react";
import Error from './Error';

import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function AgregarProducto({history, guardarRecargarProductos}){


    //state
    const [nombrePlatillo, guardarNombre] = useState('');
    const [precioPlatillo, guardarPrecio] = useState('');
    const [categoria, guardarCategoria] = useState('');
    const [error, guardarError] = useState(false);

    const leerValorRadio = e => {
        guardarCategoria(e.target.value);
    }

    const agregarProducto = async e => {
        e.preventDefault();

        if(nombrePlatillo ==='' || precioPlatillo === '' || categoria === ''){
            guardarError(true);
            return;
        }

            guardarError(false);

            //Crear el nuevo producto
            try{
                const resultado = await axios.post('https://prueba-ap.herokuapp.com/restaurant', {
                nombrePlatillo,
                precioPlatillo,
                categoria
                });

                if(resultado.status === 201){
                    Swal.fire(
                        'Registro Creado!',
                        'El registro se creo correctamente!',
                        'success'
                      )
                      const resultado = await axios.get('https://prueba-ap.herokuapp.com/restaurant');
                }

            }catch(error){
                console.log(error);
                Swal.fire({
                    type: 'error',
                    title: 'Error',
                    text: 'Hubo un error, vuelva a intentarlo!'
                  })
            }
            //Redirigir al usuario a productos
            guardarRecargarProductos(true);
            history.push('/productos');
    }

    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Agregar Nuevo Registro</h1>

            {(error) ? <Error mensaje='Todos los campos son obligatorios' /> : null}

            <form
                className="mt-5"
                onSubmit={agregarProducto}
            >
                <div className="form-group">
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Nombre"
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Apellido Paterno</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Apellido Paterno"
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Apellido Materno</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nombre" 
                        placeholder="Apellido Materno"
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Correo</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="Correo" 
                        placeholder="Correo"
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Fecha Nacimiento</label>
                    <input 
                        type="number" 
            aatill      className="form-control" 
                        name="precio"
                        placeholder="Fecha"
                        onChange={e => guardarPrecio(e.target.value)}
                    />
                </div>

                <legend className="text-center">Sexo:</legend>
                <div className="text-center">
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="Masculino"
                        onChange={leerValorRadio}
                    />
                    <label className="form-check-label">
                        Masculino
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="Femenino"
                        onChange={leerValorRadio}
                    />
                    <label className="form-check-label">
                        Femenino
                    </label>
                </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Registro" />
            </form>
        </div>
    )
}

export default withRouter (AgregarProducto); 