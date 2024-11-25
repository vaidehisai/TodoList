import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Container,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import { useTheme } from "@mui/material/styles";
import Input from "../CommonComponents/InputField";
import ErrorMessage from "../CommonComponents/ErrorMessage";
import { useForm } from "react-hook-form";
import ActionButton from "../CommonComponents/Button";





export default function LoginScreen(props) {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    trigger,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const hanldeshowPassword = (data) => {
    setShowPassword(data);
  };
  const handleLogin = (data) => {
    setLoading(true);
    let postData = {
      user_login: data.receiveremailaddress,
      password: data.password,
    };
    const storedUser = localStorage.getItem("RegisteredUser");

    if (storedUser) {
      const user = JSON.parse(storedUser);
  
      // Check if email and password match
      if (user.email === postData.user_login && user.password === postData.password) {
        console.log("Login successful!");
        props.redirectPath("/dashboard")

        
        
      } else {
        console.log("Invalid email or password.");
      }
    } else {
      console.log("No user found. Please register first.");
    }

  };


  const handleGoTOSignUp=()=>{
    props.Redirectpath("/SignUp")
  }

  useEffect(() => {}, []);
  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #0FA5D9 100%);",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
        }}
      >
        <Box textAlign="center">
          <div>
            {/* <img src={BubbleImg} width="100%" /> */}
          </div>
          <Typography
            color="#FFFFFF"
            sx={{
              fontStyle: "italic",
              fontFamily: "Poppins",
              fontSize: "40px",
            }}
          >
            AI-POWERED
          </Typography>
          <Typography
            color="#000080"
            sx={{
              mt: 2,
              fontStyle: "italic",
              fontFamily: "Poppins",
              fontSize: "36px",
            }}
          >
            Help Desk
          </Typography>
        </Box>
      </Grid>

      {/* Right Section */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          bgcolor: "#fff",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#3399FF" }}
          >
            Ticketing Tool
          </Typography>
          <Typography color="#4B5563" sx={{ mt: 1 }}>
            Please enter your credentials to log in to the application.
          </Typography>

          {/* Form */}
          <Box component="form" noValidate sx={{ mt: 4 }}>
            <div style={{ padding: "10px 0px" }}>
              <Input
                name="receiveremailaddress"
                type="text"
                id="receiveremailaddress"
                label={"Email"}
                borderRadius="8px"
                backgroundColor="white"
                color="#707EAE"
                placeholder={"email"}
                required={true}
                inputRef={register("receiveremailaddress", {
                  required: true,
             
                  // pattern: {
                  //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  //   message: "Invalid email address",
                  // },
                })}
              />
              <div>
                {errors.receiveremailaddress &&
                  errors.receiveremailaddress.type === "required" && (
                    <ErrorMessage message="Email is Required !!" />
                  )}
                {errors.receiveremailaddress && (
                  <ErrorMessage message={errors.receiveremailaddress.message} />
                )}
              </div>
            </div>
            <div style={{ padding: "10px 0px" }}>
              <Input
                name="password"
                label="Password"
                id="password"
                borderRadius="8px"
                placeholder="***********"
                border="none"
                type={showPassword ? "text" : "password"}
                visibilityIcon
                required={true}
                backgroundColor="#000024"
                hanldeshowPassword={hanldeshowPassword}
                visibilityIconColor="#0FA5D8"
                visibilityIconFont="17px"
                inputRef={register("password", {
                  required: true,
                })}
              />
            </div>
            <div>
              {errors.password && errors.password.type === "required" && (
                <ErrorMessage message="Required !!" />
              )}
            </div>
            <div>
              {errors.password && (
                <ErrorMessage message={errors.password.message} />
              )}
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <Link
              sx={{
                display: "block",
                mt: 1,
                color: "#2B3674",
                cursor: "pointer",
              }}
    
            >
              Forgot Password
            </Link>
            <Link
              sx={{
                display: "block",
                mt: 1,
                color: "#2B3674",
                cursor: "pointer",

              }}
              onClick={()=>{handleGoTOSignUp()}}
    
            >
            Sign Up
            </Link>
            </div>
            <div style={{ padding: "15px 0px" }}>
              <ActionButton
                backgroundColor="#3399FF"
                color="white"
                fullWidth={true}
                buttonText="Login"
                handleSubmit={handleSubmit(handleLogin)}
              />
            </div>
          </Box>

          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{ mt: 4 }}
          >
            ©2024 Powered by Machint Solutions Ltd
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
