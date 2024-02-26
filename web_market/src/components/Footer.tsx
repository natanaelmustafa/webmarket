import './Footer.css'
import Logo from '../assets/imgs/logo_.png'

const Footer = () =>{
    return(
        <div className='footer-container'>
            <div className="footer">
                <span>Super mercado Super Barato. © 2024 Todos os direitos reservados</span>
                <span className='brand-text'><img className='logo-footer' src={Logo} alt="" /> Super Barato</span>
            </div>
        </div>
    )
}
export default Footer