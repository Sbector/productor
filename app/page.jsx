import AboutPage from "./about/page";
import Video from "./components/Video";
import HomeNav from "./components/HomeNav";


export default function Home() {
  return (
    <div id="home" className="relative">
      <Video/>
      <HomeNav />
      <AboutPage/>
    </div>
  )
}