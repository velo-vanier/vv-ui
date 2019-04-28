import React from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, CustomInput, FormFeedback, InputGroup, InputGroupAddon, InputGroupText, Card} from "reactstrap";
import { labels } from "../../helpers/localization";
import API from "../../helpers/API"


export default class ReturnLoanForm extends React.Component {
  constructor(props) {
    super(props);
  }

submit() {
  alert('Great success!')
  API
    .post('loan', this.state.user)
    .then(res => {})
}

render() {
  return (
    <Form>
    <CustomInput type="checkbox" id="AccessoriesLock" label="Lock" />
    <CustomInput type="checkbox" id="AccessoriesHelment" label="Helment" />
    </Form>
    )
  }
}
