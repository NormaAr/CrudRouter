
import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";


import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";




function ProductoLista({ producto, guardarRecargarProductos }) {
  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View  style={styles.section}>
        <Text style={styles.title}>NOMBRE</Text>
        <Text style={styles.subtitle}>{producto.nombrePlatillo}{""}</Text>
        </View>
        <View style={styles.section}>
        <Text style={styles.title}>PRECIO</Text>
        <Text style={styles.subtitle}>${producto.precioPlatillo}</Text>
        </View>
        <View style={styles.section}>
        <Text style={styles.title}>CATEGORIA</Text>
        <Text style={styles.subtitle}>{producto.categoria}</Text>
        </View>
      </Page>
    </Document>
  );
  const eliminarProducto = id => {
    console.log("Eliminando", id);
    //TODO: Eliminar los registros
    Swal.fire({
      title: "¿Estas Seguro?",
      text: "Un Registro eliminado no se puede recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then(async result => {
      if (result.value) {
        try {
          const url = `http://localhost:4000/restaurant/${id}`;
          const resultado = await axios.delete(url);
          if (resultado.status === 200) {
            Swal.fire("Eliminado!", "El Registro se ha eliminado.", "success");
            //Consultar la api nuevamente
            guardarRecargarProductos(true);
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            type: "error",
            title: "Error",
            text: "Hubo un error, vuelva a intentarlo!"
          });
        }
      }
    });
  };
  return (
    <li
      data-categoria={producto.categoria}
      className="list-group-item d-flex justify-content-between
            aling-items-center"
    >
      <p>
        {producto.nombrePlatillo}{" "}
        <span className="font-weight-bold">${producto.precioPlatillo}</span>
      </p>
      <div>
        <Link
          to={`/productos/editar/${producto.id}`}
          className="btn btn-success mr-2"
        >
          Editar
        </Link>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => eliminarProducto(producto.id)}
        >
          Eliminar &times;
        </button>

        <PDFDownloadLink document={<MyDoc/>} fileName="Ejemplo.pdf">
          {({ loading }) => (loading ? "Loading document..." : "Download now!")}

          <button
            type="button"
            className="btn btn-success mr-2"
          >
            PDF
          </button>
        </PDFDownloadLink>
      </div>
    </li>
  );
}


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: "#FFFFFF",

  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 15,
    backgroundColor: '#98999A'
  },
  subtitle: {
    fontSize: 13,
  },
});


export default ProductoLista;