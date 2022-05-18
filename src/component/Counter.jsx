import React from "react";
// import { useState } from "react";
import style from "./count.css"

const Count = ({intial})=>{


    const [count , setCount] = React.useState(intial);
    let a;
    if(count%2===0){
        a ="green";
    }else{
        a ="red";
    }

    return (
        <div>
        <h1>Counter App : <snap style = {{color:a}}>{count}</snap>  </h1>
        <button onClick={() =>setCount(+(count)+1)}>Increament</button>
        <button onClick={() =>{
        if(count>0){
            setCount(count-1)
        }
        }}>Decreament</button>

        <button onClick={() =>setCount (count*2)}>Double</button>
        </div>
    );
 };

 export default Count;