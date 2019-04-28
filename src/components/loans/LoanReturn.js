import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import DefaultLayout from "../layouts/Default";
import { labels } from "../../helpers/localization";
import ReturnFormAccessories  from './ReturnFormAccessories'


const LoanReturn = props => {
  return (
    <DefaultLayout>
      <Container>
      <Row>
         <Col xs="12">
          <h1>Return bike</h1>
          <div><strong>Loan Date: </strong>03/10/2019</div>
          <div><strong>Return Date: </strong>04/10/2019</div>

          </Col>
      </Row>
      <Card body style={{ backgroundColor: '#f8f9fa', borderColor: '#f8f9fa', margin: '40px 0' }}>

        <Row>
           <Col xs="6">
            <h3>Borrower</h3>
            <p>Ella Jones<br/>
            123 Street<br/>
            Ottawa, ON <br/>
            1Q1 Q1Q</p>

            <p>613-123-4567</p>
            <p>ella.jones@email.com</p>
            </Col>

            <Col xs="6">
             <h3>Bike Loaned</h3>
             <p>C05</p>

             <h3>Accessories</h3>
            <ReturnFormAccessories {...props} />



             </Col>
        </Row>

        <Row>
           <Col xs="6">

            </Col>
       </Row>


  </Card>
      </Container>
    </DefaultLayout>
  );
}

export default LoanReturn;
