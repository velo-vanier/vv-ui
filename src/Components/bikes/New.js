import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DefaultLayout from '../layouts/Default'

export default class NewBikeForm extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <Form>
          <FormGroup>
            <Label for="serialNumber">Serial number</Label>
            <Input type="text" name="serialNumber" id="serialNumber" placeholder="123456789" />
          </FormGroup>
          <FormGroup>
            <Label for="brand">Brand</Label>
            <Input type="text" name="brand" id="brand" placeholder="Peugot" />
          </FormGroup>
          <FormGroup>
            <Label for="colour">Colour</Label>
            <Input type="text" name="colour" id="colour" placeholder="Pink" />
          </FormGroup>
          <FormGroup>
            <Label for="frameSize">Frame size</Label>
            <Input type="text" name="frameSize" id="frameSize" placeholder="15 inches" />
          </FormGroup>
          <FormGroup>
            <Label for="tireSize">Tire size</Label>
            <Input type="text" name="tireSize" id="tireSize" placeholder="27 inches" />
          </FormGroup>
          <FormGroup>
            <Label for="tirePressure">Tire pressure</Label>
            <Input type="text" name="tirePressure" id="tirePressure" placeholder="99" />
          </FormGroup>
          <FormGroup>
            <Label for="gears">Number of gears</Label>
            <Input type="number" name="gears" id="gears" placeholder="3" />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="bell" name="bell" />{' '}
              Bell or horn
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="frontReflector" name="frontReflector" />{' '}
              Front reflector
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="rearReflector" name="rearReflector" />{' '}
              Rear reflector
            </Label>
          </FormGroup>

          <FormGroup>
            <Label for="status">Status</Label>
            <Input type="select" name="status" id="status">
              <option>Available</option>
              <option>Testing</option>
              <option>Needs repair</option>
              <option>On loan</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="photo">Photo</Label>
            <Input type="file" name="photo" id="photo" />
            <FormText color="muted">
              Take a photo of the bike.
            </FormText>
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </DefaultLayout>
    );
  }
}