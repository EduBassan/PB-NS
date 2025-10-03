import { LoginCodigo } from "@/components/login-codigo";
import { Alert, AlertDescription, AlertTitle, } from "@/components/ui/alert"
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"

export default function CodigoUnico () {
    const adm = JSON.parse(localStorage.getItem("01"))
    return (
        <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div>
                <Alert variant="destructive">
                    <AlertCircleIcon />
                    <AlertTitle>Estamos quase lá!</AlertTitle>
                    <AlertDescription>
                    <p>Como é apenas um protótipo, o envio de e-mail está desativado.<br/> Use o código abaixo para continuar:</p>
                    <ul className="list-inside list-disc text-sm">
                        <li>{adm.codigo}</li>
                    </ul>
                    </AlertDescription>
                </Alert>
            </div>
            <div className="w-full max-w-sm">
                <LoginCodigo />
            </div>
        </div>
    )
}