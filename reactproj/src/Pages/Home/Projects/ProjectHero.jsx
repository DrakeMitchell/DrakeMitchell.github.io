export default function ProjectHero({
    title,
    poster,
    shortDesc,
    releaseDate,
    studioName,
    teamSize,
    platforms,
    responsiblities,
    engine,
    projectLength,
    awards,
    awardImg
}){
    return(
        <section>
            {/* <h2>{title}</h2> */}


            <div id="about">
                <div class="about-text">
                    <p>{shortDesc}</p>
                    {releaseDate && <p><strong>Released:</strong> {releaseDate}</p>}<br/>
                    {studioName && <p><strong>Studio:</strong> {studioName}</p>}<br/>
                    {teamSize && <p><strong>Team Size:</strong> {teamSize}</p>}<br/>
                    {platforms && <p><strong>Platorm(s):</strong> {platforms}</p>}<br/>
                    {engine && <p><strong>Engine:</strong> {engine}</p>}<br/>
                    {projectLength && <p><strong>Project Length:</strong> {projectLength}</p>}<br/>
                    {responsiblities && <p><strong>Main Responsibilites:</strong></p>}<br/> 
                    {responsiblities && responsiblities.length > 0 && responsiblities.map((item, index) => (
                        <div key={index}>
                            <li><p>{item}</p></li><br/>
                        </div>
                    ))}


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