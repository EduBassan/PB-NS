import { Link } from "react-router-dom";

export default function LoginAtleta () {
    return(
        <div className="flex h-screen bg-[#EE4D9A]">
            <div>
                <div>
                    <h1>Se torne parte do time!</h1>
                </div>
                <div>
                    <p>já possui conta?<Link> Clique aqui!</Link></p>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="">Senha</label>
                    <input type="password" />
                </div>
                

            </div>
        </div>
    )
}