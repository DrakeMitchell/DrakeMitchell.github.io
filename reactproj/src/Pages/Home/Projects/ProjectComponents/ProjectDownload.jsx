import "./Styles/projectdownload.css"
export default function ProjectDownload({
        trailers,
        itchioURL,
        itchioEmbedURL,
        steamURL,
        githubURL,
        software
}){
    return(
        
    <section id="download">
        {trailers && trailers.length == 1 && <h2>Watch the Trailer!</h2>}
        {trailers && trailers.length >= 2 && <h2>Watch the Trailers!</h2>}
        {trailers && trailers.length >=0 && trailers.map((item,index) =>(
            <div key={index}>
            <p><iframe width="560" height="315" src={trailers[index]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
            </div>
        ))}

        {!software && <h2 id="Dwnld">Download and Play!</h2>}
        <div className="btn-wrap">
            {steamURL && <a href={steamURL} ><button className="btn Steam">Download on Steam</button></a>}
            {itchioURL && !itchioEmbedURL && <a href={itchioURL} ><button className="btn Itch">Download on Itch.io</button> </a>}
            {itchioURL && itchioEmbedURL && <iframe className="Embed" frameborder="0" src={itchioEmbedURL} ><a href={itchioURL}> Test</a></iframe>}
        </div>


        
        {githubURL && <h2 id="Dwnld"> View the SourceCode</h2>}
        {githubURL && <a href={githubURL}><button className = "btn Github"> View on Github </button> </a>}
        {/* <p><iframe width="560" height="315" src="https://www.youtube.com/embed/e-K8TPjRHVQ?si=7TDPStkwjSZAlw2T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
        <iframe frameborder="0" src="https://itch.io/embed/3161137?linkback=true&amp;link_color=52be34&amp;border_color=8e00de" width="552" height="167"><a href="https://claw-and-order-games.itch.io/awwmageddon">AwwMageddon by Claw and Order Games</a></iframe> */}
    </section>
    )
}