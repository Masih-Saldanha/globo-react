import NoticiaPadrao from "./NoticiaPadrao"

export default function NoticiasGE() {
    const noticias = [
        {
            imagem: "assets/espiao-estatistico.jpeg",
            chamada: "Espião estatístico",
            titulo: "Classificação do returno tem Palmeiras em último; veja as posições",
            paragrafo: "Crespo almoça com diretoria e deve se despedir no CT"
        },
        {
            imagem: "assets/greve-segue-na-raposa.jpeg",
            chamada: "Greve segue na Raposa",
            titulo: "Cruzeiro não viabiliza recurso para quitar atrasados",
        },
        {
            imagem: "assets/campeonato-frances.jpeg",
            chamada: "Campeonato francês",
            titulo: "Desfalcado, PSG recebe o Angers, 4º colocado",
        },
    ]
    return (
        <div className="noticias-ge">
            {noticias.map(noticia => {
                return (
                    <NoticiaPadrao imagem={noticia.imagem} chamada={noticia.chamada} titulo={noticia.titulo} paragrafo={noticia.paragrafo} />
                )
            })}
        </div>
    )
}