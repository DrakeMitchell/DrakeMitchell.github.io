import "./Styles/aboutme.css"

export default function AboutMe({data}){
    return (
    <section class="about-section">
        <h2>About Me</h2>
        
        <div id="about">
            <div class="about-text">
                <br/>
                <p>{data.aboutMe}</p>
            </div>
            <img class="about-image2" src={data.aboutMeImg} width="200" height="350" alt="Drake M" />
        </div>
        <br/>
        <div class ="about-links">
            <a href="mailto:drakefmitchell@gmail.com"><img src="./Footer-Icons/Gmail_icon.png" /></a>
            
            <a href="https://www.linkedin.com/in/drake-mitchell/"><img src="./Footer-Icons/Linkedin_Icon.png" /></a>
            
            <a href="https://github.com/DrakeMitchell"><img src="./Footer-Icons/Github_Icon.png" /></a>
            <a href="https://severedx.itch.io/"><img src="./Footer-Icons/Itch_Icon.png" /></a>
        </div> 
    </section>
    )
}

