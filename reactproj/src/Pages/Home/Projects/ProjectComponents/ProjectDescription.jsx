export default function ProjectDescription({
    title,
    desc,
    img,
    special,
    specialText
}){
    return(
        <section id="GameDescription">
            {!special && <h2>What is {title}?</h2>}
            <div class="GameDescription-text">
                {!special && desc && desc.length > 0 && desc.map((item, index) => (
                    <div key={index}>
                        <p> {item}</p>
                        {index === 0 && img[0] && <img src={img[0]} width="40%"/>}
                        {index === 1 && img[1] && <img src={img[1]} width="40%"/>}
                        {index === 2 && img[2] && <img src={img[2]} width="40%"/>}
                    </div>
                ))}

                
            </div>
            {special && <section>
                    <h2>L-System Input Explanation</h2>
                    <p><strong>Techincal explanation for Tree creation: </strong></p><br/>
                    Rotation Matrices: <br/>
                    RU(α) =
                    [ (cos α, sin α, 0),<br/>
                    (− sin α, cos α, 0),<br/>
                    (0, 0, 1)]<br/>
                    <p></p>
                    RL(α) =
                    [
                    (cos α 0 − sin α)<br/>
                    (0 1 0)<br/>
                    (sin α 0 cos α)]<br/>
                    <p></p>
                    RH(α) =
                    [
                    (1 0 0)<br/>
                    (0 cos α − sin α)<br/>
                    (0 sin α cos α)]<br/>
                    <p></p>
                    The following symbols control turtle orientation in space: <br/>
                    + Turn left by angle δ, using rotation matrix RU(δ). <br/>
                    − Turn right by angle δ, using rotation matrix RU(−δ). <br/>
                    * Pitch down by angle δ, using rotation matrix RL(δ). <br/>
                    / Pitch up by angle δ, using rotation matrix RL(−δ). <br/>
                    ^ Roll left by angle δ, using rotation matrix RH(δ). <br/>
                    ! Roll right by angle δ, using rotation matrix RH(−δ). <br/>
                    <p></p>
                    [ Open Branch <br/>
                    ] Close Branch <br/>
                
                
                <p>Built in Demo tree uses the input:<br/>
                    F[+F]/F[-F]*F^F!F[+F[+F]/F[-F]*F^F!F]/F[+F]/F[-F]*F^F!F[-F[+F]/F[-F]*F^F!F]*F^F!F[+F]/F[-F]*F^F!F[+F[+F]/F[-F]*F^F!F]/F[+ <br/>
                    F]/F[-F]*F^F!F[-F[+F]/F[-F]*F^F!F]*F^F!F[-F[+F]/F[-F]*F^F!F]/F[+F]/F[-F]*F^F!F[+F[+F]/F[-F]*F^F!F]/F[+F]/F[-F]*F^F!F[-F[+F]/F[-F]*F^F!F]*F^</p>
                
                <h2>Examples</h2>
                {img[0] && <img src={img[0]}/>}
                <h2>Download and Run Instructions</h2>
                {desc[0] && <p>{desc[0]}</p>}
                {img[1] && <img src={img[1]} width="40%"/>}
                {desc[1] && <p>{desc[1]}</p>}
                {img[2] && <img src={img[2]} width="40%"/>}
                {img[3] && <img src={img[3]} width="40%"/>}
                {desc[2] && <p>{desc[2]}</p>}

                    </section>}
        </section>
    )
}