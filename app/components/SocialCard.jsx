import SocialPill from "./SocialPill";
import Wrapper from "./Wrapper";
import GithubIcon from "./icons/GithubIcon.jsx"
import LinkedinIcon from "./icons/LinkedinIcon.jsx"
import MailIcon from "./icons/MailIcon";
import Button from "../components/Button";

export default function SocialCard() {

    return (
        <Wrapper>

            <div id="contacto" className="
        py-20 mx-10
        md:w-[700px] md:mx-auto
        lg:w-[820px]
        xl:w-[1024px]
        ">
                <h2 className="text-lg text-green-300 font-semibold uppercase pb-6
                md:text-3xl md:pb-10
                ">
                    Contáctame
                </h2>
                <nav className=" flex flex-wrap gap-2 md:gap-4 h-auto">
                    <SocialPill href="mailto:sbector.prod@gmail.com">
                        <MailIcon className="w-4 h-4" />e-mail
                    </SocialPill>
                    <SocialPill href="https://www.linkedin.com/in/saul-becerra-torres">
                        <LinkedinIcon className="w-4 h-4" />Linkedin
                    </SocialPill>
                    <SocialPill href="https://github.com/Sbector">
                        <GithubIcon className="w-4 h-4" />Github
                    </SocialPill>
                </nav>
                <Button className="" href="#top">inicio</Button>
            </div>
        </Wrapper>
    )
}