import Carousel from "react-material-ui-carousel";
import banner from "../../assets/img/Banner.png";
import banner2 from "../../assets/img/Banner-2.png";
import "../Home/estilo.css"
import { useNavigate  } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/produto");
      }
    return (
        <>
   
            <div className="container-separador">
            </div>
            
            <div className="banner">
            <Carousel indicators={false}>
                <img src={banner} alt="" />
                <img src={banner2} alt="" />
            </Carousel>
            </div>
            
            <div className="Container-branco">
                <div className="texto-1">
                    <span>Já conhece nossos produtos?</span>
                </div>

                <div className="texto-2">
                    <span>Conheça!</span>
                </div>

                <div className="texto-3">
                    <button className="mao" onClick={handleClick}>Clique aqui!</button>
                </div>
            </div>

           
        </>
    )
}

export default Home;