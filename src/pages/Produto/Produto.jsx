import tenis1 from "../../assets/img/Tenis-1.png";
import tenis2 from "../../assets/img/Tenis-2.png";
import tenis3 from "../../assets/img/Tenis-3.png";
import tenis4 from "../../assets/img/Tenis-4.png";
import tenis5 from "../../assets/img/Tenis-5.png";
import tenis6 from "../../assets/img/Tenis-6.png";
import bannerproduto from "../../assets/img/banner-produto.png";
import "../Produto/estilo.css"

function Produto() {
    return (
        <>
            <div className="container-banner">
                <img src={bannerproduto} alt="" />
            </div>

            <div className="container-produtos">
                    
                
                <div className="produto-esquerda-1">

                    
                        <img src={tenis1} alt="" />
                        <p>Tênis Sadida</p>
                        <p>R$???</p>
                        <p className="comprar-esquerda-1">Comprar</p>
                    

                </div>

                <div className="produto-centro-1">
                    
                        <img src={tenis2} alt="" />
                        <p>Tênis Sadida</p>
                        <p>R$???</p>
                        <p className="comprar-centro-1">Comprar</p>
                    
                </div>

                <div className="produto-direita-1">
                    
                        <img src={tenis3} alt="" />
                        <p>Tênis Sadida</p>
                        <p>R$???</p>
                        <p className="comprar-direita-1">Comprar</p>
                    
                </div>

            </div>

            <div className="container-produtos-2">
                    
                
                <div className="produto-esquerda-2">

                        <img src={tenis4} alt="" />
                        <p>Tênis Sadida</p>
                        <p>R$???</p>
                        <p className="comprar-esquerda-1">Comprar</p>

                </div>

                <div className="produto-centro-2">
                        <img src={tenis5} alt="" />
                        <p>Tênis Sadida</p>
                        <p>R$???</p>
                        <p className="comprar-centro-1">Comprar</p>
                </div>

                <div className="produto-direita-2">
                        <img src={tenis6} alt="" />
                        <p>Tênis Sadida</p>
                        <p>R$???</p>
                        <p className="comprar-direita-1">Comprar</p>
                </div>

            </div>


        </>
    )
}

export default Produto;