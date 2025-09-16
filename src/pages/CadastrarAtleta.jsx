import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { carregarJogadoras } from "../js/storage";
import { Link } from "react-router-dom";

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

    const emailJaExiste = jogadoras.some((j) => j.email === form.email);
    
    if (emailJaExiste) {
        alert("Esse email já está sendo utilizado");
        return;
    }

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
    navigate("/PB-NS/dashboard/jogadora"); 
};

    return(
        <div className="bg-[#3C1A6E]">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3 h-full p-20 ">
                <div className="flex text-center">
                    <h1 className="hidden md:flex text-white text-[60px] font-bold uppercase">Se torne parte do time!</h1>
                    <h1 className="md:hidden flex text-white text-[30px] font-bold uppercase">Se torne parte do time!</h1>
                </div>
                <div>
                    <p className="text-white text-[20px]">Já possui conta?
                        <Link to={"/login/atleta"} 
                        className="text-[#EE4D9A] font-medium"> Login</Link>
                    </p>
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="nome" className="text-white text-[18px]">Nome</label>
                    <input type="text" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} 
                    className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E] " required id="nome" />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="sobrenome" className="text-white text-[18px]" >Sobrenome</label>
                    <input type="text" name="sobrenome" placeholder="Sobrenome" value={form.sobrenome} onChange={handleChange} 
                    className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E] " required id="sobrenome" />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="email" className="text-white text-[18px]">Email</label>
                    <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} 
                    className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E] " required id="email" />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="senha" className="text-white text-[18px]">Senha</label>
                    <input type="password" name="senha" placeholder="Senha" value={form.senha} onChange={handleChange} 
                    className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E] " required id="senha" />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="confirmar" className="text-white text-[18px]">Confirme a senha</label>
                    <input type="password" name="confirmSenha" placeholder="Confirmar senha" value={form.confirmSenha} onChange={handleChange} 
                    className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E]" required />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="data" className="text-white text-[18px]">Data de Nascimento</label>
                    <input type="date" name="dataDeNascimento" value={form.dataDeNascimento} onChange={handleChange} 
                    className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E]" required id="data" />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="posicao" className="text-white text-[18px]">Posição</label>
                    <select name="posicao" value={form.posicao} onChange={handleChange} 
                    className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E]" required id="posicao">
                        <option value="" className="bg-white text-[#EE4D9A]">Selecione a posição</option>
                        <option value="goleira" className="bg-white text-[#3C1A6E]">Goleira</option>
                        <option value="zagueira" className="bg-white text-[#3C1A6E]">Zagueira</option>
                        <option value="lateral" className="bg-white text-[#3C1A6E]">Lateral</option>
                        <option value="meio-campo" className="bg-white text-[#3C1A6E]">Meio-campo</option>
                        <option value="atacante" className="bg-white text-[#3C1A6E]">Atacante</option>
                    </select>
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="foto" className="text-white text-[18px]">Foto ( URL )</label>
                    <input type="text" name="foto" placeholder="URL da foto" value={form.foto} onChange={handleChange} 
                    className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E]" id="foto" />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="telefone"  className="text-white text-[18px]" >Telefone/WhatsApp</label>
                    <input type="tel" name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} 
                    className="border-1 p-2 w-[380px] text-white bg-[#3C1A6E] border-b-white border-t-[#3C1A6E] border-r-[#3C1A6E] border-l-[#3C1A6E]"required id="telefone" />
                </div>
                <label className="flex items-center gap-2 text-white">
                    <input type="checkbox" name="condicaoMedica" checked={form.condicaoMedica} onChange={handleChange} className="cursor-pointer" />
                    Possui condição médica?
                </label>
                <div className="hidden md:flex flex-col gap-5 items-center">
                    <button type="submit" className="bg-[#EE4D9A] text-white p-3 pr-23 pl-23 border-2 border-[#EE4D9A]
                        hover:bg-[#3C1A6E] hover:transition-all hover:duration-500 cursor-pointer"> Tudo pronto? Clique Aqui!</button>
                    <Link to="/cadastrar" className="border-2 border-[#EE4D9A] text-white p-1 pr-10 pl-10
                        hover:bg-[#EE4D9A] hover:text-white hover hover:border-[#EE4D9A] hover:transition-all hover:duration-500">Prefiro voltar</Link>
                </div>
                <div className="md:hidden flex flex-col gap-5 w-93 items-center">
                    <button type="submit" className="bg-[#EE4D9A] text-white p-3 pl-22 pr-22 border-2 border-[#EE4D9A]
                        hover:bg-[#3C1A6E] hover:transition-all hover:duration-500 cursor-pointer"> Tudo pronto? Clique Aqui!</button>
                    <Link to="/cadastrar" className="border-2 border-[#EE4D9A] text-white p-1 pr-10 pl-10 w-50 text-center
                        hover:bg-[#EE4D9A] hover:text-white hover hover:border-[#EE4D9A] hover:transition-all hover:duration-500">Prefiro voltar</Link>
                </div>
                
        </form>
        </div>
        
    )
}