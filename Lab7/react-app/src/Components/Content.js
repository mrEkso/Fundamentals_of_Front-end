import React, {Component, useEffect} from "react"

import Imageblock from "./Imageblock"
import Goodsblock from "./Goodsblock";

class Content extends Component {
    componentDidMount() {
        import('../assets/js/script.js');
    }

    render() {
        return (
            <div className="container-fluid bg-gold">
                <div className="container">
                    <div className="content">
                        <h2 className="icon-animation">Окаянченко Давид Олександрович</h2>
                        <h3>09.10.2004 - Полтава</h3>
                        <h2 className="text-center clickable" id="el9">КПІ</h2>

                        <h2 className="clickable" id="el10">Мої хоббі:</h2>
                        <ul>
                            <li>Грати на музичних інструментах (барабани, гітара, фортепіано)</li>
                            <li>Слухати музику</li>
                            <li>Проводити час з сім'єю</li>
                        </ul>

                        <h2>Мої улюблені фільми:</h2>
                        <ol>
                            <li>"Сіністер"</li>
                            <li>"Різанина бензопилою"</li>
                            <li>"Прокляття черниці"</li>
                        </ol>

                        <p> Берлін - це велике та живописне місто в Німеччині з багатою історією та культурним впливом.
                            Місто
                            розташоване в
                            північно-східній частині країни та є столицею Німеччини. Берлін відомий своєю історією, яка
                            включає
                            події
                            Другої
                            світової війни, розділення на Західний і Східний Берлін та події Холодної війни.</p>
                        <Imageblock/>
                        <div className="mt-3"></div>
                        <h2>Goods Gallery</h2>
                        <Goodsblock/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;

