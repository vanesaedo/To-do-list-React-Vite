// rfce
import React from 'react'
import { useState } from 'react'

import Item from './Item'

let names = [
    { name: "Task 1" },
    { name: "Task 2" }
];

function List(props,{ onchangeInput }) {

   
    
    const [list, setList] = useState(names);// If empty  ([]). We charge the item names list we created to try. 
    // set item by input type text element

    
    const clearItems = () => setList([]);

    const resetItems = () => setList(names);
    // Painting mapped items

    
    const paintItems = () => list.map((item, index) => 
        <Item 
        key={index} 
        name={item.name}
       
        />
     );
    
     const addItems  = () => { 
                            let newList=[...list,{name:props.value}]
                                setList(newList);
                               onchangeInput('')
                                }

    return<section>
            <h4>All todo's:</h4>

            <button onClick={clearItems}>Delete all items</button>
            <button onClick={resetItems}>Reload items</button>
            <button onClick={addItems}>Add items</button>
            <ul>
            {paintItems()}
            </ul>
           
        </section>
    
};

export default List