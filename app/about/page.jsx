import Button from "../components/Button";
import Curriculum from "../components/Curriculum";
import Wrapper from "../components/Wrapper";

export default function AboutPage() {
    return (
        <main id="about">
            <Wrapper>
                <h1 className="
                text-2xl text-green-500 font-bold 
                pb-3
                md:text-3xl md:pb-4
                xl:text-5xl lg:pb-5
                ">
                    Saúl Becerra Torres
                </h1>
                <p className="
                text-base text-wrap
                md:text-lg
                xl:text-xl
                ">
                    Artista contemporáneo y productor de arte.<span className="text-green-200"> Especializado en medios electrónicos y virtuales.</span> Entusiasta y promotor de la cultura libre.
                </p>
                <p className="
                text-base text-wrap
                md:text-lg
                xl:text-xl
                ">
                    A lo largo de su carrera como productor, Saúl ha colaborado con destacados artistas como <span className="text-green-200">Alinka Echeverría,</span> Andrea Galvani, <span className="text-green-200">Alejandro Almanza Pereda,</span> Javier M. Rodríguez, <span className="text-green-200">Leiko Ikemura,</span> Mark Bradford y <span className="text-green-200">Donna Huanca.</span>
                </p>

                <div className="mt-10">
                    <Curriculum />
                    <div className="flex place-content-between">
                        <Button href="./Saúl Becerra Torres_ Portafolio 2023.pdf" target="_blank">Descargar CV</Button>
                        <Button href="#top">inicio</Button>
                    </div>
                </div>
            </Wrapper>
            
        </main>
    )
}