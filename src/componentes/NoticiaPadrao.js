export default function NoticiaPadrao(props) {
    const { imagem, chamada, titulo, paragrafo, paragrafo2 } = props
    return (
        <div className="noticia">
            <a href="#">
                <img src={imagem} />
                <p className="chamada">{chamada}</p>
                <p className="titulo">
                    {titulo}
                </p>
            </a>
            <p className="paragrafo">
                {paragrafo}
            </p>
            <p className="paragrafo">
                {paragrafo2}
            </p>
        </div>
    )
}