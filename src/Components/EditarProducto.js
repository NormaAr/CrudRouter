import React, {useState, useRef} from "react";
import Error from './Error';

import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

function EditarProducto(props){
    
    //destructuring de props
    const {history,producto, guardarRecargarRegistros}=props;
    
    //Generar los refs
    const nombreRef = useRef('');
    const apellidoPRef = useRef('');
    const apellidoMRef = useRef('');
    const correoRef = useRef('');


    const [error, guardarError] = useState(false);
   

    const editarProducto = async e =>{
        e.preventDefault();

    //Validacion
    const nuevoNombre = nombreRef.current.value,
          nuevoApellidoP = apellidoPRef.current.value,
          nuevoApellidoM = apellidoMRef.current.value,
          nuevoCorreo = correoRef.current.value;

        if(nuevoNombre === '' || nuevoApellidoP === '' || nuevoApellidoM === '' || nuevoCorreo === ''){
            guardarError(true)
            return;
        }
        guardarError(false);

        //Obtener los valores del formulario 
        const editarPlatillo={
            nombre : nuevoNombre,
            apellidoP : nuevoApellidoP,
            apellidoM : nuevoApellidoM,
            correo : nuevoCorreo
        }
        //Enviar el request 
        //const url=`http://localhost:4000/restaurant/${producto.id}`;
        const url=`https://prueba-ap.herokuapp.com/restaurant/${producto.id}`;
        
        try{
            const resultado = await axios.put(url, editarPlatillo);
            if(resultado.status === 200){
                Swal.fire(
                    'Registro Editado!',
                    'El registro se edito correctamente!',
                    'success'
                  )
                  
            }

        }catch(error){
            console.log(error);       
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error, vuelva a intentarlo!'
              })  
        }
        //Redirigir al usuario, consultar Api
        guardarRecargarRegistros(true);
        history.push('/productos');

    }


    return(
        <div className="col-md-8 mx-auto ">
        <h1 className="text-center">Editar Registro</h1>

        {(error) ? <Error mensaje='Todos los campos son obligatorios' /> : null}

        <form
            className="mt-5"
            onSubmit={editarProducto}
        >
            <div className="form-group">
                <label>Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="Nombre" 
                    placeholder="Nombre"
                    maxLength = {20}
                    ref={nombreRef}
                    defaultValue={producto.nombre}
                />
            </div>

            <div className="form-group">
                <label>Apellido Paterno</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="Apellido Paterno" 
                    placeholder="Apellido Paterno"
                    maxLength = {20}
                    ref={apellidoPRef}
                    defaultValue={producto.apellidoP}
                />
                 <div className="form-group">
                    <label>Apellido Materno</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="Apellido Materno" 
                        placeholder="Apellido Materno"
                        maxLength = {20}
                        ref={apellidoMRef}
                        defaultValue={producto.apellidoM}
                    />
                </div>
                <div className="form-group">
                    <label>Correo</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="Correo"
                        placeholder="Correo"
                        maxLength = {30}
                        ref={correoRef}
                        defaultValue={producto.correo}
                    />
                </div>
            </div>
            <input type="submit" className="font-weight-bold text-uppercase mt-5 btn 
            btn-primary btn-block py-3" value="Editar Registro" />
        </form>
    </div>
    )
}

export default withRouter(EditarProducto); 