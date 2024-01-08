import Image from "next/image"

export default function BentoItem({ date, title, description, img, className, url }) {
    return (
        <article
            className={`flex flex-col justify-between
            relative
            h-80
            ${className}
            `}>
            <Image
                src={img}
                width={0}
                height={0}
                alt={`foto de la pieza ${title}`}
                priority
                className="w-auto h-full -z-40 object-cover absolute left-0 top-0 hover:invert"
            />
            <h1 className="py-1 px-2 text-base">{title}, {date}</h1>
            <div className="w-full bg-green-200 bg-opacity-10">
                <p className="text-sm py-1 px-2">{description}</p>
            </div>
        </article>
    )
}