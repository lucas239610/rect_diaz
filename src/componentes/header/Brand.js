import brand from "../../img/logo.png";
import { Link } from "react-router-dom"


const Brand = () => {
    return(
        <Link to="/">
            <img src= {brand} alt="Ayui Desing" titel="Ayui Desing"></img>
        </Link>
    )
}

export default Brand;