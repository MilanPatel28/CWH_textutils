import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    // This function will capitalize the first letter of the word
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{height: '50px'}}>
      {props.alert && 
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
    </div>
    );
}

export default Alert;

{
  /* This is a way to display alert using bootstrap */
}
{
  /* This means if props.alert is null the statements further will not be evaluated
but if it is not null, the other statement will also get evaluated */
}
{
  /* This happens because all the JSK will be converted to JavaScript Calls */
}
