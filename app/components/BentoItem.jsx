import Button from "./Button";

export default function BentoItem({ date, title, description, img, className }) {
    return (
        <div
            className={`flex flex-col justify-between
            relative
            bg-slate-800 
            h-60
            landscape:h-20
            landscape:md:h-60
            ${className}
            `}>
            <h1 className="py-1 px-2 text-base">{title}, {date}</h1>
            <div className="w-full bg-green-200 bg-opacity-10">
                <p className="text-sm py-1 px-2">{description}</p>
            </div>
        </div>
    )
}