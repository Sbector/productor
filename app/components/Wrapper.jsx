export default function Wrapper({ children, className }) {
    return (
        <div className={`flex flex-col justify-center 
        min-h-screen w-auto 
        py-20 mx-10 
        md:w-[700px] md:mx-auto
        lg:w-[820px]
        xl:w-[1024px]
        ${className}`}>
            {children}
        </div>
    )
}