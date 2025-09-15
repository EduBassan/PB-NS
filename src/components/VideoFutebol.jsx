// src/components/VideoFutebol.jsx
export default function VideoFutebol() {
  return (
    <div>
      <div className="flex justify-center items-center mb-10">
        <iframe className="w-80 h-45 md:w-160 md:h-90" src="https://www.youtube.com/embed/hKSArxUd4ZI?si=0xJmQoSxcYb0YQEH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </div>
  );
}
