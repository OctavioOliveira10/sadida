import tenis1 from "../../assets/img/Tenis-1.png";
import "../Produto/estilo.css"

function Produto() {
    return (
        <>
            <div className="melhores-calcados">
                <h1>Nossos melhores calçados</h1>
            </div>

            <div className="container-produtos">
                <div className="img-esquerda-1">
                    <img src={tenis1} alt="" />
                </div>
                <div className="produto-esquerda-1">
                    <div className="descricao-esquerda-1">
                        <span>Tênis Sadida</span>
                    </div>

                    <div className="preco">
                        <span>R$???</span>
                    </div>

                    <div className="comprar">
                        <span>Comprar</span>
                    </div>
                </div>

                <div className="produto-centro-1">
                    <div className="descricao-centro-1">
                        <span>Tênis Sadida</span>
                    </div>

                    <div className="preco">
                        <span>R$???</span>
                    </div>

                    <div className="comprar">
                        <span>Comprar</span>
                    </div>
                </div>

                <div className="produto-direita-1">
                    <div className="descricao-direita-1">
                    <span>Tênis Sadida</span>
                    </div>

                    <div className="preco">
                        <span>R$???</span>
                    </div>

                    <div className="comprar">
                        <span>Comprar</span>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Produto;