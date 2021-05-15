function Cart(props){
   
    const {quantity = 0, toggle}=props;

    return(
    <div className="Cart" onClick={toggle} > 
    <span className="cardd material-icons blue darken-4 white-text">
    shopping_cart
    </span> {quantity? quantity : null}
    </div>)
}

export default Cart