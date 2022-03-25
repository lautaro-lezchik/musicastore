import CartWidget from "./CartWidget";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand letra-blanca" href="musicastore/public/index.html">Musicastore</a>
                <div classNames="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active letra-blanca" aria-current="page" href="musicastore/public/index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link letra-blanca" href="musicastore/public/index.html">Guitarras y Bajos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link letra-blanca" href="musicastore/public/index.html">Teclados y Pianos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link letra-blanca" href="musicastore/public/index.html">Baterías y Percusión</a>
                        </li>
                        <li className="nav-item">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    );
}

export default Navbar