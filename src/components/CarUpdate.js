import React, {useState} from "react";

export default function CarUpdate(){
    const[car,setCar] = useState({
        brand : "Ford",
        model : "Mustang",
        year : "1964",
        color : "Black"
    });
    const updateColor = () =>{
        setCar(previousState =>{
            return{...previousState,color:"blue"}
        })
    }
    return(
        <div>
            <h1>My {car.brand}</h1>
            <p>This is a {car.color} {car.model} of the {car.year}</p>
            <button type="button" onClick={updateColor}>
                Blue
            </button>
        </div>
    );
}