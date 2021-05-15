import GoodsItem from './GoodsItem';

function GoodsList(props){

    // const {id, name: itemName, description, price, full_background: fullBackground}=props;
    return(<div className="goods" onClick={props.opencart&&props.toggle}>
        {props.items.map(item=>
            <GoodsItem key={item.id} {...item} add={props.add} />
        )}
        </div>
    )
}


export default GoodsList