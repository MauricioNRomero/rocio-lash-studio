import logo from '../assets/logo.png';
import { URL_RESERVA } from '../data/config';
import './Hero.css';

function Hero() {
    return (
        <header className="hero">
            <img
                src={logo}
                alt="Logo de Rocío Lash Studio"
                className="hero__logo"
                width={220}
                height={220}
            />
            <h1 className="hero__titulo">Rocío Lash Studio</h1>
            <p className="hero__lema">Miradas que hablan por vos</p>
            <a
                href={URL_RESERVA}
                className="hero__boton"
                target="_blank"
                rel="noopener noreferrer"
            >
                Reservar turno
            </a>
        </header>
    );
}

export default Hero;
