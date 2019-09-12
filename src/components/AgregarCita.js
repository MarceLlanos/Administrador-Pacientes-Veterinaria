import React, { Component } from 'react';
//Libreria que genera un id unico
import uuid from 'uuid';

class AgregarCita extends Component {

  // Refs de los inputs
  nombreMascotaRef = React.createRef();
  nombreDuenioRef = React.createRef();
  fechaRef = React.createRef();
  horaRef = React.createRef();
  sintomasRef = React.createRef();

  //state
  state = {
    mascota: '',
    duenio: '',
    fecha: '',
    hora: '',
    sintoma : ''
  }

  crearNuevaCita = (e) => {
    e.preventDefault();

    const mascota = this.nombreMascotaRef.current.value,
          duenio = this.nombreDuenioRef.current.value,
          fecha = this.fechaRef.current.value,
          hora = this.horaRef.current.value,
          sintomas = this.sintomasRef.current.value

    const nuevaCita = {
      id: uuid(),
      mascota,
      duenio,
      fecha,
      hora,
      sintomas
    }

    this.props.crearCita(nuevaCita);
  }
  render() {
    return (
      <div className = 'card mt-5'>
        <div className = "card-body">
          <h2 className = "card-title text-center mb-5">Agrega las citas aqui</h2>
          <form onSubmit = {this.crearNuevaCita}>
            <div className = "form-group row">
              <label className = "col-sm-4 col-lg-2 col-form-label">Nombre mascota</label>
              <div className = "cols-sm-8 col-lg-10">
                <input ref = {this.nombreMascotaRef} className = "form-control" type ="text" placeholder = "Nombre mascota"/>
              </div>
            </div>

            <div className = "form-group row">
              <label className = "col-sm-4 col-lg-2 col-form-label">Nombre dueño</label>
              <div className = "cols-sm-8 col-lg-10">
                <input ref = {this.nombreDuenioRef} className = "form-control" type ="text" placeholder = "Nombre del dueño"/>
              </div>
            </div>

            <div className = "form-group row">
              <label className = "col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className = "cols-sm-8 col-lg-10">
                <input ref = {this.fechaRef} className = "form-control" type ="date"/>
              </div>
            </div>

            <div className = "form-group row">
              <label className = "col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className = "cols-sm-8 col-lg-10">
                <input ref = {this.horaRef} className = "form-control" type ="time"/>
              </div>
            </div>
            <div className = "form-group row">
              <label className = "col-sm-4 col-lg-2 col-form-label">Sintomas</label>
              <div className = "cols-sm-8 col-lg-10">
                <textarea ref = {this.sintomasRef} className = "form-control"></textarea>
              </div>
            </div>
            <div className = "form-group row justify-content-end">
              <div className = "col-sm-3">
                <button type = "submit" className = "btn btn-success w-100">Agregar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default AgregarCita
