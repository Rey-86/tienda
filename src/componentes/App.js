import './App.css'
import Producto from './producto'
import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p: {
        nombre: 'Descripción del producto',
        imagen: '',
        descripcion: 'Descripcion del producto'
      }
    }
  }
  render () {
    return (
      <div className='App'>

          <h2>Probando</h2>
          <Producto value={ this.state.p} />

      </div>
    )
  }
}

export default App
