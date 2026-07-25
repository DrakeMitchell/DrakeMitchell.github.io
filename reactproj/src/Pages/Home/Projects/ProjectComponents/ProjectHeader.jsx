export default function ProjectHeader({title, subtitle,genre}){
    return (
        <section class="info">
            <h1 id="title">{title}</h1> <br/>
            <p id ="subtitle">{subtitle}</p> <br/>
            <p id="genre">{genre}</p> <br/>
        </section>
        
    )
}