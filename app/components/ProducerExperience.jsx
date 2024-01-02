import ExperienceItem from "./ExperienceItem";

const experiences = [
    {
        date: "2023",
        title: "Museógrafo: 'La escuela del fogón: cocinar la revolución en América'",
        place: "Museo de Arte de Zapopan (MAZ)",
        description: "Diseño de museografía para la exposición 'La escuela del fogón: cocinar la revolución en América' curada por Co.mer",
    },
    {
        date: "2022-2023",
        title: "Coordinador de exposiciones",
        place: "Museo de Arte de Zapopan (MAZ)",
        description: "Jefe del departamento de museografía y coordinador exposiciones. Durante este periodo coordiné exhibiciones individuales de Leiko Ikemura, Donna Huanca, Miriam Rodríguez, Mark Bradford y una exhibición colectiva de la colección CIFO",
    },
    {
        date: "2021",
        title: "Preproducción: Andrea Galvani en Armory Show",
        place: "Armory Show, Nueva York",
        description: "Preproducción y asistencia en diseño del both del artista Andrea Galvani en su participación con la galería Curro en Armory Show"
    },
    {
        date: "2020",
        title: "Preproducción: Alejandro Almanza Pereda en Armory Show",
        place: "Armory Show, Nueva York",
        description: "Preproducción y asistencia en diseño del both del artista Alejandro Almanza Pereda en su participación con la galería Curro en Armory Show"
    },
    {
        date: "2019",
        title: "Preproducción: 'Simulacres' de Alinka Echeverría",
        place: "MOMENTA, Biennale de l'image, Montreal",
        description: "Preproducción y asistencia en diseño museográfico de la exposición Silumacres de la artista Alinka Echeverría durante la Biennale de l'image en Montreal"
    }
]

export default function ProducerExperience() {
    return (
        <div className="pt-6">
            <ol className="relative border-s ml-2 border-gray-700">
                {experiences.map(({date, title, place, description})=>(
                    <ExperienceItem date={date} title={title} place={place} description={description}/>
                ))}
            </ol>
        </div>
    )
}