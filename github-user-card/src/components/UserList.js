import React from "react";
import { Row } from "reactstrap";

import UserCard from "./UserCard";

const UserList = (props) => {
  return (
    <div>
      <Row>
        {props.list.map((user, i) => (
          <UserCard key={i} data={user} />
        ))}
      </Row>
    </div>
  );
};

export default UserList;
