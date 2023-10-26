import React from "react"

import Image from "./Image";

function GoodsCard(props) {
    return (
        <div className="card">
            <Image src={props.src} classNames="w-90 h-100" alt="gallery foto"/>
            <h2 className="icon-animation">{props.name}</h2>
            <p>Cost: {props.price}</p>
        </div>
    )
}

export default GoodsCard
