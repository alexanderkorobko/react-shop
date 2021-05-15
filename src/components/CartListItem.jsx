

function CartListItem(props){
    const {id, itemName, price, quantity}=props;
    return(
        <li id={id} class="collection-item">{itemName} x {quantity} = {price} грн x {quantity}={price * quantity} {    }
        <span class="material-icons icon-change-quantity" onClick={()=>{props.subtract(id)}}>
        indeterminate_check_box
        </span>
        <span class="material-icons icon-change-quantity" onClick={()=>{props.add(id)}}>
                add_box
            </span>
         <i class="delete-item material-icons right" onClick={()=>{props.delete(id)}}>close</i></li>
    )
}

export default CartListItem