import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const HeaderBanner2 = () => {
    return (
        <div className="static-slider-head banner2">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h4 className="subtitle font-bold text-black">Conoce a nuestro campers y trainers.<br/></h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner2;
