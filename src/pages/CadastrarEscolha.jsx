import { Link } from "react-router-dom"

export default function CadastrarEscolha () {
    return (
         <div className="flex flex-col justify-center items-center h-screen">
            <div className="p-5">
                <h1 className="text-[50px] font-bold">Então, me diz...👀</h1>
            </div>
            <div className="flex flex-col gap-10">
                <button><Link to="/cadastrar/atleta" className="border-2 border-[#3C1A6E] bg-[#3C1A6E] text-xl p-3 pl-30 pr-30 text-white
                hover:border-[#EE4D9A] hover:bg-white hover:text-[#EE4D9A] hover:transition-all hover:duration-500">Sou uma atleta!</Link></button>
                <button><Link to="/cadastrar/time" className="border-2 border-[#3C1A6E] bg-[#3C1A6E] text-xl p-3 pl-[130px] pr-[130px] mt-[200px] text-white
                 hover:border-[#EE4D9A] hover:bg-white hover:text-[#EE4D9A] hover:transition-all hover:duration-500">Sou um time!</Link></button>
                <button><Link to="/" className="border-2 border-black p-1 pr-20 pl-20
                hover:bg-black hover:text-white hover hover:border-black hover:transition-all hover:duration-500">Prefiro voltar</Link></button>
            </div>
        </div>
    )
}