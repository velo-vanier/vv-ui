import React from "react";
import { Button, Form, FormGroup, Label, Input, FormFeedback, Table, InputGroup, InputGroupAddon, InputGroupText, Card} from "reactstrap";
import { labels } from "../../helpers/localization";
import API from "../../helpers/API"


export default class SearchLoanForm extends React.Component {
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
    <Form onSubmit={this.submit}>
    <Card body style={{ backgroundColor: '#f8f9fa', borderColor: '#f8f9fa', margin: '40px 0' }}>
        <FormGroup>
          <Label for="searchLoan">Search loans</Label>
        <InputGroup>
        <Input
          type="text"
          name="searchLoan"
          id="searchLoan"
          placeholder="Search by name, email or phone number"
          onChange={ () => {} }
          invalid={false}
          />
           <InputGroupAddon addonType="append">
              <Button onClick={this.submit}>Search</Button>
          </InputGroupAddon>
         </InputGroup>
        </FormGroup>
      </Card>

      <Table>
              <thead>
                <tr>
                  <th>Return Date</th>
                  <th>Borrower</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Bike</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><span className="text-danger">03/12/2019</span></th>
                  <td><a href="#">Joe Doe</a></td>
                  <td>613-123-4567</td>
                  <td><a href="mailto:joe.doe@email.co">joe.doe@email.com</a></td>
                  <td>W-185</td>
                  <td><Button outline color="primary" size="sm">Return</Button>{' '}</td>
                </tr>
                <tr>
                  <th scope="row">03/12/2019</th>
                  <td><a href="#">Mike Smith</a></td>
                  <td>613-123-4567</td>
                  <td><a href="mailto:m.smith@longemailaddress.com">m.smith@longemailaddress.com</a></td>
                  <td>C05</td>
                  <td><Button outline color="primary" size="sm">Return</Button>{' '}</td>
                </tr>
                <tr>
                  <th scope="row">03/12/2019</th>
                  <td><a href="#">Ella Jones</a></td>
                  <td>613-123-4567</td>
                  <td><a href="mailto:ella.jones@email.com">ella.jones@email.co</a></td>
                  <td>C01</td>
                  <td><Button outline color="primary" size="sm">Return</Button>{' '}</td>
                </tr>
              </tbody>
            </Table>

    </Form>
    )
  }
}
