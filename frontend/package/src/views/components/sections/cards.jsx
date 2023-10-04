import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const Cards = () => {
    return (
        <div>
            <div className="spacer" id="card-component">
            </div>
            <Container>
                <Row>
                    <Col md="6">
                        <Card body className="card-shadow">
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card body className="card-shadow">
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cards;