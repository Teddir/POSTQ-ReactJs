import React, {useState, useEffect} from 'react'

export default function Card() {
    const [loading, setLoading]  = useState(false);
    const [data, setData] = useState(null);
    const [nilai, setNilai] = useState(3);
    const [nilaiTwo, setNilaiTwo] = useState(0);
    useEffect(() => {
        fetch(`https://reqres.in/api/users/?page=${nilaiTwo}&per_page=${nilai}`)
        .then((res) => {
            if (res.status === 200) {
                setData(res.data);
                return res.json();
            }
            throw res;
        })
        .then(res => {
            console.log('sasaa', res.data);
            setData(res.data);
        })
        .catch((err) => err.message)
        .finally(() => {
            setLoading(false);
        });
    },[nilai, nilaiTwo])

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '30px',
            }}>
            <p style={{
                fontWeight: 'bold',
                fontSize: '25px',
            }}>Daftar Pengguna</p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                margin: 30,
            }}>
                <p style={{ 
                    marginTop:5,
                    fontWeight: '900'
                }}>Per Page </p>
                <select onChange={(e) => setNilai(e.target.value)} style={{marginLeft:10}}>
                    <option value={3} >3</option>
                    <option value={4} >4</option>
                    <option value={6} >6</option>
                </select>
            </div>
            <div style={{
                display: 'flex',
                margin: 30,
                justifyContent: 'center'
            }}>
                <>
                {data ? (
                    <>
                    {data.map((item) => {
                    return (
                        <div 
                        style={{
                            borderWidth:1,
                            borderColor: 'red',
                            backgroundColor: 'rgba(90, 255, 0.0)',
                            height:'300px',
                            width: '350',
                            marginRight: 40
                        }}>
                        <div 
                        key={item.id}
                        style={{
                            margin:40,
                        }}>
                        <img style={{
                            height: '100px',
                        }} src={item.avatar} alt="asas" />
                        </div>
                        
                        <div style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}>
                        <p style={{ marginBottom: '10px'}}>{item.first_name}</p>
                        <p style={{ marginBottom: '10px'}}>{item.last_name}</p>
                        <p style={{ marginBottom: '10px'}}>{item.email}</p> 
                        </div>
                    </div>
                    )
                    })}
                    </>
                ) : loading}
                </>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                {nilai === "4" ? (
                    <>
                    <button type="submit" value={1} onClick={(e) => setNilaiTwo(e.target.value)} style={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'grey'
                    }} >1</button>
                    <button type="submit" value={2} onClick={(a) => setNilaiTwo(a.target.value)} style={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'grey'
                    }} >2</button>
                    <button type="submit" value={3} onClick={(v) => setNilaiTwo(v.target.value)} style={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'grey'
                    }} >3</button>
                    </>
                ): 
                <>
                {nilai === "6" ? (
                    <>
                    <button type="submit" value={1} onClick={(e) => setNilaiTwo(e.target.value)} style={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'grey'
                    }} >1</button>
                    <button type="submit" value={2} onClick={(a) => setNilaiTwo(a.target.value)} style={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'grey'
                    }} >2</button>
                    </>
                ):
                <>
                <button type="submit" value={1} onClick={(e) => setNilaiTwo(e.target.value)} style={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'grey'
                    }} >1</button>
                    <button type="submit" value={2} onClick={(a) => setNilaiTwo(a.target.value)} style={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'grey'
                    }} >2</button>
                    <button type="submit" value={3} onClick={(v) => setNilaiTwo(v.target.value)} style={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'grey'
                    }} >3</button>
                    <button type="submit" value={4} onClick={(f) => setNilaiTwo(f.target.value)} style={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'grey'
                    }} >4</button>
                </>}
                </>}
            </div>
        </div>
    )
}
