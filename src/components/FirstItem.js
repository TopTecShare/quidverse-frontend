import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const slide1 = '/assets/images/slide1.webp';
const arrow = '/assets/images/arrow.svg';

// import { Container } from './styles';

function FirstItem({change, current}) {
    const handlerSlide = () => {
        if(current !== 0){
            change(0);
        }else {
            change(1);
        }
    }
    return(
        <Container fluid style={{backgroundImage: `url(${slide1})`, backgroundPosition: 'center', backgroundSize: 'cover', minHeight: 300}}>
            <Row style={{paddingTop: 30}} className="align-items-center center ">
                <Col>
                    <button onClick={handlerSlide} style={{backgroundColor: 'transparent', border: 0, cursor: 'pointer'}}><img src={arrow} width="30px" style={{transform: 'rotate(180deg)'}} /></button>
                </Col>
                <Col>
                    <h1 style={{textAlign: 'right', color: '#fff', fontWeight: 'bold'}}>CUT YOUR<br /> LIGHTING<br /> ELECTRICAL<br /> <span style={{backgroundColor: '#7bd96c', color: '#000', padding: 5}}>CONSUMPTION</span><br /> BY 50%</h1>
                </Col>
                <Col>
                <button onClick={handlerSlide} style={{backgroundColor: 'transparent', border: 0, cursor: 'pointer'}}><img src={arrow} width="30px" /></button>
                </Col>
            </Row>
        </Container>
  );
  
}

export default FirstItem;