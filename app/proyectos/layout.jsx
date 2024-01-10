import Header from "../components/Header";

export default function AboutLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}