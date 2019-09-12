import React, {Component} from 'react';
import AgregarCita from './components/AgregarCita';

class App extends Component {

  state = {
    citas : []
  }

  crearCita = (nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita];
    console.log(citas);

    this.setState({
      citas
    });
  }
  render(){
    return (
      <div className="container">
        <div className = "row">
          <div className = "col-md-6">
            <AgregarCita 
              crearCita = {this.crearCita}
            />
          </div>
        </div>
      </div>
    );}
}

export default App;
