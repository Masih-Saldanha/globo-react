import NoticiaPadrao from "./NoticiaPadrao"

export default function NoticiasG1SemImagem() {
    const noticiasSemImagens = [
        {
            chamada: "Sabatina de Mendonça",
            titulo: "PGR é consultada sobre investigação contra Alcolumbre",
            paragrafo: "Aliados dizem que situação de Alcolumbre ‘está feia’"
        },
        {
            chamada: "Negócio de R$ 5,2 bi",
            titulo: "Pão de Açúcar vende 71 pontos do Extra para o Assaí",
            paragrafo: "Lembre fusões e aquisições bilionárias recentes no país"
        },
        {
            chamada: "Elo com caminhoneiros",
            titulo: "Podcast: ministro liga empresários a atos de 7/9; ouça",
            paragrafo: "Neto de Jango critica veto de Bolsonaro a tributo"
        }
    ]
    return (
        <div className="linha">
            {noticiasSemImagens.map(noticia => {
                return (
                    <NoticiaPadrao imagem={noticia.imagem} chamada={noticia.chamada} titulo={noticia.titulo} paragrafo={noticia.paragrafo} />
                )
            })}
        </div>
    )
}