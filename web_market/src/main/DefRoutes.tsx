import { Routes, Route } from "react-router-dom"
import Product from "../components/product/Product"
import Home from "../components/home/Home"
import About from "../components/about/About"
import Login from "../components/login/Login"
import Sign_up from "../components/sign_up/Sign_up"

const DefRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/product" element={<Product></Product>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/sign_up" element={<Sign_up></Sign_up>}></Route>
            <Route path="*" element={<Home></Home>}></Route>
        </Routes>
    )
}
export default DefRoutes