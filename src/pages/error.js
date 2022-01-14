import React from 'react';

import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Error(){
    return(
        <>
        <Head>
            <title>LedLamp Liquidators - Error</title>
        </Head>
        <Header />
        <Carrousel />
        <div className="center erros">
            <h1>An error has occurred. Try again later.</h1>
            <button onClick={() => window.location.href = '/'}>Home Page</button>
        </div>
        <Footer />
        </>
    );
}