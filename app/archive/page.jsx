import Wrapper from "../components/Wrapper";
import Link from "next/link";

const obras = [
    {
        date: "2023",
        title: "Paricutin",
        description: "Fotogrametría de roca del Parícutin",
        img: "/images/paricutin.webp",
        url: "https://sbector.com/paricutin/"
    },
]

const proyectos = [
    {
        date: "2023",
        title: "Año del usagi",
        description: "Exposición individual de Leiko Ikemura en el MAZ",
        img: "#",
        url: "#"
    },
]

export default function ArchivePage() {
    return (
        <Wrapper className="relative flex-col pt-2 md:pt-10 gap-4 place-content-end">
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
                ">Obra</h2>
                <section className="pb-8">
                    {obras.map(({ date, title, url }) => (
                        <Link key={title} href={url}
                            className="
                    col-span-12
                    md:col-span-6
                    lg:col-span-3
                    ">
                            <h1>{title}, {date}</h1>
                        </Link>
                    ))}
                </section>
                <h2 className="
                text-xl text-green-200
                md:text-2xl md:pb-4
                xl:text-3xl lg:pb-5
                ">Proyectos</h2>
                <section className="">
                    {proyectos.map(({ date, title, url }) => (
                        <Link key={title} href={url}
                            className="
                    col-span-12
                    md:col-span-6
                    lg:col-span-3
                    ">
                            <h1>{title}, {date}</h1>
                        </Link>
                    ))}
                </section>
            </div>
        </Wrapper>
    )
}