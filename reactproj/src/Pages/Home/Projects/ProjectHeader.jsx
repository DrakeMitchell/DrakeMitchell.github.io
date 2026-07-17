export default function ProjectHeader({title, subtitle,genre}){
    return (
        <header>
            <h1 id="title">{title}</h1>
            <p>{subtitle}</p>
            <p id="genre">{genre}</p>
        </header>
    )
}