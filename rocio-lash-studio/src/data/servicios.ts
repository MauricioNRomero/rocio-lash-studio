export type Servicio = {
    id: string;
    nombre: string;
    precio: number;
    descripcion: string;
};

export const servicios: Servicio[] = [
    {
        id: 'clasicas',
        nombre: 'Clásicas',
        precio: 20000,
        descripcion:
            'Técnica de aplicación pelo a pelo donde se coloca una única extensión sobre cada pestaña natural.',
    },
    {
        id: 'brasileras',
        nombre: 'Brasileras',
        precio: 22000,
        descripcion:
            'Abanicos prearmados en forma de Y por cada pestaña natural.',
    },
    {
        id: 'aura-3d',
        nombre: 'Efecto Aura 3D',
        precio: 23000,
        descripcion:
            'Abanicos 3D prearmados en forma de U con una curva cerrada dando un efecto de máscara de pestañas.',
    },
    {
        id: 'aura-4d',
        nombre: 'Efecto Aura 4D',
        precio: 24000,
        descripcion:
            'Abanicos 4D prearmados en forma de U con una curva cerrada por cada pestaña natural, dando un efecto de máscara de pestañas con más volumen.',
    },
    {
        id: 'hawaianas',
        nombre: 'Hawaianas',
        precio: 23000,
        descripcion:
            'Abanicos prearmados de 3 pelitos en forma de W por cada pestaña natural.',
    },
    {
        id: 'efecto-griego',
        nombre: 'Efecto Griego',
        precio: 24000,
        descripcion:
            'Abanicos prearmados de 4 pelitos en forma de W por cada pestaña natural.',
    },
    {
        id: 'volumen-ingles',
        nombre: 'Volumen Inglés',
        precio: 25000,
        descripcion:
            'Abanicos prearmados de 5 pelitos en forma de W por cada pestaña natural.',
    },
    {
        id: 'mega-volumen',
        nombre: 'Mega Volumen',
        precio: 26000,
        descripcion:
            'Abanicos prearmados de 6 pelitos en forma de W por cada pestaña natural.',
    },
    {
        id: 'efecto-anime',
        nombre: 'Efecto Anime',
        precio: 26000,
        descripcion:
            'Abanicos prearmados de 4 pelitos en forma de W, sumando espigas en forma de pluma.',
    },
];
