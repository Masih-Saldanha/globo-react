import NoticiasG1 from "./NoticiasG1";
import NoticiasGE from "./NoticiasGE";
import NoticiasGShow from "./NoticiasGShow";
import Separador from "./Separador";

export default function Conteudo() {
    return (
        <div className="conteudo">
            <NoticiasG1 />
            <Separador direcao="vertical" />
            <NoticiasGE />
            <Separador direcao="vertical" />
            <NoticiasGShow />
        </div>
    )
}