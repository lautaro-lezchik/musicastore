import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link to='/'> <p className="navbar-brand letra-blanca">Musicastore</p></Link>
                <div classNames="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Link to='/category/guitarrasYBajos'>
                            <li className="nav-item">
                                <p className="nav-link letra-blanca">Guitarras y Bajos</p>
                            </li>
                        </Link>
                        <Link to='/category/tecladosYPianos'>
                            <li className="nav-item">
                                <p className="nav-link letra-blanca">Teclados y Pianos</p>
                            </li>
                        </Link>
                        <Link to='/category/bateriasYPercusion'>
                            <li className="nav-item">
                                <p className="nav-link letra-blanca">Baterías y Percusión</p>
                            </li>
                        </Link>
                        <Link to='/Cart'>
                            <li className="nav-item">
                                <CartWidget />
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
}

export default Navbar