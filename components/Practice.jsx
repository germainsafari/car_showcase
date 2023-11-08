import React from "react";
import { useState } from "react";
import { ReactDOM } from "react-dom/client";

const FavColor = () => {
    const[color, setColor] = useState('')
    
    return (
        <>
        
        <h1> My favourite color is {blank}</h1>
        <button
        type="button"
        onClick={() => setColor(Blue)}>
            Blue
        </button>
        <h1>My favourite color is {blank}</h1>
        <button
        type="button"
        onClick={() => setColor(white)}>
            white
        </button>
        <button
        type="button"
        onClick={() => setColor(orange)}>
            orange
        </button>
        </>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<FavColor/>)