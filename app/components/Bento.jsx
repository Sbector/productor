import BentoItem from "./BentoItem";

export default function Bento({ children }) {
    return (
        <section className="flex flex-col gap-14">
            <div className="flex flex-col gap-6">
                <h2 className="
                text-2xl text-green-200 font-bold 
                pb-3
                md:text-3xl md:pb-4
                xl:text-5xl lg:pb-5
                ">Obra</h2>
                <BentoItem>Paricutin, 2022</BentoItem>
                <BentoItem>Inconspicuo, 2018</BentoItem>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="
                text-2xl text-green-200 font-bold 
                pb-3
                md:text-3xl md:pb-4
                xl:text-5xl lg:pb-5
                ">Proyectos</h2>
                <BentoItem>Año del Usagui, 2023</BentoItem>
                <BentoItem>La escuela del fogón, 2023</BentoItem>
            </div>
        </section>
    )
}