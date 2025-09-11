import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { carregarJogadoras } from "../js/storage";

export default function LoginAtleta () {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const jogadoras = carregarJogadoras();
        const user = jogadoras.find(
            (j) => j.email === email && j.senha === senha
        );

        if (user) {
            localStorage.setItem("usuarioLogado", JSON.stringify({ ...user, tipo: "jogadora" }));
            alert("Login realizado!");
            navigate("/dashboard/jogadora");
        } else {
            alert("Email ou senha incorretos!");
        }
    };

    return(
        <div className="flex h-screen justify-center items-center bg-[#EE4D9A]">
            <form className="flex flex-col gap-3 items-center"
                onSubmit={handleSubmit}
                >
                <div>
                    <h1 className="text-white text-[60px] font-semibold">Bem-vinda de volta!</h1>
                </div>
                <div>
                    <p className="text-white text-[20px]">Não tem conta?
                        <Link to={"/cadastrar/atleta"} 
                        className="text-[#3C1A6E] font-medium"> Registre-se</Link>
                    </p>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-white text-[18px]">Email</label>
                    <input value={email} 
                        onChange={
                            (e) => setEmail(e.target.value)
                        } 
                        type="email" 
                        id="email" 
                        className="text-white bg-[#EE4D9A] w-75 border-1 border-b-white border-t-[#EE4D9A] border-r-[#EE4D9A] border-l-[#EE4D9A]" required/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password01" className="text-white text-[18px]">Senha</label>
                    <input type="password"
                        value={senha}
                        onChange={
                            (e) => setSenha(e.target.value)
                        }
                        id="password01" 
                        className="text-white bg-[#EE4D9A] w-75 border-1 border-b-white border-t-[#EE4D9A] border-r-[#EE4D9A] border-l-[#EE4D9A]" required />
                </div>
                <div className="flex flex-col items-center gap-3">
                    <button type="submit" className="bg-[#3C1A6E] text-white p-3 pr-14 pl-14 cursor-pointer border-3 border-[#3C1A6E]
                    hover:bg-[#EE4D9A] hover:transition-all duration-500">Tudo pronto? Clique aqui</button>
                    <Link to="/login" 
                    className="text-white bg-[#EE4D9A] border-2 border-[#3C1A6E] p-1 pr-18 pl-18 text-[14px]
                    hover:bg-[#3C1A6E] hover:transition-all duration-500">Prefiro Voltar</Link>
                </div>
                
            </form>
        </div>
    )
}