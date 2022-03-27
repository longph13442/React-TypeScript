import React from "react";
import {Products} from '../type/typeProducts'

type Show={
     person:Products
 }
const ShowInfo =(props:Show) =>{
    console.log(props);
    
    return (
        <div> ShowInfo </div>
    )
}
export default ShowInfo