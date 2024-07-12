import Image from "next/image"

export default function VideoConexao() {
    return (
        <div className="relative w-full h-[400px]">
            <Image src='/ilustrações.png' layout="fill" objectFit="cover" alt="" />
            <div className="absolute inset-0 flex justify-center items-start mt-44">
                <iframe 
                    width="288" 
                    height="162"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    frameBorder="0"
                    allowFullScreen
                >
                </iframe>
            </div>
        </div>
    )   
}