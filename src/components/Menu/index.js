import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logo from '../../assets/img/logo.png'
import Button from '../Button'

function Menu () {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="Tecflix Logo" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;