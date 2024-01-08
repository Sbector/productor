import Link from "next/link";
import BentoItem from "./BentoItem";

const obras = [
    {
        date: "2023",
        title: "Paricutin",
        description: "Fotogrametría de roca del Parícutin",
        img: "#",
        url: "#"
    }, {
        date: "2018",
        title: "Inconspicuo",
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
        <section className="flex flex-col gap-14">
            <h2 className="
                text-2xl text-green-200 font-bold 
                pb-3
                md:text-3xl md:pb-4
                xl:text-5xl lg:pb-5
                ">Obra</h2>
            <div className="w-full mx-auto grid grid-cols-10 auto-rows-auto gap-4">
                {obras.map(({ date, title, description, img, url }) => (
                    <Link href={url}
                        className="
                    col-span-10
                    md:col-span-5
                    ">
                        <BentoItem key={title} title={title} date={date} description={description} img={img} />
                    </Link>
                ))}
            </div>
            <h2 className="
                text-2xl text-green-200 font-bold 
                pb-3
                md:text-3xl md:pb-4
                xl:text-5xl lg:pb-5
                ">Proyectos</h2>
            <div className="w-full mx-auto grid grid-cols-10 auto-rows-auto gap-4">
                {proyectos.map(({ date, title, description, img, url }) => (
                    <Link href={url} className="
                    col-span-10
                    md:col-span-5
                    ">
                        <BentoItem key={title} title={title} date={date} description={description} img={img} />
                    </Link>
                ))}
            </div>
        </section>
    )
}