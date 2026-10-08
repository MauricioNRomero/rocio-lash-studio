import type { Servicio } from '../data/servicios';
import './ServicioCard.css';

type Props = {
    servicio: Servicio;
};

const formatoPrecio = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
});

function ServicioCard({ servicio }: Props) {
    return (
        <article className="servicio-card">
            <h3 className="servicio-card__nombre">{servicio.nombre}</h3>
            <p className="servicio-card__descripcion">{servicio.descripcion}</p>
            <p className="servicio-card__precio">
                {formatoPrecio.format(servicio.precio)}
            </p>
        </article>
    );
}

export default ServicioCard;
