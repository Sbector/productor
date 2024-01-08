import Button from "@/app/components/Button";
import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";


export default function Paricutin() {
    return (
        <div>
            <Wrapper>
                <div className="px-6 text-sm">
                    <h1 className="text-md font-semibold text-green-500 pb-4">Paricutin, 2023</h1>
                    <Image
                        src="/images/paricutin.webp"
                        width={0}
                        height={0}
                        alt=''
                        priority
                        className="pb-4 w-full h-full -z-40 object-cover"
                    />
                    <h2 className="text-md font-light text-green-200 pb-3">Fotogrametría</h2>
                    <p>La elección de la palabra &quot;Paricutin&quot; escrita en forma esdrújula preserva la autenticidad de su pronunciación en lengua purépecha, evocando la esencia de su origen.
                    </p>
                    <p>Esta representación visual surge de una roca volcánica extraída del Paricutín, un volcán que fue ampliamente retratado y documentado durante su nacimiento por artistas mexicanos.</p>

                    <Button href='https://sbector.com/paricutin/' target="_blank">Ver en línea</Button>
                </div>
            </Wrapper>
        </div>
    )
}