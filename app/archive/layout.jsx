import Header from "../components/Header";

export default function AboutLayout({ children }) {
    return (
        <>
            <Header />
                {children}
        </>
    )
}