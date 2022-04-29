function Product(props){
    console.log(props)
    return (
        <div>
            <h2>Surename:{props.NewProduct.pname}</h2>
            <h2>Age:{props.NewProduct.page}</h2>


        </div>
    )
}
export default Product;