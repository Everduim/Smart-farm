
import { Link } from 'react-router-dom'
import EjemplaresA from '../components/Ejemplares/Ejemplares'
import "../styles/Ejemplares.scss"


export const Ejemplares = () => {
  return (
    <>
      <body>

        <div className='button_div'>
        <Link to="/especies">
          <button>VOLVER</button>
        </Link>
        
          <Link to="/ejemplares/nuevo">
            <button>NUEVO</button>
          </Link>
          
        </div>

        <div className='div-general'>
          <EjemplaresA></EjemplaresA>
        </div>
      </body>

    </>
  )
}
export default Ejemplares