import React from "react";
import { Container, Row, Col } from "reactstrap";
import DefaultLayout from "../layouts/Default";
import { labels } from "../../helpers/localization";
import SearchLoanForm  from './SearchLoanForm'


const LoanListing = props => {
  return (
    <DefaultLayout>
      <Container>
        <Row>
           <Col xs="8">
            <h1>Loan</h1>
            </Col>
           <Col xs="4" className="text-right">
           <a href="add" class="btn btn-lg btn-success">Loan a bike</a>
           </Col>
        </Row>
      <SearchLoanForm {...props} />
      </Container>
    </DefaultLayout>
  );
}

export default LoanListing;
