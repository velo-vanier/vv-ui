import React from "react";
import { Container, Row, Col, Card, Input, FormGroup, Label, FormText } from "reactstrap";
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
            </Col>

            <Col xs="6">
              <h3>Contact</h3>
              <p>613-123-4567</p>
              <p>ellajones@email.com</p>
             </Col>
             </Row>
        </Card>
        <Card body style={{ backgroundColor: '#f8f9fa', borderColor: '#f8f9fa', margin: '40px 0' }}>
          <Row>
             <Col xs="6">
             <h3>Bike Loaned</h3>
             <p>C05</p>
             <div><strong>Loan Date: </strong>02/12/2019</div>
             <div><strong>Return Date: </strong>03/12/2019</div>
              </Col>

              <Col xs="6">
                 <h3>Accessories</h3>
                 <ReturnFormAccessories {...props} />
               </Col>
               </Row>
          </Card>

          <h3>Bike status</h3>
          <Input type="select" bsSize="lg">
            <option value="2">Available</option>
            <option value="3">On loan</option>
            <option value="4">On hold</option>
            <option value="5">Testing</option>
            <option value="6">In repair</option>
            <option value="7">MIA</option>
            <option value="8">Scrapped</option>
            <option value="9">Give away</option>
            </Input>

            <FormGroup>
                  <Label for="exampleText">Notes</Label>
                  <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>

            <a href="listing" class="btn btn-lg btn-success">Return</a>


      </Container>
    </DefaultLayout>
  );
}

export default LoanReturn;
