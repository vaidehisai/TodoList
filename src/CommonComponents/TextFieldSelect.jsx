import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  menuItem: {
    "&.Mui-selected": {
      backgroundColor: "#D6E4FF !important", // Light blue for selected item
      color: "#003A8C !important", // Blue for selected item text
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#ADCFFF !important", // Slightly darker blue on hover
    },
    "&:hover": {
      backgroundColor: "#F0F4FF", // Hover effect for non-selected items
    },
  },
}));

export default function TextFieldSelect(props) {
  const classes = useStyles();

  return (
    <TextField
      sx={{
        "& .MuiOutlinedInput-root": {
          height: `${props.height || "40px"} !important`,
          "& .MuiSelect-select": {
            color: props.value ? "#003A8C" : "#B0B0B0", // Blue for selected, gray for placeholder
            fontSize: props.value ? "14px" : "16px", // Smaller font when value is selected
          },
        },
        "& .MuiFormLabel-root": {
          fontSize: "14px", // Label font size
          color: "#B0B0B0", // Gray label by default
        },
        "& .MuiFormLabel-root.Mui-focused": {
          color: "#003A8C", // Blue label color on focus
        },
      }}
      select
      required={props.required}
      variant="outlined"
      style={{
        width: props.width || "100%",
        backgroundColor: props.backgroundColor || "#ffffff",
      }}
      label={props.label || ""}
      name={props.name}
      value={props.value || ""}
      placeholder={props.placeholder || "Select"}
      helperText={props.helperText}
      onChange={props.handleChange}
      InputLabelProps={{
        shrink: props.shrink ? props.shrink : Boolean(props.value), // Control shrink to behave like a placeholder
        style: {
          color: props.value ? "#707EAE" : "#B0B0B0", // Ensure placeholder color is light gray
        },
      }}
      InputProps={{
        readOnly: props.readOnly,
        style: {
          color: props.value ? props.inputTextColor || "#707EAE" : "#B0B0B0",
          fontSize: "14px",
          // padding:"9px",
          background: "#fff",

          //  height: props.height || "40px", // Adjust input height
        },
      }}
      SelectProps={{
        displayEmpty: true, // Ensure the placeholder appears in the field
        disabled: props.disabled, // Pass disabled to SelectProps
      }}
      disabled={props.disabled}
    >
      <MenuItem disabled value="">
        {props.placeholder || "Select an option"}
      </MenuItem>
      {props.listItems?.map((option, index) => (
        <MenuItem
          key={index}
          value={option[props.keyValue]}
          className={classes.menuItem}
        >
          {option[props.displayValue]}
        </MenuItem>
      ))}
    </TextField>
  );
}
