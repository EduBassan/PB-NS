import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function ExportarPlanilha() {
    const gerarPlanilhaJogadoras = () => {
        const data = localStorage.getItem("jogadoras");
        if (!data) {
            alert("Nenhuma jogadora encontrada.");
            return;
        }

        try {
            const parsed = JSON.parse(data);
            if (!Array.isArray(parsed) || parsed.length === 0) {
                return alert("Lista de jogadoras está vazia.");     
        }

            const infoNecessaria = parsed.map(j => ({
                Nome: j.nome,
                Sobrenome: j.sobrenome,
                Email: j.email,
                Telefone: j.telefone,
                DataDeNascimento: j.dataDeNascimento,
                Posição: j.posicao,
                Tipo: j.tipo,
            }));

            const worksheet = XLSX.utils.json_to_sheet(infoNecessaria);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Jogadoras");

            const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
            const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
            saveAs(dataBlob, "jogadoras.xlsx");
        } catch (err) {
            console.error("Erro ao processar jogadoras:", err);
        }
    };

    const gerarPlanilhaTimes = () => {
        const data = localStorage.getItem("times");
        if (!data) {
            return alert("Nenhum time encontrado.");   
        }

        try {
            const parsed = JSON.parse(data);
            if (!Array.isArray(parsed) || parsed.length === 0) {
                return alert("Lista de times está vazia.");
            }

            const infoNecessaria = parsed.map(t => ({
                Nome: t.nome,
                Cidade: t.cidade,
                Email: t.email,
                Telefone: t.telefone,
                Responsável: t.responsavel,
                Número: t.numero,
                Tipo: t.tipo,
            }));

            const worksheet = XLSX.utils.json_to_sheet(infoNecessaria);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Times");

            const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
            const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
            saveAs(dataBlob, "times.xlsx");
        } catch (err) {
            console.error("Erro ao processar times:", err);
        }
};
    return (
        <div className="p-4 flex flex-col gap-4 items-center">
            <h1 className="text-xl font-bold">Exportar Planilhas</h1>
            <div className="flex flex-col gap-4">
                <button
                onClick={gerarPlanilhaJogadoras}
                className="px-4 py-2 bg-white text-[#EE4D9A] shadow border-1 border-[#EE4D9A] cursor-pointer
                hover:bg-[#EE4D9A] hover:text-white hover:transition-all hover:duration-500"
                >
                Baixar Jogadoras
                </button>
                <button
                onClick={gerarPlanilhaTimes}
                className="px-4 py-2 bg-white text-[#EE4D9A] shadow border-1 border-[#EE4D9A] cursor-pointer
                hover:bg-[#EE4D9A] hover:text-white hover:transition-all hover:duration-500"
                >
                Baixar Times
                </button>
            </div>
        </div>
    );
}
