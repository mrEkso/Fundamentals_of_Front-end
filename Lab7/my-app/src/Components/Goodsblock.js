import React from "react"

import GoodsCard from "./GoodsCard"

function Header() {
    return (
        <div className="card-group">
            <GoodsCard src="./images/goods/car1.jpg" name="Audi" price="50000$"/>
            <GoodsCard src="./images/goods/car2.jpg" name="Audi" price="60000$"/>
            <GoodsCard src="./images/goods/car3.jpg" name="Audi" price="55000$"/>
            <GoodsCard src="./images/goods/car4.jpg" name="BMW" price="45000$"/>
            <GoodsCard src="./images/goods/car5.jpg" name="Mercedes-Benz" price="70000$"/>
            <GoodsCard src="./images/goods/car6.jpeg" name="Ferrari" price="120000$"/>
        </div>
    )
}

export default Header
