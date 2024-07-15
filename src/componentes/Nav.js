import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ejemplo01">Ejemplo 1</Link></li>
                <li><Link to="/ejemplo2">Ejemplo 2</Link></li>
                <li><Link to="/ejemplo3">Ejemplo 3</Link></li>
            </ul>
        </nav>
    )
}
export default Nav;