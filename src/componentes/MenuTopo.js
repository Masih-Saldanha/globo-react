import Separador from "./Separador"

export default function MenuTopo() {
    return (
        <>
            <header className="menu-topo">
                <img className="logo" src="assets/image.png" />
            </header>
            <Separador direcao="horizontal" />
            <nav className="links">
                <a className="g1" href="#">g1</a>
                <a className="globo" href="#">o globo</a>
                <a className="valor" href="#">valor</a>
                <a className="ge" href="#">ge</a>
                <a className="cartola" href="#">cartola</a>
                <a className="globoplay" href="#">globoplay</a>
                <a className="dropz" href="#">dropz</a>
                <a className="gshow" href="#">gshow</a>
                <a className="quem" href="#">quem</a>
                <a className="receitas" href="#">receitas</a>
            </nav>
        </>
    )
}