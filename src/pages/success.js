import React, {useEffect} from 'react';

// Components
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';
import { Col, Container, Row } from 'reactstrap';
import Head from 'next/head';

// media
import swal from 'sweetalert';
import api from '../util/api';

const lamp = '/assets/images/product.png';


export default function Success(){
    useEffect(() => {
        const sessionJson = sessionStorage.getItem('data') ? JSON.parse(String(sessionStorage.getItem('data'))) : false;
        if(!sessionJson){
            swal('Error!', 'There is no session information', 'error').then(() => {
                window.location.href = '/error';
            });
        }
        api.post('/api/success', sessionJson).then(async res => {
            if(!res.data.success){
                await swal('Error', 'An error ocurred', 'error')
            }
        }).catch(async e => await swal('Error', 'An error ocurred', 'error'));
    }, []);
    return(
        <>
        <Head>
            <title>LedLamp Liquidators - Success</title>
        </Head>
        <Header />
        <Carrousel />
        <div className="success-page">
            <Container>
                <Row>
                    <Col md={5}>
                        <h1>Success Order</h1>
                        <img src={lamp} width="100%" />
                    </Col>
                    <Col md={2} />
                    <Col md={5}>
                        <h2>Congratulations</h2>
                        <h2>You just complete your order with Success!</h2>
                        <p>Please check your email for see the details on your oder and access you UPS Tracking Number</p>

                        <div className="center">
                            <button onClick={() => window.location.href = '/'}>Home Page</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
        </>
    );
}