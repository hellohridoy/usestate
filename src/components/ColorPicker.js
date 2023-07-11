import React, {useState} from "react";

export default function ColorPicker(){

 const [color,setColor] = useState("red");
  return (
    <div>
        <h1>My favorite color is : {color}</h1>
       
        <button type='button' onClick={() =>{setColor("Green")}}>
          Green
        </button>

        <button type='button' onClick={() =>{setColor("Blue")}}>
          Blue
        </button>

        <button type='button' onClick={() =>{setColor("Yellow")}}>
          Yellow
        </button>

        <button type='button' onClick={() =>{setColor("Black")}}>
          Black
        </button>

    </div>
  );
}

