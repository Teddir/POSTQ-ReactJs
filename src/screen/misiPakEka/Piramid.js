import React, { useState, useEffect } from 'react'

export default function Piramid() {
    const [warna, setWarna] = useState('');
    const [count, setCount] = useState(5);
    const [backColor, setBackColor] = useState('black')

    useEffect(() => {
            const formq = document.getElementById("formq");
            console.log(warna);
            
            formq.innerHTML = "";
            for (let y = 0; y < count; y++) {
                formq.innerHTML += 
                `<p style="color: ${warna}">${" * ".repeat(y + 1)}</p>`
            };
            
    },[warna, count])

    return (
        <div style={{
            margin:50
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <label for="count" style={{margin: 5}}>Baris : </label>
                <input type="number" id="count" name="count" value={count} onChange={(r) => setCount(r.target.value)}/>
                <div style={{
                    backgroundColor: 'khaki',
                    elevation: 10,
                    marginLeft: 15
                }}>
                    <label style={{marginLeft:5}}>Background Colour :</label>
                    <input value={backColor} name="backColor" onChange={(e) => setBackColor(e.target.value)} placeholder="laguage inggris" style={{margin: 5}}/>
                    <label >Star Colour :</label>
                    <input value={warna} name="warna" onChange={(e) => setWarna(e.target.value)} placeholder="laguage inggris" style={{margin: 5}}/>
                    <select onChange={(e) => setWarna(e.target.value)} style={{margin: 5}}>
                        <option value={warna} >Default</option>
                        <option value={"blue"} >Blue</option>
                        <option value="Yellow" >Yellow</option>
                    </select>
                </div>
            </div>

            <div id="formq" style={{
                backgroundColor: backColor,
                fontSize: 20,
                justifyContent: 'center',
                textAlign: 'center',
                margin: 10
            }}></div>

        </div>
    )
}
