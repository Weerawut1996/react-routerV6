
import { Link } from "react-router-dom"

function NavberTab() {
   return (
      <>
         <nav id = "nanvar" >
            <div className="d-inline-block text-fff">icon</div>
            <div className="d-flex gap-10px">
               <Link to={'/'}>Home</Link>
               <Link to={'/1stPage'}>1st Page</Link>
               <Link to={'/2ndPage'}>2nd Page</Link>
               <Link to={'/3rdPage'}>3rd Page</Link>
            </div>
         </nav>
      </>
   )
}

export default NavberTab