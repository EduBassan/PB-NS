import React, { useState, useEffect } from "react";

export default function VideosDestaque() {
    const [idVideo, setVideo] = useState("")
    const [posts, setPosts] = useState([]);
    const [postSelecionado, setPostSelecionado] = useState(null);


    useEffect(() => {
        const aKey = import.meta.env.VITE_APP_API_KEY;

        const getData = async () => {
            const response1 = await fetch(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&q=passa+a+bola&maxResults=2&type=video&videoDuration=medium&channelId=UCGEtu-1QcpI_wRA7okljuJA&key=${aKey}`)

            const data1 = await response1.json();
            console.log(data1)
            setVideo(data1.items[0].id.videoId, data1.items[1].id.videoId)

           const response = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?order=relevance&part=snippet&videoId=${data1.items[0].id.videoId}&maxResults=6&key=${aKey}`);

           const data = await response.json();

            let comentarios = []
            for(let num = 0; num < 6;  num++ ){
                comentarios.push({
                    title: `${data.items[num].snippet.topLevelComment.snippet.textOrigina}`,
                    text: `${data.items[num].snippet.topLevelComment.snippet.authorDisplayName}`
                })
            }
            console.log(comentarios)

           setPosts(comentarios);

        }
        getData()
    }, []);

    const embedUrl = [`https://www.youtube.com/embed/${idVideo[0]}?modestbranding=1`, `https://www.youtube.com/embed/${idVideo[1]}?modestbranding=1`]

    return (
        <div className="flex flex-col">
        <div className="h-auto">
            <div className="flex justify-center items-center pt-12">
                <span className=" text-[#3C1A6E] text-3xl lg:text-5xl font-extrabold uppercase"> Não perca as novidades</span>
            </div>
            <div className="flex flex-col lg:flex-row w-full h-auto gap-8 py-8 px-14 justify-center items-center">
                <div className="w-full mx-10 max-w-2xl shadow-xl aspect-video shadow-pink-300 hover:scale-105 transition-all duration-400 rounded-xl overflow-hidden">
                    <iframe
                        className="w-full h-full"
                        src={embedUrl[0]}
                        title="YouTube video player"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="w-full mx-10 max-w-2xl shadow-xl aspect-video shadow-purple-300 hover:scale-105 transition-all duration-400 rounded-xl overflow-hidden">
                    <iframe
                        className="w-full h-full"
                        src={embedUrl[1]}
                        title="YouTube video player"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-3xl font-bold mb-2 text-[#3C1A6E] uppercase">Nossa torcida vem em peso</h1>
                <p className="text-[#3C1A6E] text-sm lg:text-xl">Veja os principais comentários...</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post) => (
                <div key={post.id} className="bg-white shadow-md p-4 border border-gray-200 text-center">
                    <h2 className="text-xl font-semibold text-[#EE4D9A]">{post.title}</h2>
                    <p className="text-gray-600 mt-2 line-clamp-3">{post.text}</p>
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
        </div>
    )
}