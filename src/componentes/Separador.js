export default function Separador(props) {
    const direcao = props.direcao;
    return (
        <div className={"separador-" + direcao}></div>
    )
}