import React, { useState, useEffect } from 'react'

export default function Kursor() {
    // const [mouse, setMouse] = useState(null);
    const [left, setLeft] = useState();
    const [top, setTop] = useState();
    const [backgroundColor, setBackgroundcolor] = useState();
    const [boxShadow, setBoxshadow] = useState();
    let kamu = 0;
    let kamu1 = 0;
    let kamu2 = 0;

    window.onmousemove = e => {
        setTimeout(() => {
            // console.log(kursor);
            setLeft(`${e.pageX - 25}px`);
            setTop(`${e.pageY - 25}px`);
            col();
        }, 500);
    };

    function col() {
        kamu = Math.floor(Math.random() * 100);
        kamu1 = Math.floor(Math.random() * 80);
        kamu2 = Math.floor(Math.random() * 90);
        setTimeout(() => {
          setBackgroundcolor(`rgb(${kamu}, ${kamu1}, ${kamu2}, ${kamu2})`);
          setBoxshadow(`-1px 1px 10px rgba(${kamu}, ${kamu1}, ${kamu2}, ${kamu2})`);
        }, 500);
      }
    
    return (
        <div style={{
            backgroundColor: 'black',
            height: '100vh'
        }}>
            <div class="kursor" style={{
                backgroundColor: backgroundColor ? backgroundColor : 'blue',
                boxShadow: boxShadow ? boxShadow : 0,
                width: '50px',
                height: '50px',
                left: left ? left : '50%',
                top: top ? top : '50%',
                borderRadius: '100%',
                position: 'relative',
            }}></div>
        </div>
    )
}
