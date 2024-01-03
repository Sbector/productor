import Link from "next/link"

const links = [{
    label: 'inicio',
    route: './'
},{
    label: 'acerca de',
    route: './#about'
},{
    label: 'archivo',
    route: './archive'
},{
    label: 'blog/recursos',
    route: './blog'
},{
    label: 'contacto',
    route: './contact'
}]

export default function Nav() {
    return (
        <nav>
            <ul className="flex justify-between text-sky-500">
                {links.map(({label,route}) => (
                    <li key={route}>
                        <Link href={route}>{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}