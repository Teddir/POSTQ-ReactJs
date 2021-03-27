import React, { useState, useEffect } from 'react'

const Landing = () => {
    const [color, setColor] = useState("")

    function randomColor() {
        return Math.floor(Math.random() * 255)
    }

    useEffect(() => {
        const warna = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()})`
        setTimeout(() => {
            setColor(warna);
        },1000)
    })

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{textAlign: 'center'}}>
            <img style={{height:200}} src="https://media.giphy.com/media/VLUtpRsgyMbTUEVxRt/giphy.gif"/>
                <p style={{fontSize:25, fontWeight: 'bold', color: color}}>Loading...</p>
            </div>
        </div>
    )
}

export default Landing