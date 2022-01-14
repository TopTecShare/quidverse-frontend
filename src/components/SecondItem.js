import React from 'react';
const slide2 = '/assets/images/slide2.webp';
const arrow = '/assets/images/arrow.svg';
import { Container, Row, Col } from 'reactstrap';

// import { Container } from './styles';

function SecondItem({change, current}) {
    const handlerSlide = () => {
        if(current !== 0){
            change(0);
        }else {
            change(1);
        }
    }
    return(
        <Container fluid style={{backgroundImage: `url(${slide2})`, backgroundPosition: 'center', backgroundSize: 'cover', minHeight: 300}}>
        <Row style={{paddingTop: 30}} className="align-items-center center">
            <Col>
                <button onClick={handlerSlide} style={{backgroundColor: 'transparent', border: 0, cursor: 'pointer'}}><img src={arrow} width="30px" style={{transform: 'rotate(180deg)'}} /></button>
            </Col>
            <Col>
                <h1 style={{textAlign: 'right', color: '#fff', fontWeight: 'bold'}}>OUR COST IS<br /> (ALMOST) $0.00<br /> <span style={{backgroundColor: '#7bd96c', color: '#000', padding: 5}}>AFTER DLC REBATE*</span></h1>
            </Col>
            <Col>
            <button onClick={handlerSlide} style={{backgroundColor: 'transparent', border: 0, cursor: 'pointer'}}><img src={arrow} width="30px" /></button>
            </Col>
        </Row>
    </Container>
  );
}

export default SecondItem;