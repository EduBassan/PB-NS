import ImagemHero from "../assets/imagemParallax.jpg"
import { Link } from "react-router-dom"


export default function Hero () {
    return (
        <div className="h-180">
            <div>
                <img src="" alt="logo-passa-a-bola" />
                <p>Futebol de verdade</p>
                <h1>FEITO POR ELAS</h1>
                <h3>Passa a Bola conecta meninas, times e comunidades para criar campeonatos acessíveis, divertidos e profissionais.</h3>
                <Link to="">Inscreva seu time</Link>
                <Link to="">Ver programação da COPA PB </Link>
            </div>
            <div>
                <img src="" alt="jogadoras-disputando" />
            </div>
            
        </div>
    )
}