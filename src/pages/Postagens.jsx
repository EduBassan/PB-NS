// Essa página é completamente desnecessária e não estava no planejamento do projeto, mas como era necessário usar uma API, ela acabou entrando. O ideal mesmo seria a página de apoiadores

import { useEffect, useState } from "react";

export default function Postagens () {
    const [posts, setPosts] = useState([]);
    const [postSelecionado, setPostSelecionado] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }, []);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex justify-center items-center text-center">
                <h1 className="text-3xl font-bold mb-6 text-[#3C1A6E] uppercase">Falas de atletas na última Copa PB!</h1>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post) => (
                <div key={post.id} className="bg-white shadow-md p-4 border border-gray-200 text-center">
                    <h2 className="text-xl font-semibold text-[#EE4D9A]">{post.title}</h2>
                    <p className="text-gray-600 mt-2 line-clamp-3">{post.body}</p>
                    <button className="mt-4 border-2 border-[#3C1A6E] text-[#3C1A6E] p-1 pr-8 pl-8 cursor-pointer
                    hover:bg-[#3C1A6E] hover:text-white hover:transition-all hover:duration-500" onClick={() => setPostSelecionado(post)}>Ver mais</button>
                </div>
                ))}
            </div>

            {postSelecionado && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="bg-white shadow-lg max-w-lg w-full p-6 relative text-center">
                        <button className="absolute top-2 right-2 text-gray-600 hover:text-red-600 cursor-pointer"  onClick={() => setPostSelecionado(null)}>✕</button>
                        <h2 className="text-2xl font-bold text-[#3C1A6E] mb-4">{postSelecionado.title}</h2>
                        <p className="text-gray-700">{postSelecionado.body}</p>
                    </div>
                </div>
            )}
        </div>
  );
}