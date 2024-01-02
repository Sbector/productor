import Link from "next/link"


export default function SocialPill({ children, href }) {
    return (
            <Link href={href} target="_blank" className="rounded-full text-sm border border-gray-50 bg-zinc-800 flex justify-center items-center gap-x-1 py-1 px-2
            md:gap-x-2 md:py-2 md:px-3 md:text-lg
            hover:border-green-400 hover:text-green-200 transition-all">
                {children}
            </Link>
    )
}