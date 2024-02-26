import './Product.css'
import axios from "axios"
import { useEffect, useState } from "react"
import Images from "../../core/Image"
import Main from '../Main'

interface ProductProps{
}

const Product = (props: ProductProps)=>{
    const baseUrl = 'http://localhost:3003/images'
    const [images, setImages] = useState<Images[]>()
    const [selected, setSelected] = useState<boolean>()
    const [imageName, setImageName] = useState<string>()

    useEffect(getAll, [])

    function getAll(){
        axios(baseUrl).then(resp =>{
            setImages(resp.data)
        })
    }

    function renderImages(){
        return images?.map(img =>{
            return(
                <div className="product"
                        onClick={() => {
                            setSelected(true)
                            setImageName(img.image_name)
                        }}>
                    <img src={img.src} alt="" />
                    <h3>{img.product_name}</h3>
                    <div className="price">{img.price}</div>
                </div>
            )
        })
    }
    function renderPreview(){
        return images?.map(img =>{
            return(
                <div className={`preview 
                    ${imageName === img.image_name && selected ? 'active' : ''}`}>
                    <i className='fa fa-times' onClick={() => setSelected(false)}></i>
                    <img src={img.src} alt=''></img>
                    <h3>{img.product_name}</h3>
                    <div className='stars'>
                        <i className='fa fa-star text-warning'></i>
                        <i className='fa fa-star text-warning'></i>
                        <i className='fa fa-star text-warning'></i>
                        <i className='fa fa-star text-warning'></i>
                        <i className='fa fa-star-half-o text-warning'></i>
                        <span> {img.rating}</span>
                    </div>
                    <p>{img.description}</p>
                    <div className='price'>{img.price}</div>
                    <div className='buttons'>
                        <a href="#" className='buy'>compre agora</a>
                        <a href="#" className='cart'>adicione ao carrinho</a>
                    </div>
                </div>
            )
        })
    }
    return(
        <Main>
            <div className="container">
            <h3 className="title"> Produtos Orgânicos</h3>
            <div className={`products-container`}>
                {renderImages()}
            </div>
            </div>
            
            {selected ? (
                <div className='products-preview'>
                    {renderPreview()}
                </div>
            ): false}
        </Main>
    )
}
export default Product