import React, { useState } from "react";
import { Box, TextField, InputAdornment, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DownloadIcon from "@mui/icons-material/Download";

const CustomTextField = styled(TextField)(({ theme, height, ...props }) => ({
  "& .MuiOutlinedInput-root": {
    height: height || "auto", // Set height dynamically from prop
    backgroundColor: props.backgroundColor || "white",
    borderRadius: props.borderRadius || "4px",
    color: props.color || "black",
    fontSize: props.fontSize || "14px",
    fontFamily: "'Poppins', sans-serif",
    padding: props.padding || "8px",
    "& input[type=number]": {
      MozAppearance: "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "& input[type='date']": {
      color: props.color || "black",
    },
    "& input[type='date']::-webkit-calendar-picker-indicator": {
      filter: props.filter || "invert(1)",
      cursor: "pointer",
      color: props.color || "black",
    },
  },
  "& .MuiInput-root": {
    color: "#000",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "400",
    "&:hover:not(.Mui-focused):before": {
      borderColor: "#0ea5d9",
      borderWidth: "1px",
    },
  },
}));

export default function FormPropsTextFields(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordIconClick = () => {
    setShowPassword(!showPassword);
    props.handleShowPassword?.(!showPassword);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      props.onSubmit?.();
    }
  };

  const handleDownload = () => {
    props.handleDownload?.();
  };

  return (
    <Box>
      {props.label && (
        <Typography
          variant="body2"
          sx={{
            fontSize: props.labelFontSize || "14px",
            fontWeight: "500",
            color: props.labelColor || "#2B3674",
            marginLeft: "1px",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {props.label}
          {props.required && <span style={{ color: "red" }}>&nbsp;*</span>}
        </Typography>
      )}

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            width: props.width || "100%",
            color: "black",
            fontFamily: "'Poppins', sans-serif",
            // padding: "10px 0px",
          },
        }}
        noValidate
      >
        <CustomTextField
          height={props.height} // Pass the height prop to CustomTextField
          style={props.style}
          disabled={props.disabled}
          required={props.required}
          width={props.width}
          id={props.id}
          name={props.name}
          size="small"
          value={props.value}
          type={showPassword ? "text" : props.type}
          onChange={props.handleChange}
          defaultValue={props.defaultValue}
          placeholder={props.value ? "" : props.placeholder}
          helperText={props.helperText}
          minDate={props.minDate}
          onBlur={props.handleBlur}
          error={props.error}
          {...props.inputRef}
          inputProps={{
            autoComplete: "off",
            min: props.minDate,
            max: props.maxDate,
            maxLength: props.maxLength,
          }}
          InputProps={{
            readOnly: props.readOnly,
            endAdornment: (
              <InputAdornment position={props.position || "end"}>
                {props.downloadIcon && (
                  <IconButton onClick={handleDownload}>
                    <DownloadIcon sx={{ color: "grey" }} />
                  </IconButton>
                )}
                {props.visibilityIcon && (
                  <IconButton onClick={handlePasswordIconClick} edge="end">
                    {showPassword ? (
                      <VisibilityIcon
                        sx={{ color: props.visibilityIconColor || "black", fontSize: props.visibilityIconFont || "inherit" }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        sx={{ color: props.visibilityIconColor || "black", fontSize: props.visibilityIconFont || "inherit" }}
                      />
                    )}
                  </IconButton>
                )}
                {props.searchIcon && (
                  <IconButton edge="end">
                    <SearchIcon sx={{ color: "grey" }} />
                  </IconButton>
                )}
              </InputAdornment>
            ),
            startAdornment: props.startSearchIcon && (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon sx={{ color: "grey" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            shrink: false,
          }}
          onKeyPress={handleKeyPress}
          onWheel={props.type === "number" ? (e) => e.target.blur() : null}
        />
      </Box>
    </Box>
  );
}
