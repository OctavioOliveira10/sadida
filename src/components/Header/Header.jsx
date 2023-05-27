import { Link } from "react-router-dom"
import "./index.css"
import logo from "../../assets/img/sadida-branco.png"
import carrinho from "../../assets/img/carrinho.png"

function Header() {
    return (
    <>
        <div className="header-home">

            <div className="logo">
                <img src={logo} />
            </div>
            <ul>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/Produto">Produto</Link></li>
            </ul>
            <div className="carrinho">
                <img src={carrinho} />
            </div>
        </div>

        
    </>
    )
}

export default Header;