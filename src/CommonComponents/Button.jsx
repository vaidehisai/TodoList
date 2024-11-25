import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  backgroundColor: '#FFFFFF',
  color: '#FFFFFF',
  borderRadius: '5px',
  height: '50px',
  width: '100%',
  fontSize: '16px',
  fontWeight: '600',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#1E88E5',
  },
}));

export default function ActionButton(props) {
  return (
    <StyledButton
    fullWidth={props.fullWidth}
      variant={props.variant || "contained"}
      sx={{
        width: props.width ,
        textTransform: "capitalize",
        backgroundColor: props.backgroundColor || "#0FA5D9",
        color: props.color || "white",
        border: props.border,
        borderRadius: props.borderRadius || '5px',
        boxShadow: props.boxShadow || "0 0 0 0",
        height: props.height,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        padding: props.padding,
        margin: props.margin,
        backgroundImage: props.backgroundImage,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        gap: props.gap,
        float: props.float,
      }}
      onClick={props.handleSubmit}
      disabled={props.disabled}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
    >
      {props.buttonText}
    </StyledButton>
  );
}
