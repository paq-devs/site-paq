import Image from 'next/image'
import './cardImpaqtrometro.css'
import Impaqtrometro from './Impaqtrometro';


type props = {
  image: any;
  numero: string;
  titulo: string;
  descricao: string;
};

export default function CardImpaqtrometro({ image, numero, titulo, descricao }: props) {
    return (
        <div className="ImpaqtrometroCardItem">
            <div className='ImpaqtrometroTextos'>
                <div className='ImpaqtrometroTextosHeader'>
                    <div className='iconeImpaqtrometro'>
                        <Image src={image} width={50} height={50} alt='' className='aspect-auto'/>
                    </div>
                    <h2 className='cardImpaqtrometroTitulo'>+<span className='text-azul-paq'>{numero}</span><br/>
                    {titulo}
                    </h2>
                </div>
                 <p className='cardImpaqtrometroTexto'>{descricao}</p>
            </div>
           
        </div>
       
    )
}
