import React from 'react'
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import DefaultLayout from '../layouts/Default'
import { labels } from "../../helpers/localization";


const Home = props => {
    const handleScan = event => {
        const barcode = event.target.value;
        const regex = /^(.*)OK$/gm;
        const result = regex.exec(barcode)
        if (result) {
            const id = result[1];
            props.history.push(`/bikes/${id}`)
        }
    }

    return(
        <DefaultLayout>
            <Container>
                <Row className="justify-content-center">
                    <Col>
                      
                    </Col>
                </Row>
            </Container>
        </DefaultLayout>
    )
}

export default Home
