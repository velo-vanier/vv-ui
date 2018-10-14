import React from "react";
import { Col } from 'reactstrap';
import { labels } from "../../helpers/localization";
import { STATUSES_COLORS } from "../../helpers/constants";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Badge
} from "reactstrap";


const BikeCard = props => {
  const { bike } = props;
  console.log(bike)
  const photoSrc = (bike.photos && !!bike.photos.length) ? bike.photos[0].url : "https://img02.aws.kooomo-cloud.com/upload/denver-bike/images/17285_medium.jpg?v=1";
  return (
    <Col xs="12" sm="6" md="4" className="my-2">
      <Card>
        <CardImg
          top
          width="100%"
          src={photoSrc}
          alt={bike.Description}
        />
        <CardBody>
          <CardTitle>{bike.BikeLabel}</CardTitle>
          <Badge color={STATUSES_COLORS[bike.ID_Status]} pill>{ labels.statusLabel(bike.ID_Status) }</Badge>
          <CardText>
            {labels.bikeClassLabels[bike.Class]}
          </CardText>
          <Button className="mr-1" color="primary" href={`/bikes/${bike.ID_Bike}`}>Return this bike</Button>
          <Button className="mr-1" color="primary" outline href={`/bikes/${bike.ID_Bike}`}>View</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BikeCard;
