import { Link } from "react-router-dom"
import NS from "../assets/NS.jpg"


export default function PageNotFound () {
    return (
        <div className="bg-[#001D5A] h-screen flex flex-col justify-center items-center text-center gap-6">
            <div>
                <div className="flex justify-center items-center"> 
                    <img src={NS} alt="" className="w-11" />
                </div>
                <h1 className="text-white font-bold text-[30px]">Ih, deu ruim! Essa rota tá mais perdida que juiz sem VAR.</h1>
                <h3 className="text-[#B70B2F] font-bold text-[20px]">Tenta recarregar ou volta pro campo principal antes que vire gol contra!</h3>  
            </div>        
            <Link to="/" className="border-[#B70B2F] border-2 p-2 pr-17 pl-17 text-[18px] text-white
            hover:bg-[#B70B2F] hover:transition-all hover:duration-500">Voltar</Link>

        </div>
    )
}