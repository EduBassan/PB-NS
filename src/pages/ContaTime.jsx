import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ContaTime () {
    const [usuario, setUsuario] = useState(null);
    const [form, setForm] = useState({
        nome: "",
        cidade: "",
        responsavel: "",
        email: "",
        telefone: "",
        foto: "",
        corP: "",
        corS: "",
        instagram: "",
        youtube: "",
        x: "",
        tiktok: "",
    });

    useEffect(() => {
        const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
        if (usuarioLogado && usuarioLogado.tipo === "time") {
        setUsuario(usuarioLogado);
        setForm(usuarioLogado);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const salvarAlteracoes = () => {
        let times = JSON.parse(localStorage.getItem("times")) || [];
        times = times.map((t) =>
            t.id === usuario.id ? { ...t, ...form } : t
        );

        localStorage.setItem("times", JSON.stringify(times));

        const usuarioAtualizado = { ...usuario, ...form };
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtualizado));

        setUsuario(usuarioAtualizado);
        alert("Alterações salvas com sucesso!");
    };

    return (
        <div className="flex flex-col">
            <div className="flex border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white w-240 gap-5">
                <Link to="/dashboard/clube" className="font-bold border-3 border-b-[#EE4D9A] border-t-white border-r-white border-l-white p-2">Conta</Link>
                <Link to="/dashboard/clube/jogadoras" className=" border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Times</Link>
                <Link to="/dashboard/clube/candidatas" className=" border-3 border-b-white border-t-white border-r-white border-l-white p-2
                hover:border-b-[#EE4D9A] hover:transition-all hover:duration-400">Pedidos</Link>
            </div>
            <div className="flex flex-col w-240">
                <div className="flex border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white pt-2 pb-2 pl-3 ">
                    <h1 className="font-bold text-[50px]">CONTA</h1>
                </div>
                <div>
                    <h1 className="font-bold text-[30px] pl-3 pt-2">Editar informações</h1>
                </div>
                <div className="flex flex-row gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="nome" className="pl-2 pb-1 font-medium">Nome</label>
                        <input type="text"
                            name="nome"
                            placeholder="Nome"
                            value={form.nome}
                            onChange={handleChange}
                            className="border-2 border-[#EE4D9A] p-2 mb-3 w-117.5"
                            id="nome"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="resprincipal" className="pl-2 pb-1 font-medium">Responsável principal</label>
                        <input
                            type="text"
                            name="resprincipal"
                            placeholder="Responsável principal"
                            value={form.responsavel}
                            onChange={handleChange}
                            className="border-2 border-[#EE4D9A] p-2 mb-3 w-117.5"
                            id="resprincipal"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="pl-2 pb-1 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="border-2 border-[#EE4D9A] p-2 mb-3"
                        id="email"
                    />
                </div>
                <div className="flex flex-row gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="corP" className="pl-2 pb-1 font-medium">Cor primária do time</label>
                        <input type="color" 
                            name="corP"
                            value={form.corP || ""}
                            onChange={handleChange}
                            className="w-117.5"
                            id="corP" 
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="corS" className="pl-2 pb-1 font-medium">Cor secundária do time</label>
                        <input type="color" 
                            name="corS"
                            value={form.corS || ""}
                            onChange={handleChange}
                            className="w-117.5 mb-3"
                            id="corP" 
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                   <label htmlFor="telefone" className="pl-2 pb-1 font-medium">Telefone/WhatsApp</label>
                    <input
                        type="text"
                        name="telefone"
                        placeholder="Telefone/WhatsApp"
                        value={form.telefone}
                        onChange={handleChange}
                        className="border-2 border-[#EE4D9A] p-2 mb-3"
                        id="telefone"
                    /> 
                </div>
                <div className="flex flex-col">
                    <label htmlFor="foto" className="pl-2 pb-1 font-medium">FOTO ( URL )</label>
                    <input
                        type="text"
                        name="foto"
                        placeholder="URL da foto"
                        value={form.foto || ""}
                        onChange={handleChange}
                        className="border-2 border-[#EE4D9A] p-2 mb-3"
                        id="foto"
                    />
                    {form.foto && (
                        <div className="p-3">
                            <img
                                src={form.foto}
                                alt="Pré-visualização"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                        </div>
                    )}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="instagram" className="pl-2 pb-1 font-medium">Instagram</label>
                    <input
                        type="text"
                        name="instagram"
                        placeholder="Instagram"
                        value={form.instagram || ""}
                        onChange={handleChange}
                        className="border-2 border-[#EE4D9A] p-2 mb-3"
                        id="instagram"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="youtube" className="pl-2 pb-1 font-medium">Youtube</label>
                    <input
                        type="text"
                        name="youtube"
                        placeholder="YouTube"
                        value={form.youtube || ""}
                        onChange={handleChange}
                        className="border-2 border-[#EE4D9A] p-2 mb-3"
                        id="youtube"
                    /> 
                </div>
                <div className="flex flex-col">
                    <label htmlFor="x" className="pl-2 pb-1 font-medium">X</label>
                    <input
                        type="text"
                        name="x"
                        placeholder="X (Twitter)"
                        value={form.x || ""}
                        onChange={handleChange}
                        className="border-2 border-[#EE4D9A] p-2 mb-3"
                        id="x"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="tiktok" className="pl-2 pb-1 font-medium">TikTok</label>
                     <input
                        type="text"
                        name="tiktok"
                        placeholder="TikTok"
                        value={form.tiktok || ""}
                        onChange={handleChange}
                        className="border-2 border-[#EE4D9A] p-2 mb-3"
                        id="tiktok"
                    />
                </div>
                <div className="flex justify-end border-2 border-b-[#3C1A6E] border-t-white border-r-white border-l-white w-240 pb-5 mb-20 ">
                    <button onClick={salvarAlteracoes}
                    className="bg-[#3C1A6E] text-white p-2 cursor-pointer pr-18 pl-18
                    hover:bg-[#EE4D9A] hover:transition-all hover:duration-500 ">Salvar</button>
                </div>
            </div>
        </div>
    )
}