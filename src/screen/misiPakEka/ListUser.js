import { BorderColor } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import Landing from '../landing/landing';

export default function ListUser() {
    const [loading, setLoading] = useState(false);
    const [idqu, setIdqu] = useState(null);
    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [fil, setFil] = useState(null);
    const [dataqu, setDataqu] = useState(null);

    const link = 'https://reqres.in/api/users/'

    useEffect(() => {
        setLoading(true);
        fetch(link)
        .then((res) => {
            return res.json()
        })
        .then((dataApi) => {
            console.log(dataApi.data)
            setDataqu(dataApi.data);
            setIdqu(dataApi.data.id);
            setFirstName(dataApi.data.first_name);
            setLastName(dataApi.data.last_name);
            setEmail(dataApi.data.email);
            console.log('ini data', dataqu, fil)
            setLoading(false)
        })
        .catch((e) => console.log(e))
        .finally((re) => {
            console.log(re)
            setLoading(false)
        })
    }, [])

    function myFunction() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("input");
        // filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        console.log(ul)
        // li = ul.getElementsByTagName("li");
        // for (i = 0; i < ul; i++) {
        //     a = ul[i].getElementsById("card")[0];
        //     txtValue = a.textContent || a.innerText;
        //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
        //         li[i].style.display = "";
        //     } else {
        //         li[i].style.display = "none";
        //     }
        // }
    }

    console.log('ini data', dataqu, fil)

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                margin: 30,
            }}>
                <input type="text" id="input" onKeyUp={myFunction()} placeholder="Filter Username, Name atau Email" style={{
                    width: '50vh',
                    height: '4vh'
                }}/>
                {/* <select onChange={(e) => setNilai(e.target.value)} style={{marginLeft:10}}>
                    <option value={3} >3</option>
                    <option value={4} >4</option>
                    <option value={6} >6</option>
                </select> */}
            </div>
            <div style={{
                display: 'flex',
                margin: 30,
                justifyContent: 'center'
            }}>
            <>
                {dataqu ? (
                    <>
                    {dataqu.map((item) => {
                    return (
                        <div 
                        id="card"
                        style={{
                            margin: '10px',
                            borderRadius: 10,
                            height:'30vh',
                            width: '30vh',
                            flexDirection: 'row',
                            textAlign: 'center',
                            borderStyle: 'solid',
                            borderColor: 'ActiveCaption',
                            backgroundColor: 'unset'
                        }}>
                        <div 
                        id="myUL"
                        key={item.id}
                        style={{
                            margin: 5,
                            // backgroundColor: 'pink'
                        }}>
                        <img style={{
                            height: '100px',
                            width: '100px',
                            borderRadius: '100%',
                        }} src={item.avatar} alt="asas" />
                        </div>
                        
                        <div style={{
                            
                        }}>
                        <p style={{ marginBottom: '10px'}}>{item.first_name}</p>
                        <p style={{ marginBottom: '10px'}}>{item.last_name}</p>
                        <p style={{ marginBottom: '10px'}}>{item.email}</p> 
                        </div>
                        {fil === item.first_name || fil === item.last_name || fil === item.email ? (
                            <>
                            <p>{item.name}</p>
                            </>
                        ):null}
                    </div>
                    )
                    })}
                    </>
                ) : loading}
                </>
                </div>
        </div>
    )
}
