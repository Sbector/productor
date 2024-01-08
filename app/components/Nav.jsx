import Link from "next/link"

const links = [{
    label: 'inicio',
    route: '/'
}, {
    label: 'archivo',
    route: '/archive'

}, {
    label: 'contacto',
    route: '/#contacto'
}]

export default function Nav() {
    return (
        <nav className="absolute top-0 pt-1 z-50 w-screen h-8 bg-zinc-900">
            <ul className="flex justify-center w-auto mx-auto gap-4">
                {links.map(({ label, route }) => (
                    <li key={route}>
                        <Link href={route} className="text-sm py-1 px-2 hover:text-green-500 hover:underline transition-all">{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}