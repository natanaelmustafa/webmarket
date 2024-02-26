export default class Images{
    #id: number | null
    #image_name: string
    #src: string
    #price: number
    #product_name: string
    #description: string    
    #rating: string    

    constructor(id: number | null = null, image_name: string, src: string, price: number, product_name: string,
                    description: string, rating: string){
        this.#id = id
        this.#image_name = image_name
        this.#src = src
        this.#price = price
        this.#product_name = product_name
        this.#description = description
        this.#rating = rating
    }

    get id(){
        return this.#id
    }
    get image_name(){
        return this.#image_name
    }
    get src(){
        return this.#src
    }
    get price(){
        return this.#price
    }
    get product_name(){
        return this.#product_name
    }
    get description(){
        return this.#description
    }
    get rating(){
        return this.#rating
    }
}