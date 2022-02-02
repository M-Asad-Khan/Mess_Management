import React,{useEffect} from "react";
import Button from "@material-ui/core/Button";

const Buttonfield = ({ fieldValue, onchangefunction,id,type,className }) => {



  return(
    <Button
    id={id}
    color={type}
    onClick={onchangefunction}
    variant="contained"
    className={className}
  >
    {fieldValue}
  </Button>
  )
};
export default Buttonfield;