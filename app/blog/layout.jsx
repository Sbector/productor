import Header from "../components/Header";
import Wrapper from "../components/Wrapper";

export default function AboutLayout({ children }) {
    return (
        <>
            <Header />
            <Wrapper>
                {children}
            </Wrapper>
        </>
    )
}