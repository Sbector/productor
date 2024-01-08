import Wrapper from "../components/Wrapper";
import Link from "next/link";


const proyectos = [
    {
        date: "2023",
        title: "Miedo siempre, miedo en todas partes",
        description: "Exposición individual de Raúl Rebolledo en laNao",
        works: "Renders",
        url: "https://www.lanao.com.mx/copy-of-entrop%C3%ADa"
    }, {
        date: "2023",
        title: "La escuela del fogón",
        description: "Un proyecto de Co.merr en el Museo de Arte de Zapopan",
        works: "Diseño museográfico y producción",
        url: "https://maz.zapopan.gob.mx/portfolio_page/la-escuela-del-fogon/"
    },{
        date: "2023",
        title: "Los de abajo",
        description: "Exposición individual de Mark Bradford en el Museo de Arte de Zapopan",
        works: "Coordinador",
        url: "https://maz.zapopan.gob.mx/portfolio_page/mark-bradford/"
    }, {
        date: "2023",
        title: "Año del usagi",
        description: "Exposición individual de Leiko Ikemura en el Museo de Arte de Zapopan",
        works: "Diseño museográfico y coordinador",
        url: "https://maz.zapopan.gob.mx/portfolio_page/leiko-ikemura/"
    }, {
        date: "2023",
        title: "Ojos obsidianos",
        description: "Exposición individual de Donna Huanca en el Museo de Arte de Zapopan",
        works: "Coordinador",
        url: "https://maz.zapopan.gob.mx/portfolio_page/donna-huanca/"
    }, {
        date: "2022",
        title: "Poder blando",
        description: "Exposición individual de Miriam Rodríguez en el Museo de Arte de Zapopan",
        works: "Coordinador",
        url: "https://maz.zapopan.gob.mx/portfolio_page/poder-blando/"
    }, {
        date: "2022",
        title: "Imperios de lo plural",
        description: "Exposición de obras selectas de la colección de la fundación de arte Cisneros Fontanals (CIFO) el Museo de Arte de Zapopan",
        works: "Coordinador",
        url: "https://maz.zapopan.gob.mx/portfolio_page/imperios-de-lo-plural-cifo/"
    }
]

export default function ArchivePage() {
    return (
        <Wrapper className="relative flex-col gap-4 place-content-end">
            <h1
                className="font-light text-2xl pb-6 text-green-500 uppercase 
                        md:text-3xl
                        lg:text-4xl 
                        xl:text-5xl
                        ">
                Archivo
            </h1>
            <div className="flex flex-col gap-4">
                <h2 className="
                text-xl text-green-200
                md:text-2xl md:pb-4
                xl:text-3xl lg:pb-5
                ">Proyectos</h2>
                <section className="">
                    {proyectos.map(({ date, title, description, works, url }) => (
                        <Link key={title} href={url} target="_blank"
                            className="
                    hover:text-green-500 hover:-mx-1 hover:underline transition-all
                    ">
                            <h1 key={title} className="font-semibold text-green-200">{title}, {date}</h1>
                            <h2 key={title} className="text-sm text-gray-50 font-medium">{description}</h2>
                            <p key={title} className="text-sm font-normal text-gray-400">{works}</p>
                        </Link>
                    ))}
                </section>
            </div>
        </Wrapper>
    )
}