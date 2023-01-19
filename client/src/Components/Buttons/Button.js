import React from "react";
import Button from "@mui/material/Button";

function ButtonContained(props) {
  return (
    <>
      <Button
        type={props.Type}
        variant="contained"
        sx={{
          bgcolor: "#202329",
          color: "#fff",
          width: "100%",
          borderRadius: "15px",
          fontSize: ".9rem",
          "&:hover": {
            transition: "0.5s",
            transform: "scale(1.05)",
            bgcolor: "#202329",
            color: "#fff",
            width: "100%",
            borderRadius: "15px",
          },
        }}
      >
        {props.btntitle}
      </Button>
    </>
  );
}
function ButtonOutlined(props) {
  return (
    <>
      <Button
        type={props.Type}
        onClick={props.onRegister}
        variant="outlined"
        sx={{
          bgcolor: "#fff",
          color: "#202329",
          // width: "100%",
          borderRadius: "15px",
          fontSize: ".8rem",
          border: "1px solid #202329",
          "&:hover": {
            transition: "0.5s",
            transform: "scale(1.1)",
            bgcolor: "#fff",
            color: "#202329",
            // width: "100%",
            borderRadius: "15px",
            border: "1px solid #202329",
          },
        }}
      >
        {props.btntitle}
      </Button>
    </>
  );
}

export { ButtonContained, ButtonOutlined };
