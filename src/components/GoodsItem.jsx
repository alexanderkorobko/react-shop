function GoodsItem(props){

  function bay(){
    alert('Спасибо, Ваш заказ не принят и не будет обработан, потому что тут нету бэка =)');
  }
    const {id, name: itemName, description, price, full_background: fullBackground}=props;
    return(
       
        //   <img src={fullBackground} alt={itemName} />
        // </div>
        // <p>{itemName}</p>
        
        //   <div className="card-action">
        //     <button className="btn">Купить</button>
        //   </div>
        // </div>

        <div class="card">
        <div class="card-image">
        <img src={fullBackground} alt={itemName} />
          {/* <span class="card-title">{itemName}</span> */}
       
        </div>
        <div class="card-content">
          <p>{description}</p>
        </div>
        <div class="card-action">
          {/* <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p> */}
          <button className="btn" onClick={()=>{props.add({id, itemName, price})}}>Купить</button>
          <span className="right">{price} грн</span>
        </div>
      </div>
    )
}

export default GoodsItem