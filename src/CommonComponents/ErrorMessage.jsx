import React from "react";
import { styled } from "@mui/system";

const StyledErrorMessage = styled("div")(({ theme, ...props }) => ({
  fontSize: "12px",
  textAlign: props.textAlign || "left",
  color: props.color || "#e90a0a",
  marginRight: "10px",
  marginLeft: props.marginLeft,
  marginTop: props.marginTop,
  marginBottom: props.marginBottom,
  fontWeight: props.fontWeight,
}));

export default function ErrorMessage(props) {
  return (
    <StyledErrorMessage {...props}>
      <span>{props.message}</span>
    </StyledErrorMessage>
  );
}
