import Wrapper from "../components/Wrapper";
import Bento from "../components/Bento";

export default function ArchivePage() {
    return (
        <Wrapper className="relative flex-col gap-4 place-content-end">
            <h1
                className="text-3xl pb-6 text-green-500 font-medium uppercase 
                        md:text-4xl
                        lg:text-5xl 
                        xl:text-6xl
                        ">
                Archivo
            </h1>
            <Bento />
        </Wrapper>
    )
}