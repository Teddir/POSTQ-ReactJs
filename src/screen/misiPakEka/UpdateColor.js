import React, { useState, useEffect } from 'react'

export default function UpdateColor() {
    const [warna, setWarna] = useState('white');
    const [click, setClick] = useState(1);

    function RandomColor() {
        return Math.floor(Math.random() * 255);
    }
    
    useEffect(() => {
        setWarna(`rgba(${RandomColor()}, ${RandomColor()}, ${RandomColor()})`);
    },[click])

    return (
        <div style={{
            backgroundColor: warna,
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
            }}>
                <button value={click} name="click" onClick={(e) => setClick(click + 1)} style={{
                }}>Update Warna</button>
            </div>
        </div>
    )
}
