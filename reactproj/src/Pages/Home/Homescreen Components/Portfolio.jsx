import {All,Software,Games,Solo} from '../Home Scripts/ProjectFilters.js'
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
        </span>
        
        {/* <!-- AwwMageddon --> */}
        <span class="Games">
            <strong id="GameTitle">AwwMageddon</strong>
            <br/>
            <a href="/projects/AwwMageddon">
                <img src="./Thumbnails/AwwMag_Thumbnail.png" height = "300" width = "350"/>
            </a>
            <br/>
             <p class="Desc">
                3D city destruction game made in Unreal Engine 5 utlizing the AI behavior tree.<br/>
                Attempt to control the (incredibly) cute and (incredibly) destructive Kaijuwu to destroy the city!<br/>
             </p>
            <br/>
            <a href="/projects/AwwMageddon">
                 <img alt="Static Badge" src="./Project Badges/see-more....svg"/>
            </a>
            <br/>
            {/* <!--<div><iframe frameborder="0" src="https://itch.io/embed/3161137?linkback=true&amp;link_color=52be34&amp;border_color=8e00de" width="552" height="167"><a href="https://claw-and-order-games.itch.io/awwmageddon">AwwMageddon by Claw and Order Games</a></iframe></div>--> */}
            <img alt="Static Badge" src="./Project Badges/unreal-5-blueprints.svg" height = "50"/>
        </span>
        
         {/* <!-- Sticky Situation --> */}
        <div class="Solo Games">
            <strong id="GameTitle">Sticky Situation</strong>             
            <br/>
            <a href="/projects/Sticky Situation">
                <img src="./Thumbnails/Sticky-Thumbnail.png" height = "300" width = "350"/>
            </a>
            <br/>
            <p class="Desc">
                Solo Developed Movement-Puzzle game built in the Godot Engine. <br/>
                Try to make it to the end in one piece! And try not to break anything in a rage in the process!
            </p>
            <br/>
            <a href="/projects/Sticky Situation">
                <img alt="Static Badge" src="./Project Badges/see-more....svg"/>
            </a>
            <br/>
           {/* <!-- <div><iframe frameborder="0" src="https://itch.io/embed/3256309?linkback=true&amp;link_color=2b7ff4&amp;border_color=be4292" width="552" height="167"><a href="https://severedx.itch.io/sticky-situation">Sticky Situation by Severedx</a></iframe></div>--> */}
            <span>
                <img alt="Static Badge" src="./Project Badges/godot-gdscript-solo.svg" height="50"/>
            </span>
        </div>

        {/* <!-- L-System Tree --> */}
        <div class="Software">
            <strong id="GameTitle">L-System Tree</strong> 
            
            <br/>
            <a href="/projects/L-System Generator">
                <img src="./Thumbnails/L-Sys_Thumbnail.png" height = "300" width ="350"/>
            </a>
            
            <br/>
            <p class="Desc">
                Python script interacting with Blender to generate a "Tree" based off of an L-System instruction.
            </p>
            <br/>
            <a href="/projects/L-System Generator">
                 <img alt="Static Badge" src="./Project Badges/see-more....svg"/>
            </a>
            <br/>
            <img alt="Static Badge" src="./Project Badges/python-&-blender-l-systems.svg" height="50"/>
        </div>
        

        {/* <!-- @Obsession --> */}
        <div class="Games">
            <strong id="GameTitle">@Obsession</strong> 
            
            <br/>
            <a href="/projects/@Obsession">
                <img src="./Thumbnails/@Obsession_Thumbnail.png" height="300" width ="350"/>
            </a>
            <br/>
            <p class="Desc">
                2D Life Simulator game built in Unity Game Engine. <br/>
                Play through the daily life as a Streamer/Youtuber, but beware of increasingly obsessed fans!
            </p>
            <br/>
            <a href="/projects/@Obsession">
                <img alt="Static Badge" src="./Project Badges/see-more....svg"/>
            </a>
           {/* <!-- <iframe frameborder="0" src="https://itch.io/embed/2322295" width="552" height="167"><a href="https://austereinsomniac.itch.io/obsession">@Obsession</a></iframe>--> */}
            <br/>
            <img alt="Static Badge" src="./Project Badges/unity-csharp.svg" height="50"/>
        </div>

        {/* <!-- Full Star --> */}
        <div class="Games">
            <strong id="GameTitle">Full Star</strong> 
            
            <br/>
            <a href="/projects/Full Star">
                <img src="./Thumbnails/Full Star_Logo.png" height = "350" height ="300"/>
            </a>
            
            <br/>
            <p class="Desc">
                2D Physics Movement game built in Godot, made as part of a 2 week long "Game Jam"<br/>
                Collect the missing pieces of your Star while avoiding obstacles and navigating gravity!
            </p>
            <br/>
            <a href="/projects/Full Star">
                 <img alt="Static Badge" src="./Project Badges/see-more....svg"/>
            </a>
            <br/>
           {/* <!-- <div><iframe frameborder="0" src="https://itch.io/embed/3032970?linkback=true&amp;link_color=d48922" width="552" height="167"><a href="https://severedx.itch.io/full-star">Full Star by Severedx</a></iframe></div>--> */}
            <img alt="Static Badge" src="./Project Badges/godot-gdscript.svg" height="50"/>
        </div>

        {/* <!-- Mercy Man --> */}
        {/* <div class="Games Solo" style="display: inline-block; width: 45%">
            <strong>Mercy Man</strong>
            <br/>
            <p class="Desc">
                2D Godot personal solo project, "Horror" Action game based on real time combat<br/>
                Combat inspiration comes from Resident Evil Gaiden for the Game Boy!<br/>
                Coming Soon™
            </p>
            <br/>
            <a href="/portfolio/Mercy Man">
               <img alt="Static Badge" src="./Project Badges/see-more....svg">
            </a>
            <br/>
            {/* <!--<div> <a href="https://github.com/DrakeMitchell/New-MercyMan" target="https://img.shields.io/badge/any_text-you_like-blue" alt="GitHub Repository">GitHub</a></div>--> */}
            {/* <span>
                <img alt="Static Badge" src="./Project Badges/godot-gdscript-solo.svg" height="50">
            </span>
        </div> */}
        

        {/* <!-- Portfolio Website --> */}
        <div class="Software Solo">
            <strong id="GameTitle">This Website!</strong> 
            <p class = "Desc">
                A made from scratch website to fit my personal portfolio needs!
            </p>
            <br/>
            
            <br/>
            <a href="https://github.com/DrakeMitchell/DrakeMitchell.github.io">
                 <img alt="Static Badge" src="./Project Badges/see-more....svg"/>
            </a>
            <br/>
            <span>
                <img alt="Static Badge" src="./Project Badges/html-css-&-javascript-solo.svg" height="50"/>
            </span>
        </div>
       
</section>

    )
}