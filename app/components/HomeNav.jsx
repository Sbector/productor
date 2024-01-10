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
                gap-4 
                md:gap-5
                lg:gap-8
                ">
                    {links.map(({ label, route }) => (
                        <li key={label} >
                            <Link href={route} className="
                        text-3xl shadow-xl text-gray-50 font-bold uppercase 
                        bg-black bg-opacity-10 border px-3 py-1 boder-gray-50
                        hover:text-green-500 hover:bg-green-200 hover:bg-opacity-20 hover:-mx-1 hover:underline transition-all
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