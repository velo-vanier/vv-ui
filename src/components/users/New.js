import React from "react";
import { Container } from "reactstrap";
import DefaultLayout from "../layouts/Default";
import { labels } from "../../helpers/localization";
import NewUserForm from './NewUserForm'


const NewUserPage = props => {
  return (
    <DefaultLayout>
      <Container>
        <h1>{labels.createNewUser}</h1>
        <NewUserForm {...props} />
      </Container>
    </DefaultLayout>
  );
}

export default NewUserPage;