import React from 'react'

function Hitung() {
    const cenik = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const gede = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    console.log(gede.length, cenik.length)
    return (
        <div style={{
            margin: 20
        }}>
            <input placeholder="huruf yang di input" style={{width:'50vh'}}/>
            <button style={{marginLeft:10}}>Click</button>\\
            {cenik.map((item) => {
                const input =  "a";
                return (
                    console.log(item = input )
                )
            })}
            <p>Huruf u ada 2 karakter</p>
        </div>
    )
}

export default Hitung
