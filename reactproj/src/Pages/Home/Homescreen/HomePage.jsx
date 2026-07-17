import AboutMe from "../AboutMe";
import Experience from "../Experience";
import Portfolio from "../Portfolio";
import Header from "../Header"
import Navbar from "../Navbar";
import HomeVar from "../HomeVar";

export default function Home(){
    return(
        <>
        <Header/>
        <Navbar/>
        <AboutMe data={HomeVar}/>
        <Experience/>
        <Portfolio/>
        </>
    )
}