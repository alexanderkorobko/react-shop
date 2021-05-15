import CartListItem from './CartListItem';

function CartList(props){
    
    const totalSum=props.orderss.reduce((sum, el)=>{let elements=el.price*el.quantity;
    return sum+elements}, 0);
    return(
        <div class="collection cart-list">
        <ul class="collection">
        <li className="collection-item active" > Корзина </li>
        {!props.orderss.length? <li className="collection-item" > Корзина пуста </li>:props.orderss.map(i=>
            <CartListItem key={i.id} {...i} delete={props.delete} subtract={props.subtract} add={props.add} />
        )}
        <li className="collection-item active" > Всего к оплате: {totalSum} грн</li>
        <li className="collection-item" ><button className="btn-small order">Оформить</button></li>
        </ul>
        <i class="material-icons right card-list-close" onClick={props.close}>close</i>
        </div>
    )
}

export default CartList