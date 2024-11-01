import React from "react"
import "./Cards.css"

function Cards(props) {
    return (
        <div className="cards">
            <img src={props.image} alt="" className='image'/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}