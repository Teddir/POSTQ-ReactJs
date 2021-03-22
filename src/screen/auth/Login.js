import React from 'react'

export default function Login() {
    return (
        <div className="bodyLogin" style={{flex: 1}}>
            <div className="Content" style={{display:'flex', flexDirection:'row', maxHeight: '100px'}}>
                    <div className="bodyLeft" style={{
                        backgroundColor: '#21206c',
                        height: '100vh',
                        width: '584px',
                    }}>
                        <div style={{
                            width: '710px',
                            height: '710px',
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '100%',
                            position: 'absolute',
                            marginLeft: 400,
                            marginTop: -450,
                        }}/>
                        <div style={{
                            width: '323px',
                            height: '323px',
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',                        
                            borderRadius: '50%',
                            position: 'absolute',
                            overflow: 'hidden',
                            bottom: 0,
                            marginLeft: -100,
                            zIndex: 1,
                        }}/>
                    <div style={{
                        padding: 71
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '96px',
                            height: '38px',
                            top: '13px',
                            marginLeft: '30px',
                        }}>
                            <div style={{
                                width: '38.38px',
                                height: '38.38px',
                                position: 'absolute',
                                backgroundColor: 'white',
                                borderRadius: 3
                            }}><p style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 30,
                            }}>N</p>
                            </div>
                            <div style={{
                                // backgroundColor: 'black',
                                justifyContent: 'flex-end',
                                marginLeft: 50,
                                alignSelf: 'center',
                                marginLeft: '60px',
                            }}>
                            <p style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Near</p>
                            </div>
                        </div>
                    </div>
                            <div style={{
                                width: '100%',
                                height: '100px',
                                marginTop: '50px',
                                marginLeft: 100,
                            }}>
                                <p style={{
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}>Find your dream career <br />
                                make your dreams come true <br />
                                only with the near job
                                </p>
                            </div>
                    </div>
                <div className="bodyRight">
                    <p>wadidid</p>
                </div>
            </div>
        </div>
    )
}
