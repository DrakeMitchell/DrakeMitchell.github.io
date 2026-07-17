export default function ProjectHero({
    title,
    poster,
    shortDesc,
    releaseDate,
    studioName,
    teamSize,
    platforms,
    responsibilites,
    engine,
    projectLength,
    awards,
    awardImg
}){
    return(
        <section>
            <h2>{title}</h2>


            <div id="about">
                <div class="about-text">
                    <p>{shortDesc}</p>
                    {releaseDate && <p>Released: {releaseDate}</p>}<br/>
                    {studioName && <p>Studio: {studioName}</p>}<br/>
                    {teamSize && <p>Team Size: {teamSize}</p>}<br/>
                    {platforms && <p>Platorm(s): {platforms}</p>}<br/>
                    {engine && <p>Engine: {engine}</p>}<br/>
                    {projectLength && <p>Project Length: {projectLength}</p>}<br/>
                    {responsibilites && <p>Responsibilites: {responsibilites}</p>}<br/>
                </div>
                <div class="about-image">
                    <img src={poster} width = "150%"/>
                </div>
                
            </div>
            
            {awards && <span id="awards">
                {awardImg[0] && <img src={awardImg[0]} width="25%"/>}
                {awardImg[1] && <img src={awardImg[1]} width="25%"/>}
            </span>}

        </section>



    )

}