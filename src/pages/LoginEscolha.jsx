import { Link } from "react-router-dom"


export default function LoginEscolha (){
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="p-5">
                <h1 className="text-[50px] font-bold uppercase text-center">Então, me diz...👀</h1>
            </div>
            <div className="flex flex-col gap-10">
                <button><Link to="/login/atleta" className="border-2 border-[#EE4D9A] bg-[#EE4D9A] text-xl p-3 pl-30 pr-30 text-white
                hover:border-[#3C1A6E] hover:bg-white hover:text-[#3C1A6E] hover:transition-all hover:duration-500">Sou uma atleta!</Link></button>
                <button><Link to="/login/time" className="border-2 border-[#EE4D9A] bg-[#EE4D9A] text-xl p-3 pl-[130px] pr-[130px] mt-[200px] text-white
                 hover:border-[#3C1A6E] hover:bg-white hover:text-[#3C1A6E] hover:transition-all hover:duration-500">Sou um time!</Link></button>
                 <button><Link to="/login/adm" className="border-2 border-[#EE4D9A] bg-[#EE4D9A] text-xl p-3 pl-[137px] pr-[137px] mt-[200px] text-white
                 hover:border-[#3C1A6E] hover:bg-white hover:text-[#3C1A6E] hover:transition-all hover:duration-500">Sou a ADM!</Link></button>
                <button><Link to="/" className="border-2 border-black p-1 pr-20 pl-20
                hover:bg-black hover:text-white hover hover:border-black hover:transition-all hover:duration-500">Prefiro voltar</Link></button>
            </div>
        </div>
    )
}