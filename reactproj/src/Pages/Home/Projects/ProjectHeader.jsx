export default function ProjectHeader({title, subtitle,genre}){
    return (
        <header>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{genre}</p>
        </header>
    )
}