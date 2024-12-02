import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const { login } = useAuth();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      login({
        email: values.email,
        name: values.email.split("@")[0],
      });
      setOpenSnackbar(true); // Show the Snackbar when login is successful
      setSubmitting(false);
    }, 400);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close the Snackbar
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 8,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form style={{ width: "100%", marginTop: 16 }}>
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
              />
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>

      {/* Snackbar notification for successful login */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Automatically hide after 6 seconds
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Login successful!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
