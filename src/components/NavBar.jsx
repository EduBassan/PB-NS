import { Link } from "react-router-dom"

export default function NavBar () {
    return(
        <>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <Link to="/">Passa a bola</Link>
            <Link to="/Copa">Copa <p>PB</p></Link>
            <Link to="/Inscricao">inscreva-se</Link>
            <Link to="/Apoiadores">Apoiadores</Link>
        </div>
    </>
    )
    
}