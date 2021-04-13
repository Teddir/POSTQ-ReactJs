import React, { useState, useEffect } from 'react'

export default function Kursor() {
    const [mouse, setMouse] = useState(null);
    const [color, setColor] = useState(null);   
    const [time, setTime] = useState(false);

    const kursor = document.querySelector(".kursor");

    window.onmousemove = e => {
        setTimeout(() => {
            // console.log(kursor);
            kursor.style.left = `${e.pageX - 25}px`;
            kursor.style.top = `${e.pageY - 25}px`;
            setMouse(true);
            setColor(false);
            if (mouse) {
                // setTime(true);
                console.log("mouse bergerak");
            } 
        }, 100);
    };
    
    setInterval(() => {
        if (time === true) {
            kursor.style.backgroundColor = "rgb(" + RandomColor() + "," + RandomColor() + "," + RandomColor() + ")";
        }
        if (color === true) {
            console.log("color diganti")
        }
    }, 1000)

    function RandomColor() {
        return parseInt(Math.random() * 255);
    }
    
    return (
        <div style={{
            backgroundColor: 'black',
            height: '100vh'
        }}>
            <div class="kursor" style={{
                backgroundColor: 'blue',
                width: '50px',
                height: '50px',
                left: '50%',
                top:'50%',
                borderRadius: '100%',
                position: 'relative',
            }}></div>
        </div>
    )
}
