// rfce
import React from 'react'

import { useState } from 'react'

import List from './List'
import Item from './Item'

function FormInputTask ()  {
    const [task, setTask] = useState('')
    return (
        <form>
        <label>This is the field to add a new task:</label>
        <div><input type="text" /></div>
        <div><button onClick={() => setTask((task) => task)}> Add task {task} </button></div>
        <List></List>
    </form>
    )
}

export default FormInputTask






