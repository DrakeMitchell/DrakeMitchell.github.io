import AboutMe from "../Homescreen Components/AboutMe";
import Experience from "../Homescreen Components/Experience";
import Portfolio from "../Homescreen Components/Portfolio";
import Header from "../Homescreen Components/Header"
import Navbar from "../Homescreen Components/Navbar";
import HomeVar from "../Home Scripts/HomeVar";
import ProjectHero from "../Homescreen Components/ProjectHeroHS";
import { ProjectOrder} from "../Projects/ProjectData/ProjectOrder";



export default function Home(){
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
        <Header/>
        <AboutMe data={HomeVar}/>
        <Experience/>
        <ProjectHero projects={ProjectOrder.projects}/>

        </>
    )
}