import React from 'react'
import LogoTwit from '../../../assets/image/path5.png'
import LogoFb from '../../../assets/image/fb.png'
import LogoLin from '../../../assets/image/Vector.png'
import LogoN from '../../../assets/image/N.png'
import { Link } from 'react-router-dom';

export default function Reset() {
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
                            marginTop: -500,
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
                            }}><img src={LogoN}  alt="N" style={{alignItems: 'center', height: '20px'}}/></p>
                            </div>
                            <div style={{
                                // backgroundColor: 'black',
                                justifyContent: 'flex-end',
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
                                marginTop: '20px',
                                marginLeft: 100,
                            }}>
                                <p style={{
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}>Trusted job search site <br />
                                will help you find your job <br />
                                very easily
                                </p>
                                <p style={{
                                    marginTop: '30px',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: 'grey',                                    
                                }}>Immediately check your dream <br/> career opportunity here</p>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginTop: '30px', 
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '5px',
                                        backgroundColor: 'grey',                        
                                        borderRadius: 80,
                                        marginLeft: 2,
                                    }}/>
                                    <div style={{
                                        width: '40px',
                                        height: '5px',
                                        backgroundColor: 'grey',                        
                                        borderRadius: 80,
                                        marginLeft: 15,
                                    }}/>
                                    <div style={{
                                        width: '40px',
                                        height: '5px',
                                        backgroundColor: 'white',                        
                                        borderRadius: 80,
                                        marginLeft: 15,
                                    }}/>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginTop: '30px', 
                                }}>
                                    <img src={LogoTwit} alt="Twitter" style={{
                                        width: '17px',
                                        height: '15px',
                                        marginLeft: 2,
                                    }}/>
                                    <img src={LogoFb} alt="Facebook" style={{
                                        width: '10px',
                                        height: '16px',
                                        marginLeft: 30,
                                    }}/>
                                    <img src={LogoLin} alt="Linked" style={{
                                        width: '15px',
                                        height: '16px',
                                        marginLeft: 30,
                                    }}/>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginTop: '150px', 
                                }}>
                                    <p style={{
                                        color: 'white',
                                        fontSize: 12,
                                        marginLeft: 2,
                                    }}>Privacy Policy</p>
                                    <p style={{
                                        color: 'white',
                                        fontSize: 12,
                                        marginLeft: 30,
                                    }}>Contact</p>
                                    <p  style={{
                                        color: 'white',
                                        fontSize: 12,
                                        marginLeft: 30,
                                    }}>© 2020 Near Job</p>
                                </div>
                            </div>
                    </div>
                <div className="bodyRight">
                    <div style={{
                        // backgroundColor: 'grey',
                        height: '500px',
                        width: '400px',
                        marginLeft: 250,
                        marginTop: 100,
                    }}>
                        <p style={{
                            fontSize: 30,
                            fontWeight: 'bold'
                        }}>Reset Password</p>
                        <p style={{
                            fontSize: 20,
                        }}>Reset your account password</p>

                        <p style={{
                            marginTop: 20,
                            fontSize: 14,
                            fontWeight: 'bold'
                        }}>Email Address</p>
                        <input type="text" name="username" placeholder="yourmail@gmail.com" style={{
                            marginTop: 10,
                            marginBottom: 15,
                            width: '350px',
                            height: '40px',
                            borderRadius: 4,
                            borderColor: '#D7DBE0',
                        }}/>

                        <Link to="/pChange">
                        <button type="submit" title="Login" placeholder="Login" style={{
                        marginTop: 10,
                        marginBottom: 10,
                        width: '360px',
                        height: '70px',
                        borderRadius: 4,
                        backgroundColor: '#1A195F',
                        color: 'white',
                        fontSize: 17,
                        }}>Send Request</button>  
                        </Link>
                        <p style={{
                            marginLeft: 110,
                            marginTop: 10,
                            fontweight: 'bold'
                        }}>Use another meas</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
