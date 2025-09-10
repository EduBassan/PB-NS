import { Link } from "react-router-dom"

export default function Footer () {
    return(
        <div className="bg-black text-white pr-50 pl-50 pt-50 pb-10">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <h1>Links</h1>
                    <Link to="">Início</Link>
                    <Link to="">Inscrições</Link>
                    <Link to="">Copa Passa a Bola</Link>
                    <Link to="">Calendário & Jogos</Link>
                    <Link to="">Times & Jogadoras</Link>
                    <Link to="">Apoiadores</Link>
                    <Link to="">Trabalhe conosco</Link>
                </div>
                <div className="flex flex-col">
                    <h1>Fique por dentro</h1>
                    <input type="text" />
                    <h6>Newsletter semanal — calendário, vagas de árbitro e destaques. Sem spam. Você pode sair quando quiser.</h6>
                    <button>Quero notícias</button>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <h1>Contato & redes</h1>
                        <Link to="">contato@passaabola.org</Link>
                        <Link to=""> +55 (81) 9XXXX-XXXX</Link>
                        <Link to="">Rua Exemplo, 123 — João Pessoa, PB</Link>
                        <div>
                            <a>Instagram ·</a>
                            <a>YouTube ·</a>
                            <a>TikTok ·</a>
                            <a>Facebook</a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1>Privacidade</h1>
                        <Link to="">Termos de Uso</Link>
                        <Link to="">Política de Privacidade</Link>
                        <Link to="">Política de Cookies</Link>
                        <Link to="">Aviso LGPD</Link>
                    </div>   
                </div>
            </div>
            <div className="flex flex-row items-center justify-center p-10">
                <p>PB</p>
                <h2>© 2025 Passa a Bola. Todos os direitos reservados.</h2>
                <p>PB</p>
            </div>
        </div>
    )
}