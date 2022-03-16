import NoticiaPadrao from "./NoticiaPadrao"

export default function NoticiasGShow() {
    const noticias = [
        {
            imagem: "assets/ferias-e-jh.jpeg",
            chamada: "Férias e JH",
            titulo: "César Tralli se emociona na despedida do SP1"
        },
        {
            imagem: "assets/verdades-secretas-2.jpeg",
            chamada: "Verdades Secretas 2",
            titulo: "Angel cruza a passarela poderosa; reveja desfiles",
            paragrafo: "Blanche terá dois relacionamentos",
            paragrafo2: "Gabriel viverá sadomasoquista"
        },
        {
            imagem: "assets/nos-tempos-do-imperador.jpeg",
            chamada: "Nos Tempos do Imperador",
            titulo: "Lota vai cair em golpe",
            paragrafo: "Teresa toma decisão radical"
        }
    ]
    return (
        <div className="noticias-gshow">
            {noticias.map(noticia => {
                return (
                    <NoticiaPadrao imagem={noticia.imagem} chamada={noticia.chamada} titulo={noticia.titulo} paragrafo={noticia.paragrafo} paragrafo2={noticia.paragrafo2} />
                )
            })}
        </div>
    )
}