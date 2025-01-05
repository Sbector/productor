import Wrapper from "../components/Wrapper";
import Link from "next/link";
import Button from "../components/Button";


const proyectos = [
    {
        date: "2024",
        title: "Futuro enterrado",
        description: "Exposición individual de Cynthia Gutierrez en Plataforma",
        works: "Asistencia en diseño museográfico y coordinación",
        url: "https://cynthiagutierrez.com/futuro-enterrado/"
    },{
        date: "2023",
        title: "Miedo siempre, miedo en todas partes",
        description: "Exposición individual de Raúl Rebolledo en laNao",
        works: "Simulación y asistencia en diseño museográfico",
        url: "https://www.lanao.com.mx/copy-of-entrop%C3%ADa"
    }, {
        date: "2023",
        title: "La escuela del fogón",
        description: "Un proyecto de Co.merr en el Museo de Arte de Zapopan",
        works: "Diseño museográfico y producción",
        url: "https://maz.zapopan.gob.mx/portfolio-item/la-escuela-del-fogon-cocinar-la-revolucion-en-america-co-merr/"
    }, {
        date: "2023",
        title: "Los de abajo",
        description: "Exposición individual de Mark Bradford en el Museo de Arte de Zapopan",
        works: "Coordinador",
        url: "https://maz.zapopan.gob.mx/portfolio-item/los-de-abajo-mark-bradford/"
    }, {
        date: "2023",
        title: "Año del usagi",
        description: "Exposición individual de Leiko Ikemura en el Museo de Arte de Zapopan",
        works: "Diseño museográfico y coordinador",
        url: "https://maz.zapopan.gob.mx/portfolio-item/ano-del-usagi-leiko-ikemura/"
    }, {
        date: "2023",
        title: "Ojos obsidianos",
        description: "Exposición individual de Donna Huanca en el Museo de Arte de Zapopan",
        works: "Coordinador",
        url: "https://maz.zapopan.gob.mx/portfolio-item/ojos-obsidianos-donna-huanca/"
    }, {
        date: "2022",
        title: "Poder blando",
        description: "Exposición individual de Miriam Rodríguez en el Museo de Arte de Zapopan",
        works: "Coordinador",
        url: "/#proyectos"
    }, {
        date: "2022",
        title: "Imperios de lo plural",
        description: "Exposición de obras selectas de la colección de la fundación de arte Cisneros Fontanals (CIFO) el Museo de Arte de Zapopan",
        works: "Coordinador",
        url: "https://www.cifo.org/index.php/es/contenidojoomla/pasadas/item/834-plural-domains-ii-selected-works-from-the-cisneros-fontanals-art-foundation"
    }
]

export default function ProjectsPage() {
    return (
        <section id="proyectos">
            <Wrapper>
                <h1
                    className="font-light text-2xl pb-14 text-green-500 uppercase 
                        md:text-3xl
                        lg:text-4xl 
                        xl:text-5xl
                        ">
                    Proyectos realizados
                </h1>
                <section>
                    {proyectos.map(({ date, title, description, works, url }) => (
                        <Link key={title} href={url} target="_blank"
                            className="
                    hover:text-green-500 hover:-mx-1 hover:underline transition-all
                    ">
                            <h1 className="font-semibold text-green-200">{title}, {date}</h1>
                            <h2 className="text-sm text-gray-50 font-medium">{description}</h2>
                            <p className="text-sm font-normal text-gray-400">{works}</p>
                        </Link>
                    ))}
                </section>
            </Wrapper>
        </section>
    )
}