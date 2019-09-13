import React, {Component} from 'react';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';
import ListaCitas from './components/ListaCitas'

class App extends Component {

  state = {
    citas : []
  }

  componentDidMount(){
    //Aqui es donde se guardara en el storage
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem(
      'citas',
      //convierte un arreglo en un string por que localStorage solo almacena cadenas de texto
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = (nuevaCita) => {
  
    const citas = [...this.state.citas, nuevaCita];

    this.setState({
      citas
    });
  }

  borrarCita = id => {
    //obtener copia del state
    const citasActuales = [...this.state.citas];


    //borrar el elemento del state: existe una funcion que se llama fielter
    const citas = citasActuales.filter(cita => cita.id !== id);

    //Actualizar el state

    this.setState({citas});
  }
  render(){
    return (
      <div className="container">
       <Header title={"Administrador de Pacientes de Veterinaria"}/>
        <div className = "row">
          <div className = "col-md-6">
            <AgregarCita 
              crearCita = {this.crearCita}
            />
          </div>
					<div className = "col-md-6">
						<ListaCitas 
							citas = {this.state.citas}
              borrarCita = {this.borrarCita}
						/>
					</div>
        </div>
      </div>
		);
	}
}

export default App;
