import React from "react";
import { TextField } from "@material-ui/core";

const TextFieldComponent = (props) => {

  return (
    <div>
      <TextField
        type={props.type}
        label={props.label}
        className={props.class}
        value={props.value}
        variant={props.variant}
        placeholder={props.placeHolder}
        onChange={() => { props.onChangeFunction()
          console.log(props.value)
        }}

      />
    </div>
  )
}


export default TextFieldComponent
