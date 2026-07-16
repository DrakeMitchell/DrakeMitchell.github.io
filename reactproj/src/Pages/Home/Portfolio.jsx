import {All,Software,Games,Solo} from './ProjectFilters'
export default function Portfolio(){




    return (
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
        
        {/* <!-- Gator Hucker --> */}
        <span class="Games">
            <strong>Gator Hucker</strong>
            <br/>
            <a href="/portfolio/Gator Hucker">
                <img src="Thumbnails/GHuck_Thumbnail.png" height = "300" width = "450"/>
            </a>
            <br/>
            <p class="Desc">
                Eight Player fully online Team Deathmatch or Free For All game built in Unreal Engine 5.<br/>
                Play as Alien Alligators with an array of fun abilities in this cartoony and casual "Hero-shooter"!
            </p>
            <br/>
            <a href="/portfolio/Gator Hucker">
                <img alt="Static Badge" src="Project Badges/see-more....svg"/>
            </a>
            <br/>
            <img alt="Static Badge" src="Project Badges/unreal-5-c++-&-blueprints.svg" height="50"/>
        </span>
        
        {/* <!-- AwwMageddon --> */}
        <span class="Games">
            <strong>AwwMageddon</strong>
            <br/>
            <a href="/portfolio/AwwMageddon">
                <img src="Thumbnails/AwwMag_Thumbnail.png" height = "300" width = "350"/>
            </a>
            <br/>
             <p class="Desc">
                3D city destruction game made in Unreal Engine 5 utlizing the AI behavior tree.<br/>
                Attempt to control the (incredibly) cute and (incredibly) destructive Kaijuwu to destroy the city!<br/>
             </p>
            <br/>
            <a href="/portfolio/AwwMageddon">
                 <img alt="Static Badge" src="Project Badges/see-more....svg"/>
            </a>
            <br/>
            {/* <!--<div><iframe frameborder="0" src="https://itch.io/embed/3161137?linkback=true&amp;link_color=52be34&amp;border_color=8e00de" width="552" height="167"><a href="https://claw-and-order-games.itch.io/awwmageddon">AwwMageddon by Claw and Order Games</a></iframe></div>--> */}
            <img alt="Static Badge" src="Project Badges/unreal-5-blueprints.svg" height = "50"/>
        </span>
        
       
</section>

    )
}