
import { Link } from 'react-router-dom'
import EjemplaresA from '../components/Ejemplares/Ejemplares'
import "../styles/Ejemplares.scss"


export const Ejemplares = () => {
  return (
    <>
    <div></div>
      <Link to="/ejemplares/nuevo">
      <button>EDU-EMI</button>
      </Link>
      <div className='div-general'>
        <EjemplaresA></EjemplaresA>
      </div>
    </>
  )
}
export default Ejemplares