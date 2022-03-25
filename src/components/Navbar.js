import React from 'react';
import { Link } from 'react-roter-dom';
import '../styles/Nav.css';

  export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav>
                <Link className="link" to="">Inicio</Link>
                <Link className="link" to="/Registro">New User</Link>
                <Link className="link" to="/Listar">Users</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}

