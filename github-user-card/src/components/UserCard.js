import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col,
} from "reactstrap";

const UserCard = (props) => {
  const onBtnClick = () => {
    props.onShowFollowers(true);
  };
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
            <CardText>Location: {props.data.location || ""}</CardText>
            {props.onShowFollowers && (
              <Button onClick={onBtnClick}>
                {props.showData ? "Hide followers" : "Show followers"}
              </Button>
            )}
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default UserCard;
