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
                    Productor de arte contemporáneo y museógrafo especializado en medios electrónicos y virtuales. Su carrera se centra en la integración de tecnología y cultura libre en el arte, creando experiencias innovadoras y accesibles para el público.
                </p>
                <p className="
                text-base text-wrap
                md:text-lg
                xl:text-xl
                ">
                   Utiliza herramientas como escaneo 3D, realidad virtual (VR) y programación creativa en la producción y planificación de proyectos artísticos, contribuyendo al desarrollo de sus obras de diversas maneras.
                </p>

                <div className="mt-10">
                    
                    <div className="flex place-content-between">
                        <Button href="./Saul_Becerra_Torres-CV.pdf" target="_blank">Descargar CV</Button>
                        <Button href="./Saul_Becerra_Torres_Portafolio_Museografia_2020-2024.pdf" target="_blank">Descargar Portafolio</Button>
                    </div>
                </div>
            </Wrapper>
        </main>
    )
}