import AboutPage from "./about/page";
import Video from "./components/Video";
import HomeNav from "./components/HomeNav";
import ProjectsPage from "./proyectos/page";
import SocialCard from "./components/SocialCard";


export default function Home() {
  return (
    <div id="home" className="relative">
      <Video/>
      <HomeNav />
      <AboutPage/>
      <ProjectsPage/>
      <SocialCard/>
    </div>
  )
}