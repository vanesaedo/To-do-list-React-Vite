// rfce
import React from 'react'
import { useState } from 'react'
import List from './List'

let names = [
  { name: "Task 1" },
  { name: "Task 2" }
];
function MainComponent ()  {

    //Defino inputValue como estado.
    
    const [inputValue, setInputValue] = useState('');


    // Definimos el método a aplicar al estado
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    }
const changeInput = (val) => setInputValue(val);
    // Defino el manejador
    const handleAddItem = (event) => {
      event.preventDefault();
      console.log(inputValue);
      names.push(inputValue);                       
    }

   
   
    return (
        <>
          <form>
            <label>Enter your task:
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />
            </label>
            <button onClick={handleAddItem}> Add task </button>

          </form>
          <section><List value={inputValue} onchangeInput={changeInput} ></List></section>
          </>
        )
      }

    
    



export default MainComponent






