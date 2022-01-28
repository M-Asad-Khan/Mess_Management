import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";

const Textfield = ({
  fieldValue,
  onChangeFunction,
  label,
  type,
  id,
  clasname,
  variant,
}) => {
  useEffect(() => {
    console.log("component render");
  }, [fieldValue]);

  return (
    <TextField
      className={clasname}
      id={id}
      label={label}
      type={type}
      variant={variant}
      value={fieldValue}
      onChange={onChangeFunction}
      fullWidth
    />
  );
};
export default Textfield;
