import { useNavigate } from "react-router-dom";
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

        const novoTime = {
            id: Date.now(),
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 mx-auto mt-10 mb-10">
        <input type="text" name="nome" placeholder="Nome do time" value={form.nome} onChange={handleChange} className="border p-2" required/>
        <input type="text" name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} className="border p-2" required/>
        <input type="text" name="responsavel" placeholder="Responsável" value={form.responsavel} onChange={handleChange} className="border p-2" required/>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2" required/>
        <input type="tel" name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} className="border p-2"required/>
        <input type="text" name="foto" placeholder="URL da foto do time" value={form.foto} onChange={handleChange} className="border p-2"/>
        <input type="password" name="senha" placeholder="Senha" value={form.senha} onChange={handleChange} className="border p-2" required/>
        <input type="password" name="confirmSenha" placeholder="Confirmar senha" value={form.confirmSenha} onChange={handleChange} className="border p-2" required/>
        <button type="submit" className="bg-[#EE4D9A] text-white p-2 rounded hover:bg-[#3C1A6E] hover:transition-all hover:duration-500 cursor-pointer"> Criar time</button>
    </form>
    )
}