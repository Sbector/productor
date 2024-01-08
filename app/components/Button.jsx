import Link from "next/link";

export default function Button({ href, children, className, target }) {
    return (

        <Link href={href} target={target} className={`w-auto bg-gray-800 hover:bg-green-500 px-2 py-1 ${className}`}>
            <button>
                {children}
            </button>
        </Link>

    )
}