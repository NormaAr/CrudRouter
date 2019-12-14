
import React, {useState} from "react";
import Error from './Error';

import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function AgregarRegistro({history, guardarRecargarRegistros}){

    //state
    const [nombre, guardarNombre] = useState('');
    const [apellidoP, guardarapellidoP] = useState('');
    const [apellidoM, guardarapellidoM] = useState('');
    const [correo, guardarCorreo] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [error, guardarError] = useState(false);

    const agregarRegistro = async e => {
        e.preventDefault();

        if(nombre ==='' || apellidoP === '' || apellidoM === '' || correo === ''|| fecha === ''){
            guardarError(true);
            return;
        }

            guardarError(false);

            //Crear el nuevo producto
            try{
                const resultado = await axios.post('https://prueba-ap.herokuapp.com/restaurant', {
                nombre,
                apellidoP,
                apellidoM,
                correo,
                fecha
                });

                if(resultado.status === 201){
                    Swal.fire(
                        'Registro Creado!',
                        'El registro se creo correctamente!',
                        'success'
                      )
                      //const resultado = await axios.get('http://localhost:4000/restaurant');
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
            history.push('/productos');
            guardarRecargarRegistros(true);
    }

    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Agregar Nuevo Registro</h1>

            {(error) ? <Error mensaje='Todos los campos son obligatorios' /> : null}
            <form
                className="mt-5"
                onSubmit={agregarRegistro}
            >
                <div className="form-group">
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="Nombre" 
                        pattern="[A-Z,a-z]{2,15}"
                        title="El nombre debe de iniciar con letra mayúscula ."
                        //placeholder="Nombre"
                        maxLength = {20}
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Apellido Paterno</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="Apellido Paterno" 
                        pattern="[A-Z,a-z]{2,15}"
                        title="El apellido paterno debe de iniciar con letra mayúscula."
                        //placeholder="Apellido Paterno"
                        maxLength = {20}
                        onChange={e => guardarapellidoP(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Apellido Materno</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="Apellido Materno" 
                        pattern="[A-Z,a-z]{2,15}"
                        title="El apellido materno debe de iniciar con letra mayúscula."
                        //placeholder="Apellido M"
                        maxLength = {20}
                        onChange={e => guardarapellidoM(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Correo</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name="correo"
                        //placeholder="ejemplo@gmail.com"
                        maxLength = {30}
                        onChange={e => guardarCorreo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Fecha Nacimiento</label>
                    <input 
                        type="date" 
                        name="trip-start"
                        onChange={e => guardarFecha(e.target.value)}
                    />
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Registro" />
            </form>
        </div>
    )
}

export default withRouter (AgregarRegistro); 