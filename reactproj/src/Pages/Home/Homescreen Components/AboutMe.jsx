import "./Styles/aboutme.css"

export default function AboutMe({data}){
    return (
    <section class="about-section">
        <h2>About Me</h2>
        
        <div id="about">
            <div class="about-text">
                <p>{data.aboutMe}</p>
            </div>

            <div class="about-image">
                <img src={data.aboutMeImg} width="200" height="350" alt="Drake M" />
            </div>
        </div>
        <br/>
        <div class ="about-links">
            <a href="mailto:drakefmitchell@gmail.com"><img src="./Footer-Icons/Gmail_icon.png" height="64" width="64"/></a>

            <a href="https://www.linkedin.com/in/drake-mitchell/"><img src="./Footer-Icons/Linkedin_Icon.png" height="64" width="64"/></a>
            <a href="https://github.com/DrakeMitchell"><img src="./Footer-Icons/Github_Icon.png" height="64" width="64"/></a>
            <a href="https://severedx.itch.io/"><img src="./Footer-Icons/Itch_Icon.png" height="64" width="64"/></a>
        </div> 
    </section>
    )
}

