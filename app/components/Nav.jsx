import Link from "next/link"

const links = [{
    label: 'inicio',
    route: '/'
}, {
    label: 'proyectos',
    route: '/proyectos'

}, {
    label: 'contacto',
    route: '/#contacto'
}]

export default function Nav() {
    return (
        <nav className="absolute top-0 z-50 w-screen bg-zinc-900 py-4">
            <ul className="flex justify-center w-auto mx-auto gap-4">
                {links.map(({ label, route }) => (
                    <li key={route}>
                        <Link href={route} className="font-bold text-base
                        md:text-lg
                         py-1 px-2 
                         hover:text-green-500 hover:underline transition-all">{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}