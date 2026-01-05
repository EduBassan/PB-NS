import React, { useState, useEffect } from "react";

export default function VideosDestaque() {
    const [idVideo, setVideo] = useState("")

    useEffect(() => {
        const aKey = import.meta.env.VITE_APP_API_KEY;

        const getData = async () => {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&q=passa+a+bola&maxResults=1&type=video&videoDuration=medium&channelId=UCGEtu-1QcpI_wRA7okljuJA&key=${aKey}`)

            const data = await response.json();
            setVideo(data.items[0].id.videoId)
        }


        getData()
    }, [])

    const embedUrl = `https://www.youtube.com/embed/${idVideo}`

    return (
        <div className="h-auto">
            <div className="flex justify-center items-center pt-12">
                <span className=" text-purple-800 text-xl md:text-2xl lg:text-5xl font-extrabold uppercase"> Novidades da Copa Passa Bola</span>
            </div>
            <div className="flex flex-wrap md:flex-nowrap w-full h-full justify-around py-8 px-10">
                <div className="aspect-video object-cover">
                    <iframe
                        className="rounded-xl"
                        width="450"
                        height="300"
                        src={embedUrl}
                        title="YouTube video player"
                        allowFullScreen
                    ></iframe> </div>

                <div className="aspect-video">

                    <iframe
                        className="rounded-xl"
                        width="450"
                        height="300"
                        src={embedUrl}
                        title="YouTube video player"
                        allowFullScreen
                    ></iframe>

                </div>
            </div>
        </div>
    )
}