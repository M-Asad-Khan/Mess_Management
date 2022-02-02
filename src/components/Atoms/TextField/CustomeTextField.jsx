import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";

const Textfield = ({
  fieldValue,
  onChangeFunction,
  label,
  type,
  id,
  className,
  variant,
}) => {
  return (
    <TextField
      className={className}
      id={id}
      placeholder={label}
      type={type}
      variant={variant}
      value={fieldValue}
      onChange={onChangeFunction}
      fullWidth
    />
  );
};
export default Textfield;
