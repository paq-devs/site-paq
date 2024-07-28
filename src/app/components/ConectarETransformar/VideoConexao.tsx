"use client";
import "./VideoConexao.css";

export default function VideoConexao() {
  return (
    <div className="videoContainer">
      <iframe
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        allowFullScreen
        className="rounded-md"
      ></iframe>
    </div>
  );
}
