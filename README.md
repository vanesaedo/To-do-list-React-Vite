# To-do-list-React-Vite
Trying React-Vite by doing a To do list

# react-todo-list con vite

Exercise here: 
[text](https://github.com/TheBridge-FullStackDeveloper/temario_fullstack_FT_feb24_MAD/blob/main/teoria/react/clase27.md)

## 1. Quick start

1.1. Creamos un repositorio nuevo vacío remoto, y lo clonamos en local. Tenemos node ya instalado en modo global en nuestro equipo.

1.2. Execute: 

```
npm create vite@latest
```

```
➜  To-do-list-React-Vite git:(main) npm create vite@latest
✔ Project name: … todolist
✔ Select a framework: › React
✔ Select a variant: › JavaScript

Scaffolding project in /Users/nana/ENTREGAS/To-do-list-React-Vite/todolist...

Done. Now run:

  cd todolist
  npm install
  npm run dev
```
Then follow the console instrucctions. ¡¡¡ Pay attemtion: if you name the Vite project as your repository you could forget to execute the first command: "cd viteprojectname". Be sure you do it.

1.2. Execute cd + your project name: 
```cd todolist``

1.3. Execute: 
```npm i````

1.4. Execute: 
```npm run dev```

Just now, by clicking on the link showed by the console, you can be your project working into the browser.

![first browser Vite image](./img_readme/03_1st_vite_screen.png)






---------
1. Haciendo uso de useState, 

```import React, { useState } from "react";```

At the top of the component file.

crea una TODO list que contenga lo siguiente:

1. Un formulario con input + botón

 a. Create FormInputTask.jsx file.
 b. Into this file write: 
    ```
    // Importa el hook useState
    import React, { useState } from 'react';

    // crea el formulario con un input y un botón
    function FormInputTask() {
    return <form action="">
        <input type="text" />
        <button onClick="">Add task</button>
    </form>
    }

    // Se exporta para poderlo llamar desde App.jsx, que es el archivo principal
    export default FormInputTask;
    ```
    b. En App.jsx:

    // Para traer el formulario al archivo principal y que se dibuje en el DOM
    ```
    import FormInputTask from './FormInputTask'
    ```



