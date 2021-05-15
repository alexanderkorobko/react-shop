import {useState, useEffect} from 'react';
import { API_KEY, API_URL} from '../config.js';
import GoodsList from './GoodsList';
import Preloader from './Preloader';
import Cart from './Cart';
import CartList from './CartList';


function Shop(){
    const [goods, setGoods]=useState([]);
    const [loading, setLoading]=useState(true);

    const[order, setOrder]=useState([]);

    const [showCartList, setShowCartList]=useState(false);

    function addItem(id){
        const item=order.find(i=>i.id===id);
        const newOrder=order.map(i=>{
            if(i.id===id){
                i.quantity=i.quantity+1;
            }
            return i
        })
        setOrder([...newOrder]);
        // M.toast({html: `${id} added to cart`});
    };

    function subtractItem(id){
        const item=order.find(i=>i.id===id);
        const newOrder=order.map(i=>{
            if(i.id===id){
                i.quantity>0&&(i.quantity=i.quantity-1)
            }
            return i
        })
        setOrder([...newOrder]);
    };

    function deleteFromCart(id){
        const newOrder=order.filter(el=>el.id!==id);
        setOrder(newOrder);
    }

    function addToBasket(commodity){
        // !order.find(c=>c.id===commodity.id)&&setOrder([...order, commodity]);

        const itemIndex=order.findIndex(itm=>itm.id===commodity.id);
        
        if(itemIndex<0){
            const countableItem={
                ...commodity,
                quantity: 1
            };
            setOrder([...order, countableItem]);
        } else{
            const newOrder=order.map(i=>{
                if(i.id===commodity.id){
                    return {...i, 
                    quantity: i.quantity+1}
                }else{
                    return i
                }});
                setOrder(newOrder);
        }
    }

    useEffect(function downloadItems(){

        fetch('https://fortniteapi.io/v1/shop?lang=ru', {
            headers: {
                Authorization: 'b29f4472-fc88da60-e46a347a-6ae62fad',
            },
        }).then(response=>response.json()).then(data=>{
        setGoods(data.featured);
        setLoading(false)}
        )}, []);

        function toggleShowCart(){
            setShowCartList(!showCartList);
        }

    return (<main className='container content'>
    <Cart quantity={order.length} toggle={toggleShowCart} />
    {loading ? <Preloader /> : <GoodsList add={addToBasket} items={goods} toggle={toggleShowCart} opencart={showCartList} />}
    {showCartList && <CartList orderss={order} close={toggleShowCart} delete={deleteFromCart} subtract={subtractItem} add={addItem} />}
    </main>);
}

export default Shop