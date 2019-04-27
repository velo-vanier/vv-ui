import React from "react";
import { Container } from "reactstrap";
import DefaultLayout from "../layouts/Default";
import { labels } from "../../helpers/localization";
import EditBikeForm from './EditBikeForm'


const EditBikePage = props => {
  return (
    <DefaultLayout>
      <Container>
        <h1>Edit Bike Page</h1>
        {/* <h1>{labels.createNewBorrower}</h1> */}
        <EditBikeForm {...props} />
      </Container>
    </DefaultLayout>
  );
}

export default EditBikePage;
