import { Link } from "react-router-dom"
import pb from '../assets/Pb-escrita.png'

export default function Footer () {

    return(
        <footer className="bg-black text-white pt-20 pb-5">
            <div className="lg:flex flex-row justify-center hidden gap-18">
                <div className="flex flex-col">
                    <h1 className="text-gray-400 font-bold ">Links</h1>
                    <Link to="/PB-NS" className="font-medium">Início</Link>
                    <Link to="/cadastrar" className="font-medium">Inscrições</Link>
                    <Link to="/PB-NS/Copa" className="font-medium">Copa Passa a Bola</Link>
                    <Link to="/PB-NS/Copa" className="font-medium">Calendário & Jogos</Link>
                    <Link to="/PB-NS/Copa/tabela" className="font-medium">Times & Jogadoras</Link>
                    <Link to="" className="font-medium">Apoiadores</Link>
                    <Link to="" className="font-medium">Trabalhe conosco</Link>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-gray-400 font-bold">Fique por dentro</h1>
                        <form>
                            <input type="email" className="bg-white p-3 text-black w-120" placeholder="Digite aqui seu email" />
                            <div className="flex justify-start items-center">
                                <h6 className="text-[10px]">Newsletter semanal — calendário, vagas de árbitro e destaques. Sem spam. Você pode sair quando quiser.</h6>
                            </div>
                            <div className="flex justify-center items-center">
                                <button onClick={(e) => {e.target.addEventListener(alert("Ainda estamos trabalhando nessa função"))}} type="submit" className="bg-[#EE4D9A] border-[2px] border-[#EE4D9A] w-35 p-2.5 mt-3 hover:bg-black hover:transition-all hover:duration-700"><a href="">Quero notícias</a></button>
                            </div>
                        </form>
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

            <div className="lg:flex flex-row items-center justify-center p-10 hidden">
                <img src={pb} alt="Pb-escrita" className="w-30" />
                <h2>© 2025 Passa a Bola. Todos os direitos reservados.</h2>
                <img src={pb} alt="Pb-escrita" className="w-30" />
            </div>

            <div className="lg:hidden hidden md:flex flex-col text-white gap-16">
                <form className="flex flex-col justify-center items-center gap-3">
                    <h1 className="text-gray-400 font-bold text-[20px]">Fique por dentro</h1>

                    <div className="flex justify-start items-center flex-col">
                        <input type="email" className="bg-white p-3 text-black w-120" placeholder="Digite aqui seu email" />
                        <h6 className="text-[10px]">Newsletter semanal — calendário, vagas de árbitro e destaques. Sem spam. Você pode sair quando quiser.</h6>
                    </div>
                    <button onClick={(e) => {e.target.addEventListener(alert("Ainda estamos trabalhando nessa função"))}} type="submit" className="bg-[#EE4D9A] border-[2px] text-[13px] border-[#EE4D9A] w-30 p-2 
                    hover:bg-black hover:transition-all hover:duration-700 cursor-pointer">Quero notícias</button>
                </form>
                <div className="flex flex-row justify-center items-start gap-18">
                    <div className="flex flex-col">
                        <h1 className="text-gray-400 font-bold ">Links</h1>
                        <Link to="" className="font-medium">Início</Link>
                        <Link to="" className="font-medium">Inscrições</Link>
                        <Link to="" className="font-medium">Copa Passa a Bola</Link>
                        <Link to="" className="font-medium">Calendário & Jogos</Link>
                        <Link to="" className="font-medium">Times & Jogadoras</Link>
                        <Link to="" className="font-medium">Apoiadores</Link>
                        <Link to="" className="font-medium">Trabalhe conosco</Link>
                    </div>
                    <div>
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
            <div className="lg:hidden hidden md:flex flex-row items-center justify-center p-10">
                <img src={pb} alt="Pb-escrita" className="w-30" />
                <h2>© 2025 Passa a Bola. Todos os direitos reservados.</h2>
                <img src={pb} alt="Pb-escrita" className="w-30" />
            </div>

            <div className="md:hidden flex flex-col justify-center items-center gap-5">
                <form className="flex flex-col justify-center items-center gap-3">
                    <h1 className="text-gray-400 font-bold text-[20px]">Fique por dentro</h1>

                    <div className="flex justify-start items-center flex-col">
                        <input type="email" className="bg-white p-3 text-black w-90" placeholder="Digite aqui seu email" />
                        <h6 className="text-[7.7px]">Newsletter semanal — calendário, vagas de árbitro e destaques. Sem spam. Você pode sair quando quiser.</h6>
                    </div>
                    <button onClick={(e) => {e.target.addEventListener(alert("Ainda estamos trabalhando nessa função"))}} type="submit" className="bg-[#EE4D9A] border-[2px] text-[13px] border-[#EE4D9A] w-30 p-2 
                    hover:bg-black hover:transition-all hover:duration-700 cursor-pointer">Quero notícias</button>
                </form>

                <div className="flex flex-col justify-center items-center text-center gap-10">
                    <div className="flex flex-col">
                        <h1 className="text-gray-400 font-bold ">Links</h1>
                        <Link to="" className="font-medium">Início</Link>
                        <Link to="" className="font-medium">Inscrições</Link>
                        <Link to="" className="font-medium">Copa Passa a Bola</Link>
                        <Link to="" className="font-medium">Calendário & Jogos</Link>
                        <Link to="" className="font-medium">Times & Jogadoras</Link>
                        <Link to="" className="font-medium">Apoiadores</Link>
                        <Link to="" className="font-medium">Trabalhe conosco</Link>
                    </div>
                    <div>
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
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-gray-400 font-bold">Privacidade</h1>
                        <Link to="" className="font-medium hover:text-[#EE4D9A]">Termos de Uso</Link>
                        <Link to="" className="font-medium hover:text-[#EE4D9A]">Política de Privacidade</Link>
                        <Link to="" className="font-medium hover:text-[#EE4D9A]">Política de Cookies</Link>
                        <Link to="" className="font-medium hover:text-[#EE4D9A]">Aviso LGPD</Link>
                    </div>  
                </div> 
                <div className="md:hidden flex flex-row items-center justify-center text-center p-10">
                    <h2>© 2025 Passa a Bola. Todos os direitos reservados.</h2>
                </div>
            </div>   
        </footer>
    )
}