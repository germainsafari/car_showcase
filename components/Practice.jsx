import React from "react";
import { useState } from "react";
import { ReactDOM } from "react-dom/client";
import {Outlet, Link} from "react-router-dom";
const FavColor = () => {
    const[color, setColor] = useState('')

    const cars = ["honda", "suv", "toyota"]
    return (
        <>


        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs"></Link>
                </li>
            </ul>
        </nav>
{/*         
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
        </button> */}
        </>
    )
}
const Car = () => {
    return <li> Hi, i am a {props.brand}</li>

}
function Missed () {
    return <h1>I missed</h1>
}
function MadeGoal () {
    return <h1>it is a goal</h1>
}
function Goal (props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal/>;
    }
    return <Missed/>;
}
const root1 = ReactDom.createRoot(document.getElementById('root1'));
root1.render(<Goal/>);
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<FavColor/>)
