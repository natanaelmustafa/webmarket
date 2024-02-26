import './Sign_up.css'
import Main from "../Main"

const Sign_up = () =>{
    return(
        <Main>
            <div className="sign_up-container d-flex justify-content-center w-100">
                <div className="sign_up d-flex flex-column align-items-start">
                    <div className='d-flex justify-content-center mb-5 w-100'>
                        <h1><i className='fa fa-users fw-bold me-4'></i>Cadastro de clientes</h1>
                    </div>
                    <label className='fs-2 my-3'>Nome</label>        
                    <input className="sign_up-input fs-2" type="text" />
                    <label className='fs-2 my-3'>Email</label>
                    <input className="sign_up-input fs-2"></input>
                    <label className='fs-2 my-3'>Senha</label>
                    <input className="sign_up-input fs-2"></input>
                    <button className='sign_up-button btn btn-success fs-3'>Cadastrar</button>
                </div>
            </div>
        </Main>
    )   
}
export default Sign_up