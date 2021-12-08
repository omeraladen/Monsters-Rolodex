import React from "react";
import './card.style.css';


export const Card = props => (

    <div className='card-container '>
        <img alt ='monster' src={`https://robohash.org/${props.mosnter.id}?set=set2`}/>
      
      <h1> {props.mosnter.name}</h1> 

        <p> {props.mosnter.email} </p>
    </div>
);