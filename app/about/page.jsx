import Button from "../components/Button";
import Curriculum from "../components/Curriculum";
import SocialCard from "../components/SocialCard";
import Wrapper from "../components/Wrapper";

export default function AboutPage() {
    return (
        <main id="about">
            <Wrapper className="w-200">
                <h1 className="
                text-2xl text-green-500 font-bold 
                pb-3
                md:text-3xl md:pb-4
                xl:text-5xl lg:pb-5
                ">
                    sbector
                </h1>
                <p className="
                text-base text-wrap
                md:text-lg
                xl:text-xl
                ">
                    Artista contemporáneo y productor de arte.<span className="text-green-100"> Especializado en medios electrónicos y virtuales.</span> Entusiasta y promotor de la cultura libre.
                </p>
                <div className="mt-10">
                    <h2 className="
                    text-base text-gray-50 font-bold uppercase
                    pb-3
                    md:text-lg
                    xl:text-xl
                    ">
                        CV
                    </h2>
                    <Curriculum />
                    <div className="flex place-content-between">
                        <Button href="#">Descargar CV</Button>
                        <Button className="" href="#top">inicio</Button>
                    </div>
                </div>
            </Wrapper>
            <SocialCard></SocialCard>
            
        </main>
    )
}