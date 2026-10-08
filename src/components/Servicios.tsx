import { servicios } from '../data/servicios';
import ServicioCard from './ServicioCard';
import './Servicios.css';

function Servicios() {
    return (
        <section className="servicios" id="servicios">
            <h2 className="servicios__titulo">Servicios</h2>
            <div className="servicios__lista">
                {servicios.map((servicio) => (
                    <ServicioCard key={servicio.id} servicio={servicio} />
                ))}
            </div>
        </section>
    );
}

export default Servicios;
