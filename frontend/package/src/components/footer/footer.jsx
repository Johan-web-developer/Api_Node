/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <div className="footer4 b-t ">
            <Container>
                <Row>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Dirección</h5>
                        <p>Zona Franca Santander, Zenith, Anillo Vial #piso 6, Bucaramanga, El Caucho, Floridablanca, Santander</p>
                    </Col>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Teléfono</h5>
                        <p>311 8807659</p>
                    </Col>
                    <Col lg="3" md="6">
                        <h5 className="m-b-20">Social</h5>
                        <div className="round-social light">
                            <a href="https://www.facebook.com/Campuslands/" target='blank' className="link"><i className="fa fa-facebook"></i></a>
                            <a href="https://twitter.com/vanguardiacom/status/1664456436938670082" target='blank' className="link"><i className="fa fa-twitter"></i></a>
                            <a href="https://www.youtube.com/@campuslands" target='blank' className="link"><i className="fa fa-youtube-play"></i></a>
                            <a href="https://www.instagram.com/campuslands/?hl=es" target='blank' className="link"><i className="fa fa-instagram"></i></a>
                        </div>
                    </Col>
                </Row>
                <div className="f4-bottom-bar">
                    <Row>
                        <Col md="12">
                            <div className="d-flex font-14 justify-content-between">
                                <div className="m-t-10 m-b-10 copyright">All Rights Reserved by CampusLands.</div>
                                <div className="links ms-auto m-t-10 m-b-10">
                                    <a href="#" className="p-10 p-l-0">Terms of Use</a>
                                    <a href="#" className="p-10">Legal Disclaimer</a>
                                    <a href="#" className="p-10">Privacy Policy</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
export default Footer;
