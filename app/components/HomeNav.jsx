import Link from "next/link"
import Wrapper from "./Wrapper"

const links = [{
    label: 'acerca de',
    route: '#about'
}, {
    label: 'contacto',
    route: '#contacto'
}, {
    label: 'blog / recursos',
    route: './blog'
}]

export default function HomeNav() {
    return (
        <Wrapper>
            <nav>
                <ul className="
                flex-col justify-center text-end inline-flex items w-full
                gap-3 
                md:gap-4
                lg:gap-6
                ">
                    {links.map(({ label, route }) => (
                        <li key={label} className="
                        text-3xl font-medium uppercase 
                        hover:text-green-500 hover:-mx-1 hover:underline transition-all
                        md:text-4xl
                        lg:text-5xl 
                        xl:text-6xl
                        ">
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </Wrapper>
    )
}