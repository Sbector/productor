import Link from "next/link";
import BentoItem from "./BentoItem";

const obras = [
    {
        date: "2023",
        title: "Paricutin",
        description: "Fotogrametría de roca del Parícutin",
        img: "/images/paricutin.webp",
        url: "#"
    }, {
        date: "2018",
        title: "Inconspicuo",
        description: "Atribución de obra de arte público",
        img: "#",
        url: "#"
    }, {
        date: "2023",
        title: "Otra",
        description: "Fotogrametría de roca del Parícutin",
        img: "#",
        url: "#"
    }, {
        date: "2018",
        title: "Una mas",
        description: "Atribución de obra de arte público",
        img: "#",
        url: "#"
    }
]

const proyectos = [
    {
        date: "2023",
        title: "Año del usagi",
        description: "Exposición individual de Leiko Ikemura en el MAZ",
        img: "#",
        url: "#"
    }, {
        date: "2023",
        title: "La escuela del fogón",
        description: "Exposición curada por co.merr en el MAZ",
        img: "#",
        url: "#"
    }
]

export default function Bento({ children }) {
    return (
        <div className="flex flex-col gap-14">
            <h2 className="
                text-xl text-green-200
                md:text-2xl md:pb-4
                xl:text-3xl lg:pb-5
                ">Obra</h2>
            <section className="w-full mx-auto grid grid-cols-12 auto-rows-auto gap-4">
                {obras.map(({ date, title, description, img, url }) => (
                    <Link key={title} href={url}
                        className="
                    col-span-12
                    md:col-span-6
                    lg:col-span-3
                    ">
                        <BentoItem key={title} title={title} date={date} description={description} img={img}/>
                    </Link>
                ))}
            </section>
            <h2 className="
                text-xl text-green-200
                md:text-2xl md:pb-4
                xl:text-3xl lg:pb-5
                ">Proyectos</h2>
            <section className="w-full mx-auto grid grid-cols-12 auto-rows-auto gap-4">
                {proyectos.map(({ date, title, description, img, url }) => (
                    <Link key={title} href={url}
                        className="
                    col-span-12
                    md:col-span-6
                    lg:col-span-3
                    ">
                        <BentoItem key={title} title={title} date={date} description={description} img={img} />
                    </Link>
                ))}
            </section>
        </div>
    )
}