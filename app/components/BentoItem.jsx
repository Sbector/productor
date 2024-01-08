import Button from "./Button";

export default function BentoItem({ children }) {
    return (
        <div>
            <div
                className="
            relative
            bg-green-200 
            h-60
            landscape:h-20
            ">
                <h1 className="absolute top-0 left-0">{children}</h1>
                <div className="absolute flex flex-row gap-4 bottom-0 right-0">
                    <p >Descripción</p>
                    <Button href="#">ver +</Button>
                </div>
            </div>
        </div>
    )
}