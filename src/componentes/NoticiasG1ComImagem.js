import NoticiaPadrao from "./NoticiaPadrao";

export default function NoticiasG1ComImagem() {
    const noticiasComImagens = [
        {
            imagem: "assets/alem-do-presidente.jpeg",
            chamada: "Além do presidente",
            titulo: "CPI deve pedir indiciamento de filhos de Bolsonaro",
            paragrafo: "A evangélicos, Bolsonaro diz ‘chorar sozinho em casa’"
        },
        {
            imagem: "assets/crimes-na-fronteira.jpeg",
            chamada: "Crimes na fronteira",
            titulo: "Triângulo amoroso vira chave em linha de investigação",
            paragrafo: "1ª de 7 mortes entre Brasil e Paraguai faz 1 semana"
        },
        {
            imagem: "assets/reino-unido.jpeg",
            chamada: "Reino Unido",
            titulo: "Parlamentar inglês é esfaqueado e morto em igreja",
            paragrafo: "Homem de 25 anos foi preso no local, diz polícia"
        }
    ]
    return (
        <div className="linha">
            {noticiasComImagens.map(noticia => {
                return (
                    <NoticiaPadrao imagem={noticia.imagem} chamada={noticia.chamada} titulo={noticia.titulo} paragrafo={noticia.paragrafo} />
                )
            })}
        </div>
    )
}