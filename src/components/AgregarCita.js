import React, { Component } from 'react';

class AgregarCita extends Component {

  render() {
    return (
      <div className = 'card mt-5'>
        <div className = "card-body">
          <h2 className = "card-title text-center mb-5">Agrega las citas aqui</h2>
          <form>
            <div className = "form-group row">
              <label className = "col-sm-4 col-lg-2 col-form-label">Nombre mascota</label>
              <div className = "cols-sm-8 col-lg-10">
                <input className = "form-control" type ="text" placeholder = "Nombre mascota"/>
              </div>
            </div>

            <div className = "form-group row">
              <label className = "col-sm-4 col-lg-2 col-form-label">Nombre dueño</label>
              <div className = "cols-sm-8 col-lg-10">
                <input className = "form-control" type ="text" placeholder = "Nombre del dueño"/>
              </div>
            </div>

            <div className = "form-group row">
              <label className = "col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className = "cols-sm-8 col-lg-10">
                <input className = "form-control" type ="date"/>
              </div>
            </div>

            <div className = "form-group row">
              <label className = "col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className = "cols-sm-8 col-lg-10">
                <input className = "form-control" type ="time"/>
              </div>
            </div>
            <div className = "form-group row">
              <label className = "col-sm-4 col-lg-2 col-form-label">Sintomas</label>
              <div className = "cols-sm-8 col-lg-10">
                <textarea className = "form-control"></textarea>
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
