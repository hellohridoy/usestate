import React, {useState} from "react";

export default function Car(){
    // const[brand,setBrand] = useState("Ford");
    // const[model,setModel] = useState("Mustang");
    // const[year,setYear] = useState("1964");
    // const[color,setColor] = useState("Black");

    const[car,setCar] = useState({
        brand : "Ford",
        model : "Mustang",
        year : 1964,
        color : "Black"
    });

    return(
        <div>
            <h1>My {car.brand}</h1>
            <p>This is a {car.color} {car.model} of the {car.year}</p>
        </div>
    );
}