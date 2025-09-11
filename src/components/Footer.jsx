import { Link } from "react-router-dom"
import pb from '../assets/Pb-escrita.png'

export default function Footer () {
    return(
        <footer className="bg-black text-white pr-50 pl-50 pt-30 pb-5 hidden lg:flex">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <h1 className="text-gray-400 font-bold">Links</h1>
                    <Link to="" className="font-medium">Início</Link>
                    <Link to="" className="font-medium">Inscrições</Link>
                    <Link to="" className="font-medium">Copa Passa a Bola</Link>
                    <Link to="" className="font-medium">Calendário & Jogos</Link>
                    <Link to="" className="font-medium">Times & Jogadoras</Link>
                    <Link to="" className="font-medium">Apoiadores</Link>
                    <Link to="" className="font-medium">Trabalhe conosco</Link>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-gray-400 font-bold">Fique por dentro</h1>
                        <div>
                            <input type="email" className="bg-white p-3 text-black w-178" placeholder="Digite aqui seu email" />
                            <div className="flex justify-start items-center">
                                <h6 className="text-[14px]">Newsletter semanal — calendário, vagas de árbitro e destaques. Sem spam. Você pode sair quando quiser.</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center items-center">
                        <button className="bg-[#EE4D9A] border-[2px] border-[#EE4D9A] w-35 p-3 hover:bg-black hover:transition-all hover:duration-700"><a href="">Quero notícias</a></button>
                    </div>
                    
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <h1 className="text-gray-400 font-bold">Contato & redes</h1>
                        <Link to="" className="font-medium">contato@passaabola.org</Link>
                        <Link to="" className="font-medium"> +55 (81) 9XXXX-XXXX</Link>
                        <Link to="" className="font-medium">Rua Exemplo, 123 — João Pessoa, PB</Link>
                        <div>
                            <a href="https://www.instagram.com/passaabola/" className="font-medium hover:text-[#EE4D9A]" target="_blank" rel="noopener noreferrer">Instagram ·</a>
                            <a href="https://www.youtube.com/@passabola" className="font-medium hover:text-[#EE4D9A]" target="_blank" rel="noopener noreferrer">YouTube ·</a>
                            <a href="https://www.tiktok.com/@passabola/" className="font-medium hover:text-[#EE4D9A]" target="_blank" rel="noopener noreferrer">TikTok ·</a>
                            <a href="https://www.facebook.com/oficialpassaabola/" className="font-medium hover:text-[#EE4D9A]" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-gray-400 font-bold">Privacidade</h1>
                        <Link to="" className="font-medium hover:text-[#EE4D9A]">Termos de Uso</Link>
                        <Link to="" className="font-medium hover:text-[#EE4D9A]">Política de Privacidade</Link>
                        <Link to="" className="font-medium hover:text-[#EE4D9A]">Política de Cookies</Link>
                        <Link to="" className="font-medium hover:text-[#EE4D9A]">Aviso LGPD</Link>
                    </div>   
                </div>
            </div>
            <div className="flex flex-row items-center justify-center p-10">
                <img src={pb} alt="Pb-escrita" className="w-30" />
                <h2>© 2025 Passa a Bola. Todos os direitos reservados.</h2>
                <img src={pb} alt="Pb-escrita" className="w-30" />
            </div>
        </footer>
    )
}