import React from "react";
import {Container} from "reactstrap";
import DefaultLayout from "../layouts/Default";
import { labels } from "../../helpers/localization";
import LoanForm from './LoanForm'

const LoanPage = props => {
  return (
    <DefaultLayout>
      <Container>
        <h1>Welcome to the loan page</h1>
        <LoanForm {...props} />
      </Container>
    </DefaultLayout>
  );
}

export default LoanPage;
