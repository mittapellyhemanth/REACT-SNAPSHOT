import { Link, Outlet } from "react-router-dom";
import './Categories.css'
import SearchBar from "../SearchBar/SearchBar";


export default function Categories(){

   return <>
        <SearchBar />
  <nav className="nav-container">
           <button><Link to='/Mountains' className="link" >Mountains</Link></button>
           <button> <Link to='/Beachs'  className="link" >Beachs</Link></button>
            <button> <Link to='/Birds'  className="link" >Birds</Link></button>
            <button> <Link to='/Food'  className="link" >Food</Link></button> 
    </nav>
 
   <Outlet />

    </>
}

