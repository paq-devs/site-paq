export default function Cards() {
    const Cards = [
        {
            id: 0,
            icon: "'",
            text: "“Ser mentor do PAQ é ter a certeza de que estamos pavimentando o caminho para proporcionar oportunidades para os educandos. Quando fiz a entrevista para ser mentor do PAQ me foi questionado se eu tinha experiência em mentorias, falei que não tinha mas que só precisava de uma oportunidade, e a oportunidade me foi dada. Por isso acredito que fazer parte do PAQ é sobre criar oportunidades para todas as partes.”",
            name: "Thiago Cerutti",
            role: "Mentor"
        },
        {
            id: 1,
            icon: "",
            text: "Essa ONG é incrível para nós jovens que tem muito potencial mais pouca oportunidade de mostrar nossa verdadeira força, ela nos impulsiona, e cria formatos gamificados para nos deixar engajados nos estudos, além de nós colocar em lugares tecnológicos super reconhecidos! Obrigado PAQ por tudo! 💙",
            name: "Pietra Rocha",
            role: "Educanda"
        },
        {
            id: 2,
            icon: "",
            text: "Aos 15 anos, comecei a me interessar por tecnologia através do “Prototipando a Quebrada”, que me apresentou novidades inesperadas. Com o PAQ, explorei o mercado de tecnologia e suas profissões, descobrindo mais sobre mim mesma e desenvolvendo habilidades técnicas e interpessoais. Inicialmente, queria seguir na área de design de interface para sites e aplicativos, mas ficava frustrada por não ver minhas criações em prática. Em 2024, decidi explorar a programação e me apaixonei por ela, percebendo que era o caminho que eu gostaria de seguir.",
            name: "Hadjamiris Rocha Silva",
            role: "Educanda"
        },
        {
            id: 3,
            icon: "",
            text: "O PAQ me fez acreditar que podemos transformar o futuro, mas, para isso, é preciso se organizar e agir. Quis ser voluntária do PAQ porque vi uma ONG preocupada em fazer a mudança de verdade, que presta auxílio, mas que também abre caminhos para mudar a realidade da juventude de periferia. Uma instituição que não é só discurso, é ação em movimento.",
            name: "Gabriela Silva",
            role: "Mentor"
        },
        {
            id: 4,
            icon: "",
            text: "Muitos dizem que o PAQ é uma família, e até uns meses atrás eu não tinha tanta fé nisso. Mas vivendo cada dia da imersão intensamente, descobri que o PAQ não é apenas uma família, mas também é movimento. Em casa, eu tenho apoio da minha mãe. Porém, como ela não entende de tecnologia, só me incentiva a tentar. No PAQ, eu tenho o incentivo para tentar, errar, acertar, buscar conhecer mais, trocar ideia, ir atrás sozinha, etc. E se caso der errado, a gente compartilha o erro e aprende junto. O PAQ é o movimento de compartilhar e criar juntos.", 
            name: "Júlia Bandeira Busch", 
            role: "Educanda"
        },
        { 
            id: 5, 
            icon: "", 
            text: "Comecei acreditando que estaria apoiando a instituição como voluntário, porém com tempo entendi que estar próximo ao PAQ é parte da minha jornada de formação como líder, tenho a oportunidade de estar próximo de uma geração que está se inserindo no mercado, com uma visão de mundo inovadora e diversa, para além de contribuir com a instituição e com os jovens, sou constantemente impulsionado no meu próprio desenvolvimento.", 
            name: "Comecei acreditando que estaria apoiando a instituição como voluntário, porém com tempo entendi que estar próximo ao PAQ é parte da minha jornada de formação como líder, tenho a oportunidade de estar próximo de uma geração que está se inserindo no mercado, com uma visão de mundo inovadora e diversa, para além de contribuir com a instituição e com os jovens, sou constantemente impulsionado no meu próprio desenvolvimento.", 
            role: "Mentor" 
        },
        { 
            id: 6, 
            icon: "", 
            text: "PAQ é força, resiliência, aprendizado, colo, puxão de orelha, companhia... PAQ é sinônimo de FAMÍLIA!", 
            name: "Igor Rohrig Souza", 
            role: "Educando" 

        },
        { 
            id: 7, 
            icon: "", 
            text: "Me chamo André Moraes, no momento eu estou na fase de imersão do PAQ e está sendo sem dúvidas uma experiência incrível e que eu nunca vou esquecer, os encontros além de me trazerem muitos conhecimentos estão servindo como momento de descontração do meu dia, fico o dia inteiro pensando na hora de chegar na unidade.",
            name: "André Moraes", 
            role: "Educando" 

        },
        { 
            id: 8, 
            icon: "", 
            text: "O PAQ representa pra mim identificação, nostalgia e principalmente inspiração pelos jovens que estão iniciando na tecnologia e demonstram a mesma energia de quando eu iniciei, isso me faz relembrar sempre não só de onde eu vim, mas o que a gente está construindo juntos como comunidade.", 
            name: "Nicolas Pedroso", 
            role: "Mentor" 
        }
    ]
    typeof Cards = {
        id: number;
        icon: string;
        text: string;
        name: string;
        role: string;
      };
    return(
            {Cards.map((iten: any) =>
                
            )}

    )
}