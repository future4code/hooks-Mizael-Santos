// type para tipar no typescript com camelCase
export class Purchase {
    private id: string
    private user_id: string
    private product_id: string
    private quantity: number
    private total_price: number

    constructor(id: string , user_id: string , product_id: string , quantity: number , total_price: number){
        this.id = id,
        this.user_id = user_id,
        this.product_id = product_id,
        this.quantity = quantity,
        this.total_price = total_price
    }

    getId(): string {
        return this.id
    }

    getUser_id(): string{
        return this.user_id
    }

    getProduct_id(): string{
        return this.product_id
    }

    getQuantity(): number{
        return this.quantity
    }

    getTotal_price(): number{
        return this.total_price
    }
}



// type para tipar no banco de dados com snake_case
export type PurchaseDB = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}