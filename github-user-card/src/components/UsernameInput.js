import React, { useState } from "react";

const UsernameInput = (props) => {
  const [inputVal, setInputVal] = useState("");
  const onInputChange = (e) => {
    setInputVal(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onUserNameChange(inputVal);
    setInputVal("");
  };
  return (
    <div>
      <p>Let's see your Github data</p>
      <form onSubmit={onFormSubmit}>
        <input
          type="string"
          name="username"
          placeholder="Github username"
          value={inputVal}
          onChange={onInputChange}
        />
        <input type="submit" value="Fetch" />
      </form>
    </div>
  );
};

export default UsernameInput;
