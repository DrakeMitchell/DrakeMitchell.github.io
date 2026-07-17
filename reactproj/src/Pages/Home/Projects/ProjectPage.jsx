import ProjectHero from "./ProjectHero"
import ProjectHeader from "./ProjectHeader"
import ProjectRole from "./ProjectResponsiblity"
import ProjectDescription from "./ProjectDescription"
import ProjectGallery from "./ProjectGallery"
import ProjectDownload from "./ProjectDownload"

export default function ProjectPage({project}){
    return(
        <>
        <ProjectHeader 
        title={project.title} subtitle={project.subtitle} genre={project.genre}/>

        <ProjectHero 
        title={project.title} shortDesc={project.shortDesc} poster={project.poster} releaseDate={project.releaseDate}
        studioName={project.studioName} teamSize={project.teamSize} platforms={project.platforms} engine={project.engine}
        responsiblities={project.responsiblities} projectLength={project.projectLength} awards={project.awards} awardImg={project.awardImg}/>

        <ProjectRole contributions={project.contributions}/>

        <ProjectDescription title={project.title} desc={project.desc} img={project.img} special={project.special} specialText={project.specialText}/>

       {!project.software && <ProjectGallery/>}

        {/* Special Sections */}
        {project.downloadable && <ProjectDownload/>}
        </>
    )
}