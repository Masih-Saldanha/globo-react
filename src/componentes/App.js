import MenuTopo from "./MenuTopo";
import Separador from "./Separador";
import Conteudo from "./Conteudo";

export default function App() {
    return (
        <>
            <MenuTopo />
            <Separador direcao="horizontal" />
            <Conteudo />
        </>
    )
}