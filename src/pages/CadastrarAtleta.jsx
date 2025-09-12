import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { carregarJogadoras } from "../js/storage";

export default function CadastrarAtleta () {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
        confirmSenha: "",
        dataDeNascimento: "",
        posicao: "",
        foto: "",
        telefone: "",
        condicaoMedica: false,
    });


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    if (form.senha !== form.confirmSenha) {
      alert("As senhas não conferem!");
      return;
    }

    const jogadoras = carregarJogadoras() || [];

    const novaJogadora = {
        id: Date.now(),
        nome: form.nome,
        sobrenome: form.sobrenome,
        senha: form.senha,
        dataDeNascimento: form.dataDeNascimento,
        posicao: form.posicao,
        foto: form.foto,
        email: form.email,
        telefone: form.telefone,
        condicaoMedica: form.condicaoMedica,
        possuiTime: false,
        tipo: "jogadora",
    };

    jogadoras.push(novaJogadora);
    localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
    localStorage.setItem("usuarioLogado", JSON.stringify(novaJogadora));

    alert("Conta criada com sucesso!");
    navigate("/dashboard/jogadora"); 
};

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 mx-auto mt-10 mb-10">
            <input type="text" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} className="border p-2" required />
            <input type="text" name="sobrenome" placeholder="Sobrenome" value={form.sobrenome} onChange={handleChange} className="border p-2" required />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2" required />
            <input type="password" name="senha" placeholder="Senha" value={form.senha} onChange={handleChange} className="border p-2" required />
            <input type="password" name="confirmSenha" placeholder="Confirmar senha" value={form.confirmSenha} onChange={handleChange} className="border p-2" required />
            <input type="date" name="dataDeNascimento" value={form.dataDeNascimento} onChange={handleChange} className="border p-2" required />
            <select name="posicao" value={form.posicao} onChange={handleChange} className="border p-2" required>
                <option value="">Selecione a posição</option>
                <option value="goleira">Goleira</option>
                <option value="zagueira">Zagueira</option>
                <option value="lateral">Lateral</option>
                <option value="meio-campo">Meio-campo</option>
                <option value="atacante">Atacante</option>
            </select>
            <input type="text" name="foto" placeholder="URL da foto" value={form.foto} onChange={handleChange} className="border p-2" />
            <input type="tel" name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} className="border p-2" required />
            <label className="flex items-center gap-2">
                <input type="checkbox" name="condicaoMedica" checked={form.condicaoMedica} onChange={handleChange} className="cursor-pointer" />
                Possui condição médica?
            </label>
            <button type="submit" className="bg-[#EE4D9A] text-white p-2 rounded cursor-pointer
            hover:bg-[#3C1A6E] hover:transition-all hover:duration-500">Criar conta</button>
        </form>
    )
}