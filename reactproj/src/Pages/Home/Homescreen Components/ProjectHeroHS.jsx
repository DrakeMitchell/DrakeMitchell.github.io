import {All,Software,Games,Solo} from '../Home Scripts/ProjectFilters.js'
import {
    HashRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

export default function ProjectHero({projects}){
        return(
            <section id="projects">
                    <h2>Projects</h2>
                    
                    {/* <!-- List from most to least important tabs for Personal, Software, Game Dev --> */}
                    <div>
                        <button className= "btn btnAll" onClick={All} id="All" height = "100" width="100">All</button>
                        <button className= "btn btnGame" onClick={Games}>Game Dev</button>
                        <button className= "btn btnSoftware" onClick={Software}>Software</button>
                        <button className= "btn btnSolo" onClick={Solo}>Solo</button>
                    </div>
                    <h2></h2>


                {projects && projects.length > 0 && projects.map((item, index) => (
                    <span key={index} class={item.type}>
                        <strong id="GameTitle">{item.title}</strong>
                        <br/>
                        <Link to={item.url}>
                            <img src={item.thumbnail} height = "300" width = "450"/>
                        </Link>
                        <br/>
                        <p class="Desc">
                            {item.shortDesc}
                        </p>
                        <br/>
                        <Link to={item.url}>
                            <img alt="Static Badge" src="./Project Badges/see-more....svg"/>
                        </Link>
                        <br/>
                        <img alt="Static Badge" src={item.badge} height="50"/>
                    </span>
                ))}





                 
                {/* <!-- Gator Hucker --> */}
                {/*<span class="Games">
                    <strong id="GameTitle">Gator Hucker</strong>
                    <br/>
                    <a href="/projects/Gator Hucker">
                        <img src="./Thumbnails/GHuck_Thumbnail.png" height = "300" width = "450"/>
                    </a>
                    <br/>
                    <p class="Desc">
                        Eight Player fully online Team Deathmatch or Free For All game built in Unreal Engine 5.<br/>
                        Play as Alien Alligators with an array of fun abilities in this cartoony and casual "Hero-shooter"!
                    </p>
                    <br/>
                    <a href="/projects/Gator Hucker">
                        <img alt="Static Badge" src="./Project Badges/see-more....svg"/>
                    </a>
                    <br/>
                    <img alt="Static Badge" src="./Project Badges/unreal-5-c++-&-blueprints.svg" height="50"/>
                </span> */}

            </section>
        )

}