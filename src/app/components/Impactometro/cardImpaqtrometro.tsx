import Image from 'next/image'
import './cardImpaqtrometro.css'


type props = {
  image: any;
  numero: string;
  titulo: string;
  descricao: string;
};

export default function CardImpaqtrometro({ image, numero, titulo, descricao }: props) {
    return (
        <div>
            <div className='hidden lg:block bg-[#122329] py-8 w-[403px] h-[344px] rounded-[40px]'>
                <div className='flex items-center gap-4'>
                    <div className='iconeImpaqtrometro'>
                        <Image src={image} width={92} height={79} alt='' className='aspect-auto'/>
                    </div>
                    <h2 className='cardImpaqtrometroTitulo'>+<span className='text-azul-paq'>{numero}</span><br/>
                    {titulo}
                    </h2>
                </div>
            <p className='cardImpaqtrometroTexto w-80 ml-16'>{descricao}</p>
            </div>
            <div className='bg-[#122329] py-8 w-[244px] h-[208px] rounded-[40px] lg:hidden'>
                <div className='flex items-center gap-4'>
                    <div className='iconeImpaqtrometro'>
                        <Image src={image} width={55} height={47} alt='' className='aspect-auto'/>
                    </div>
                    <h2 className='cardImpaqtrometroTitulo'>+<span className='text-azul-paq'>{numero}</span><br/>
                    {titulo}
                    </h2>
                </div>
                <p className='cardImpaqtrometroTexto w-36 ml-20'>{descricao}</p>
            </div>
        </div>
       
    )
}
