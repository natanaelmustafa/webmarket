import './Home.css'
import Coup from '../../assets/imgs/casal_ofertas.png'
import Main from '../Main'

const Home = () =>{
    return(
        <Main>
            <div className='home-conteiner mt-5'>
            <h1 className=''>Economize Comprando Conosco</h1>
                <div className='home-content'>
                    <div className='img-text-content d-flex mt-5'>
                        <img className='home-img' src={Coup} alt="" />
                        <div className='paragraphs mt-5 w-25 d-flex flex-column'>
                            <p className='p1 fs-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /><br />
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. <br /><br />
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p className='fs-2 mt-5'>It has survived not only five centuries, but also the leap into electronic 
                                typesetting, remaining essentially unchanged.
                                <br /><br />
                            </p>
                        </div>
                    </div>
                    <div className='p3'>
                        <p className=' fs-2'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and <br />more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
        </div>
        </Main>
    )
}
export default Home