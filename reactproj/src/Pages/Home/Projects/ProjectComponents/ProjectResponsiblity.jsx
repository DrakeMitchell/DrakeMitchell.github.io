import "./Styles/projectresponsibility.css"
export default function ProjectRole({contributions}){
    return(
        <section id="Responsibilities">
            {contributions && contributions.length > 0 &&  <h2>My Contributions</h2>}
            <div class="role-text">
                {contributions && contributions.length > 0 && contributions.map((item,index) => (
                    <div key={index}>
                        <p>• {item}
                        </p><br/>
                    </div>
                ))}
            </div>
        </section>
    )
}