import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';

const CallToAction = () => {
    return (
        <div className="coming-soon" id="coming">
            <Container className="py-5 mt-5">
                <Row>
                    <Col md="6">
                        <div className="d-flex align-items-center">
                            <div>
                                <h2 className="title text-white font-weight-bold">¡Conoce nuetra Beca!</h2>
                                <h6 className="subtitle font-light text-white">Somos un centro de entrenamiento en tecnolgía.<br></br>Transformamos futuros a través de la educación y garantizamos tu primer empleo.</h6>
                                <Link to="https://docs.google.com/forms/d/152-v-Ih36f4IPLy_7byRFbbWKBTuLOjQuGnsZ61W20U/viewform?edit_requested=true" target='blank' className="btn btn-outline-dark m-r-20 btn-md m-t-30 font-14">¡Adquiere nuestra BECA!</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CallToAction;
