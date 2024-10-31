//React...
import React, { useEffect } from 'react';

//Styles...
import '../styles/LoadingPage.scss'

const LoadingPage = ({setLoadingTransition}) => {

    useEffect(() => {
        setTimeout(() => {
            setLoadingTransition(false)
        }, 3000)
    })

    return (
        <div 
            className='loading-page' 
            style={{
                display: 'flex', 
                flexDirection: 'column', 
                textAlign: 'center'
            }}>
            <div className="loader"></div>
            <h1 style={{fontSize: '1rem', marginTop: '10px'}}>Loading</h1>
        </div>
    );
};

export default LoadingPage;