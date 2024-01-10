import Link from "next/link"
import Wrapper from "./Wrapper"

const links = [{
    label: 'acerca de',
    route: '#about'
}, {
    label: 'proyectos',
    route: '/proyectos'
}, {

    label: 'contacto',
    route: '#contacto'
}]

export default function HomeNav() {
    return (
        <Wrapper>
            <nav>
                <ul className="
                flex-col justify-center text-end inline-flex items w-full
                gap-6 
                md:gap-7
                lg:gap-10
                ">
                    {links.map(({ label, route }) => (
                        <li key={label} >
                            <Link href={route} className="
                        text-3xl text-green-500 font-bold uppercase 
                        hover:text-gray-50 hover:-mx-1 hover:underline transition-all
                        md:text-4xl
                        lg:text-5xl 
                        xl:text-6xl
                       
                        
                        ">{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </Wrapper>
    )
}