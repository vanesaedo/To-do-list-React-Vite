// rfce
import React from "react";

function Item(props) {
    return (
        <li>
          {props.name}
          {props.addItem}
        </li>
    );
}

export default Item;