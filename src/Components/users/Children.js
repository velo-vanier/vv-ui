import React from 'react';
import { Col, Label, Input } from 'reactstrap';
const Children = (props) => {
    return(
        <>
            <Label for="childgroup" sm={2}>Name of child</Label>
            <Col sm={10}>
                <Input type="text" name="childgroup" id="childName" placeholder="Name of the child" value={props.name}/>
            </Col>
            <Label for="childYear" sm={2}>Year of Birth</Label>
            <Col sm={10}>
                <Input type="number" name="childYear" id="childYear" placeholder="Year of birth" value={props.age}/>
            </Col>
        </>
    );
}

export default Children;