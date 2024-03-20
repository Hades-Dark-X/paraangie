import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-container"> /* contentendor principal */
        
      /* titulo */
        <div className="rectangle">
          <div className="ellipse" />
          <span className="singapur-airlines">Singapur Airlines</span>
        </div>

        /* número de vuelo */
        <div className="flex-row">
          <span className="no-vuelo">No Vuelo</span>
          <span className="tipo-de-vuelo">Tipo de Vuelo</span>
        </div>
        <div className="flex-row-eb">
          <div className="rectangle-1" />
          <div className="rectangle-2" />
        </div>

        /* campos  de origen y destino */
        <div className="flex-row-ba">
          <span className="ciudad-de-origen">Ciudad de Origen</span>
          <span className="ciudad-de-destino">Ciudad de destino</span>
        </div>


        <div className="flex-row-ab">
          <div className="rectangle-3" />
          <div className="rectangle-4" />
        </div>

        /* contentendores de los botones */
        <div className="flex-row-5">
          <div className="button">
            <span className="buscar">Buscar</span>
          </div>
          <div className="button-6">
            <span className="crear-vuelo">Crear Vuelo</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
