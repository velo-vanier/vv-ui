import React from 'react'
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import DefaultLayout from '../layouts/Default'
import { labels } from "../../helpers/localization";

const BarcodeForm = props => {
  return(
    <FormGroup>
        <Label for="barcode"><h1>{labels.scanBarcode}</h1></Label>
        <Input
          type="text"
          name="barcode"
          id="barcode"
          onChange={handleScan}
        />
    </FormGroup>
  )
}

export default BarcodeForm;
