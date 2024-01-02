export default function ExperienceItem({ date, title, place, description }) {
    return (
        <>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-green-200"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-500">{date}</time>
                <h3 className="text-md font-semibold text-green-200 mt-3">{title}</h3>
                <h2 className="text-sm text-gray-50 font-medium mt-1">{place}</h2>
                <p className="text-sm font-normal text-gray-400 mt-2">{description}</p>
            </li>
        </>
    )
}