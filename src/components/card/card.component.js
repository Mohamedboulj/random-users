import { Component } from "react";
import "./card.component.css"
import { Carditem } from "../card-item/card-item";


export const Cardlist =(props)=>{
    return <ul>
          {props.users.map((user) => {
            return (
              <Carditem className="list" key={user.id} user={user}/>
               
               
              
            )})}
         
          </ul> 
}
       
   