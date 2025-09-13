// src/components/VideoFutebol.jsx
export default function VideoFutebol() {
  return (
    <div>
      <div className="flex lg:hidden justify-center items-center rounded-">
        <iframe
          width="470"
          height="270"
          src="https://www.youtube.com/embed/gqrbCI-T3B8"
          title="Vídeo de Futebol"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="hidden lg:flex justify-center items-center rounded-">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/gqrbCI-T3B8"
          title="Vídeo de Futebol"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
