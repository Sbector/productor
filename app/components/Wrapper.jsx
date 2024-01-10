export default function Wrapper({ children, className }) {
    return (
        <div className={`flex flex-col justify-center 
        min-h-screen max-w-full
        py-20 px-10 
        md:w-[700px] md:mx-auto
        lg:w-[820px]
        xl:w-[1024px]
        ${className}`}>
            {children}
        </div>
    )
}