import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Input from "../CommonComponents/InputField";
import ErrorMessage from "../CommonComponents/ErrorMessage";
import { useForm } from "react-hook-form";
import ActionButton from "../CommonComponents/Button";
import {ShowAlert} from "../CommonComponents/Alert"

export default function SignUp(props) {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


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
  const handlePasswordIcon = (event) => {
    setShowPassword(event);
  };
  const handleRegister = (data) => {
    console.log(data, "data");
    setLoading(true);
    let postData = {
      fullName:data.fullNm,
      email: data.receiveremailaddress,
      password: data.newpassword,
    };
    localStorage.setItem('RegisteredUser', JSON.stringify(postData));
    ShowAlert({
        icon: "success",
        text:"Successfully Registered",
        width: "400px",
        confirmAction: () => {
            handleGoTOSignUp()
          },
      });
  };
  const handlePasswordIconNew = (event) => {
    setShowConfirmPassword(event);
  };
  const handleChange = () => {};
  useEffect(() => {}, []);
  const handleGoTOSignUp=()=>{
    props.Redirectpath("/")
  }
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
          <div>{/* <img src={BubbleImg} width="100%" /> */}</div>
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
          ></Typography>
          <Typography color="#4B5563" sx={{ mt: 1 }}>
            Please Register yourself to access the application.
          </Typography>

          {/* Form */}
          <Box component="form" noValidate sx={{ mt: 4 }}>
            <div style={{ padding: "10px 0px" }}>
              <Input
                name="fullNm"
                type="text"
                id="fullNm"
                label={"Full Name"}
                borderRadius="8px"
                backgroundColor="white"
                color="#707EAE"
                placeholder={"Full Name"}
                required={true}
                inputRef={register("fullNm", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z\s]+$/, // Regex to allow only alphabets and spaces
                    message: "Full Name must contain only alphabets",
                  },
                })}
              />
              <div>
                {errors.fullNm && errors.fullNm.type === "required" && (
                  <ErrorMessage message="Full Name is required!" />
                )}
                {errors.fullNm && (
                  <ErrorMessage message={errors.fullNm.message} />
                )}
              </div>
            </div>

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

                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
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
                    name="newpassword"
                    type={showPassword ? "text" : "password"}
                    id="newpassword"
                    label="New Password"
                    borderRadius="8px"
                    border="none"
                    backgroundColor="white"
                    maxLength={16}
                    color="#707EAE"
                    visibilityIcon
                    visibilityIconColor="#0FA5D8"
                    placeholder="New Password"
                    required={true}
                    hanldeshowPassword={handlePasswordIcon}
                    inputRef={register("newpassword", {
                      onChange: (e) => {
                        handleChange(e);
                      },
                      required: "New Password is Required",
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/gm,
                    })}
                  />

                  <div>
                    {errors.newpassword &&
                      errors.newpassword.type === "required" && (
                        <ErrorMessage message="Required !!" />
                      )}
                    {errors.newpassword &&
                      errors.newpassword.type === "pattern" && (
                        <ErrorMessage message="Password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, and one special character." />
                      )}
                  </div>
                </div>
                <div style={{ padding: "10px 0px" }}>
                  <Input
                    name="conformPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    id="conformPassword"
                    label="Confirm New Password"
                    borderRadius="8px"
                    maxLength={15}
                    minLength={10}
                    visibilityIcon
                    border="none"
                    backgroundColor="white"
                    color="#707EAE"
                    required={true}
                    visibilityIconColor="#0FA5D8"
                    hanldeshowPassword={handlePasswordIconNew}
                    placeholder="Confirm New Password"
                    inputRef={register("conformPassword", {
                      required: "Required !!!",
                      onChange: (e) => {
                        handleChange(e);
                      },
                      validate: (value) =>
                        value === watch("newpassword") ||
                        "Password do not match",
                    })}
                  />

                  {errors.conformPassword && (
                    <ErrorMessage message={errors.conformPassword.message} />
                  )}
                </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link
                sx={{
                  display: "block",
                  mt: 1,
                  color: "#2B3674",
                  cursor: "pointer",
                }}
                onClick={()=>handleGoTOSignUp()}
              >
                Already Registered to go sign up
              </Link>
            </div>
            <div style={{ padding: "15px 0px" }}>
              <ActionButton
                backgroundColor="#3399FF"
                color="white"
                fullWidth={true}
                buttonText="Register"
                handleSubmit={handleSubmit(handleRegister)}
              />
            </div>
          </Box>

        
        </Box>
      </Grid>
    </Grid>
  );
}
