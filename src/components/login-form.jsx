import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { carregarAdm } from "@/js/storage"

export function LoginForm({className,...props}) {

  const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const adm = carregarAdm();
        const user = adm.find(
            (a) => a.email === email
        );

        if (user) {
            localStorage.setItem("01", JSON.stringify({ ...user, tipo: "adm" }));
            navigate("/codigo");
        } else {
            alert("Email invalido");
        }
    };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form 
      onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a href="#" className="flex flex-col items-center gap-2 font-medium">
              <div className="flex size-8 items-center justify-center rounded-md">
                <img src="/logo.png" alt="logo_passa_a_bola" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-xl font-bold uppercase">Fala bebê</h1>
            <div className="text-center text-sm">
              Ops, chegou até aqui por engano?{" "}
              <Link to="/" className="underline underline-offset-4">
                Voltar ao início
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input 
              value={email} 
              onChange={
                (e) => setEmail(e.target.value)
              } 
              id="email" type="email" placeholder="m@example.com" required />
            </div>
            <Button type="submit" className="w-full bg-white text-[#EE4D9A] border-[1.9px] border-[#EE4D9A] selection:[#EE4D9A]
            hover:bg-[#EE4D9A] hover:text-white hover:transition-all hover:duration-500 cursor-pointer">
              Confirmar e seguir
            </Button>
          </div>
          </div>
      </form>
      <div
        className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        Ao continuar, você concorda com nossos <a href="#">Termos de Serviço</a>{" "}
        e <a href="#">Política de Privacidade</a>.
      </div>
    </div>
  );
}
