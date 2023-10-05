import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/text.css'

const HeaderBanner2 = () => {
    return (
        <div className="static-slider-head banner2">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="10" md="6" className="align-self-center text-center typewriter-container">
                        <h2 className="typewriter-text  subtitle font-bold text-white display-5">Conoce a nuestro Campers <br/> <br /> y <br />  <br/>  Trainers.</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner2;
