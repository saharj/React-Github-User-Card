import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";

const UserCard = (props) => {
  console.log(props);
  return (
    <div>
      <Col>
        <Card>
          <CardImg
            top
            width="100%"
            src={props.data.avatar_url}
            alt={props.data.login + " avatar"}
          />
          <CardBody>
            <CardTitle>{props.data.login}</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default UserCard;
