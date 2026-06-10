import { Link } from "react-router-dom";
import "../styles/Navbar.css";


function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <Link to="/">
                    <h2>GDR-RPG</h2>
                </Link>
            </div>

            <div className="navbar-links">
                <a href="#features">Recursos</a>
                <a href="#about">Sobre</a>
                <a href="#news">Novidades</a>
                <Link to="/construction">
                    Ajuda
                </Link>
            </div>

            <div className="navbar-buttons">
                <Link className="btn-secondary" to="/login">
                    Login
                </Link>

                <Link className="btn-primary" to="/register">
                    Criar Conta
                </Link>
            </div>

        </nav>
    );
}

export default Navbar;