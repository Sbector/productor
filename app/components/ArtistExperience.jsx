import ExperienceItem from "./ExperienceItem";

const exposiciones = [
    {
        date: "2022",
        title: "Panorama",
        place: "Galería Jesús Gallardo, León.",
        description: "Exposición colectiva curada por Ixchel Ledesma, Isis Yépez y Óscar Ascencio",
    },
    {
        date: "2021",
        title: "Parlamento de octubre",
        place: "Taller Sector Reforma, Guadalajara",
        description: "Exposición colectiva curada por Hiram Constantino",
    },
    {
        date: "2020",
        title: "Otro trabajo, otro trabaja",
        place: "Espacio Cabeza, Guadalajara.",
        description: "Exposición colectiva curada por Alejandro Cámara"
    },
    {
        date: "2020",
        title: "Tactical dibujation action",
        place: "Centro_cultural_Kappa",
        description: "Exposición colectiva curada por Leonardo Ascencio"
    },
    {
        date: "2020",
        title: "¿Cómo lisiar a un ruiseñor?",
        place: "rayón(tres siete seis), Guadalajara",
        description: "Exposición colectiva curada por Otro espacio"
    },
    {
        date: "2020",
        title: "El peor puerco se lleva la mejor guayaba",
        place: "Taller los guayabos, Guadalajara",
        description: "Exposición colectiva"
    }
]

export default function ArtistExperience() {
    return (
        <div className="pt-6">
            <ol className="relative border-s ml-2 border-gray-700">
                {exposiciones.map(({ date, title, place, description }) => (
                    <ExperienceItem date={date} title={title} place={place} description={description} />
                ))}
            </ol>
        </div>
    )
}