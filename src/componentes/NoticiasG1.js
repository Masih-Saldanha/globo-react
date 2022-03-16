import NoticiaPrincipal from "./NoticiaPrincipal";
import NoticiasG1ComImagem from "./NoticiasG1ComImagem";
import NoticiasG1SemImagem from "./NoticiasG1SemImagem";
import Separador from "./Separador";

export default function NoticiasG1() {
    return (
        <div className="noticias-g1">
            <NoticiaPrincipal />
            <Separador direcao="horizontal" />
            <NoticiasG1ComImagem />
            <Separador direcao="horizontal" />
            <NoticiasG1SemImagem />
        </div>
    )
}