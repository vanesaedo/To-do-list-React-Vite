// rfce
import React from 'react'
import Item from './Item';

const names = [
    {name:"Task 1"},
    {name:"Task 2"}
]

function List() {
 
    // Painting mapped items

    const paintItems = () => names.map((item,index) => 
                                        <Item key={index} name={item.name}/>);
    
    return <section>

        {paintItems()}
        
    </section>  
};

export default List