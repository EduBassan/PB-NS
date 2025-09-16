import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { carregarTimes } from "../js/storage";

export default function CadastrarTime () {
    const navigate = useNavigate();
    const timess = carregarTimes() || [];

    const [form, setForm] = useState({
        nome: "",
        cidade: "",
        responsavel: "",
        email: "",
        telefone: "",
        senha: "",
        confirmSenha: "",
        foto: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.senha !== form.confirmSenha) {
        alert("As senhas não conferem!");
        return;
        }

        const emailJaExiste = timess.some((time) => time.email === form.email);
        if (emailJaExiste) {
            alert("Esse email já está sendo utilizado");
            return;
        }

        const times = carregarTimes() || [];

        const novoId = times.length > 0 ? Math.max(...times.map((t) => t.id)) + 1 : 1;

        const novoTime = {
            id: novoId,
            nome: form.nome,
            cidade: form.cidade,
            responsavel: form.responsavel,
            email: form.email,
            telefone: form.telefone,
            foto: form.foto,
            senha: form.senha,
            jogadoras: [], 
            candidatas: [], 
            tipo: "time",
        };

        times.push(novoTime);
        localStorage.setItem("times", JSON.stringify(times));
        localStorage.setItem("usuarioLogado", JSON.stringify(novoTime));

        alert("Time criado com sucesso!");
        navigate("/dashboard/clube");
};

    return(
        <div className="bg-[#3C1A6E]">
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3 h-screen ">
                    <div className="flex text-center">
                        <h1 className="hidden lg:flex text-white text-[52px] font-bold uppercase">Faça parte da nossa linha de frente!</h1>
                        <h1 className="lg:hidden hidden md:flex text-white text-[38px] font-bold uppercase">Faça parte da nossa linha de frente!</h1>
                        <h1 className="md:hidden flex text-white text-[25px] font-bold uppercase">Faça parte da nossa linha de frente!</h1>
                    </div>
                    <div>
                        <p className="text-white text-[20px]">Já possui conta?
                            <Link to={"/login/time"} 
                            className="text-[#EE4D9A] font-medium"> Login</Link>
                        </p>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="nome" className="text-white text-[18px]">Nome</label>
                        <input type="text" name="nome" placeholder="Nome do time" value={form.nome} onChange={handleChange} 
                        className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E] " required id="nome"/>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="cidade" className="text-white text-[18px]">Cidade</label>
                        <input type="text" name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} 
                        className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E]" required id="cidade"/>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="responsavel" className="text-white text-[18px]">Responsável Principal</label>
                        <input type="text" name="responsavel" placeholder="Responsável" value={form.responsavel} onChange={handleChange} 
                        className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E]" required id="responsavel"/>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="email" className="text-white text-[18px]">Email</label>
                        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} 
                        className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E]" required id="email"/>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="telefone" className="text-white text-[18px]">Telefone</label>
                        <input type="tel" name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} 
                        className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E]"required id="telefone"/>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="foto" className="text-white text-[18px]">Foto</label>
                        <input type="text" name="foto" placeholder="URL da foto do time" value={form.foto} onChange={handleChange} 
                        className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E]" id="foto"/>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="senha" className="text-white text-[18px]">Senha</label>
                        <input type="password" name="senha" placeholder="Senha" value={form.senha} onChange={handleChange} 
                        className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E]" required id="senha"/>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="confirmar" className="text-white text-[18px]">Confirme a senha</label>
                        <input type="password" name="confirmSenha" placeholder="Confirmar senha" value={form.confirmSenha} onChange={handleChange} 
                        className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E]" required id="confirmar"/>
                    </div>
                    <button type="submit" className="bg-[#EE4D9A] text-white p-3 pr-23 pl-23 border-2 border-[#EE4D9A]
                    hover:bg-[#3C1A6E] hover:transition-all hover:duration-500 cursor-pointer"> Tudo pronto? Clique Aqui!</button>
                    <Link to="/cadastrar" className="border-2 border-[#EE4D9A] text-white p-1 pr-10 pl-10
                    hover:bg-[#EE4D9A] hover:text-white hover hover:border-[#EE4D9A] hover:transition-all hover:duration-500">Prefiro voltar</Link>
                </form>
        </div>
    )
}