import React from 'react';

let name = "Laura Smith";
let title = "Frontend Web Developer"
let website = "laurasmith.website"
let pic = "https://i.pinimg.com/originals/97/69/0c/97690c99f4f127c64f53b104ed91f2a7.jpg"

export default function Header(){
    return(
        <div>
            <div className="headerImg">
                <img src={pic}></img>
            </div>
            <div className="headerText">
                <h1>{name}</h1>
                <h4>{title}</h4>
                <p>{website}</p>
            </div>
        </div>

    )

}