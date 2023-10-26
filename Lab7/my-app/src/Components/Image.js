import React from "react"

function Image({src, classNames, alt}) {
    return (
        <img className={`image opacity-animation ${classNames}`} src={src} alt={alt}/>
    )
}

export default Image
