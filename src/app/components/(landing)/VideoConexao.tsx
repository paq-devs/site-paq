import Image from "next/image"

export default function VideoConexao() {
    return (
        <div className="relative w-full h-[300px]">
            <Image src='/ilustrações.png' layout="fill" objectFit="cover" alt="" />
            <div className="absolute inset-0 flex justify-center items-start mt-28 shirink-0 ">
                <iframe 
                    width="330" 
                    height="200"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-md"
                >
                </iframe>
            </div>
        </div>
    )   
}