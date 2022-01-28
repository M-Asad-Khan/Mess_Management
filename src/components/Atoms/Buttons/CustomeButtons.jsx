import React,{useEffect} from "react";
import Button from "@material-ui/core/Button";

const Buttonfield = ({ fieldValue, onchangefunction,id,type }) => {



  return(
    <Button
    id={id}
    color={type}
    onClick={onchangefunction}
    variant="contained"
    // color="primary"
  >
    {fieldValue}
  </Button>
  )
};
export default Buttonfield;