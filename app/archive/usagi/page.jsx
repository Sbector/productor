import Button from "@/app/components/Button";
import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";

export default function usagiPage() {
    return(
        <div>
            <Wrapper>
                <div className="px-6 text-sm">
                    <h1 className="text-md font-semibold text-green-500 pb-4">Año del usagi, 2023</h1>
                    <Image
                        src="/images/usagi.webp"
                        width={0}
                        height={0}
                        alt='Render de la exposición "el año del usagi"'
                        priority
                        className="pb-4 w-full h-full -z-40 object-cover"
                    />
                    <h2 className="text-md font-light text-green-200 pb-3">Exposición individual de Leiko Ikemura en el Museo de Arte de Zapopan</h2>
                    <p>Para este proyecto de la artista Leiko Ikemura participé en el diseño museográfico y así como coordinador general de la mismo.
                    </p>
                    <p></p>

                    <Button href='https://maz.zapopan.gob.mx/portfolio_page/leiko-ikemura/' target="_blank">Ver sitio oficial del museo</Button>
                </div>
            </Wrapper>
        </div>
    )
}