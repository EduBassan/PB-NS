export default function SegundaSeccao () {
    return (
        <section className="bg-pink-500 text-white py-10">
            <div className="max-w-6xl mx-auto hidden lg:flex flex-row justify-between items-center gap-12 text-center">
                <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                    Total de Atletas
                </h3>
                <p className="text-[100px] font-extrabold leading-tight mt-2 ml-5">+100</p>
                </div>

                <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                    Total de Clubes
                </h3>
                <p className="text-[100px] font-extrabold leading-tight mt-2 mr-5">+1220</p>
                </div>
            </div>
            <div className=" lg:hidden flex justify-center items-center text-center">
                <h1 className="text-4xl font-extrabold leading-tight">
                    ✨ FALA BEBÊ ✨
                </h1>
            </div>
        </section>
    )
}