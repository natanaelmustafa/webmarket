import "./Wtpp_logo.css"
import Whatsapp from '../assets/imgs/whatsapp.png'
import Main from "./Main"


const Wtpp_logo = () =>{
    return(
        <Main>
            <span className='whatsapp fs-5'><img src={Whatsapp} alt="" /></span>
        </Main>
    )
}
export default Wtpp_logo