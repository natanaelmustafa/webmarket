import './Nav.css'
import logo from '../assets/imgs/logo_.png'
import { Link } from 'react-router-dom'

const Nav = () =>{
    return(
        <div className="header d-flex justify-content-between align-items-center">
            <aside  className='logo ms-4 me-5 pe-4'>
                <Link to='/'>
                    <img src={logo} alt="logo"></img>
                </Link>
            </aside>
            <nav className="menu d-flex align-items-center ms-5 ps5">
                    <div className='menu-item'>
                        <Link to="/">Início</Link> 
                    </div >
                    <div className='menu-item'>
                        <Link to="/product">Catálogo de Produtos</Link>
                    </div>
                    <div className='menu-item'>
                        <Link to="/about">Sobre</Link>
                    </div>
            </nav>
            <aside className='authentication'>
                <a href='/login' className='me-3'>Login</a>
                <a href='/' className='me-3'>
                    <button className='btn btn-success'><a href="/sign_up" className='text-light'>
                            Registrar</a></button>
                </a>
            </aside>
        </div>
    )
}
export default Nav