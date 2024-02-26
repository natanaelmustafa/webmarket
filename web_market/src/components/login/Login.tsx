import './Login.css'
import Main from "../Main"

const Login = () =>{
    return(
        <Main>
        <div className="login-container d-flex w-100 align-items-center justify-content-center">
            <div className="login d-flex flex-column align-items-start">
                <div className='d-flex w-100 justify-content-center mb-5'>
                    <h1 className='fw-bold'><i className='fa fa-user me-4'></i>Login do Cliente</h1>
                </div>
                <label className="fs-2 my-3">Email</label>
                <input type="text" className="login-input fs-2" />

                <label className="fs-2 my-3">Senha</label>
                <input type="text" className="login-input fs-2"/>
                <div className='d-flex flex-column align-items-end w-100 fs-5  pt-3'>
                    <button className='button-login btn btn-success mt-4 fs-3'>Entrar</button>
                    <a href='' className='text-primary my-3'>Esqueceu a senha?</a>
                    <a href='/sign_up' className='aa text-primary'>Não tem cadastro? Cadastre-se</a>
                </div>
            </div>
        </div>
    </Main>
    )
}
export default Login