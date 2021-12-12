import React from "react";
import { useState } from "react";

function Counter(){
    const [count,setCount]= useState(0);// countın varsayılan degerini 0 olarak atadık

    const increase = ()=> {
        setCount(1);
    };

    const decrease = () =>{
        setCount(count -1 );
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase }>Increase (+)</button>
            <button onClick={decrease}>Decrease (-)</button>
            

        </div>
    )
}
export default Counter;