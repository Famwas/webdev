import React from "react";


function Cardcomponent(props){
    const coffee= props.coffee
    return(
        <>

            <div className="card">
                <img className="cardimg" src={coffee.image} alt={coffee.name}></img>
                {coffee.isPopular && <p className="tagpopular">Popular</p>}
                <h2 className="cardtitle">{coffee.name}</h2>
                <p className="price">{coffee.price}</p>
                <p className="cardtext">⭐{coffee.rate}{coffee.votes}</p>  
            </div>
            
        </>
    )
}
export default Cardcomponent

