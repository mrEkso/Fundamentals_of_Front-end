import React from "react"

import Image from "./Image"

function Header() {
    return (
        <div className="images mw-100">
            <a className="d-flex justify-content-center"
               href="https://uk.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D1%96%D0%BD">
                <Image
                    src="./images/Berlin.jpg"
                    classNames="w-50"
                    alt="Фото Берліна"
                />
            </a> <br/>
            <div className="d-flex justify-content-center">
                <button className="bg-gold" id="addButton">Додати</button>
                <button className="bg-gold" id="increaseButton">Збільшити</button>
                <button className="bg-gold" id="decreaseButton">Зменшити</button>
                <button className="bg-gold" id="deleteButton">Видалити</button>
            </div>
        </div>
    )
}

export default Header
