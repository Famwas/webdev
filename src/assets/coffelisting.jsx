import React, {useEffect, useState } from 'react';
import Cardcomponent from './cardcomp';
import CoffeeData from './coffeedata.json';

function Listing(){
    
    const [coffees,setCoffees]= useState([])
    useEffect(() => {
        // For local JSON file
        setCoffees(CoffeeData);
    }, []);
    return(
        <div>
            {coffees.map((coffee) => (
                <Cardcomponent key={coffee.id} coffee={coffee} />
            ))}
        </div>    
    )
}
export default Listing

