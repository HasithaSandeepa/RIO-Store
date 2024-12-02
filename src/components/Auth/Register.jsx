// src/components/Auth/Register.jsx
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthContext";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const Register = () => {
  const { register } = useAuth();

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      register({
        name: values.name,
        email: values.email,
      });
      setSubmitting(false);
    }, 400);
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
          Sign Up
        </Typography>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form style={{ width: "100%", marginTop: 16 }}>
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoFocus
                helperText={touched.name && errors.name}
                error={touched.name && Boolean(errors.name)}
              />
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
                autoComplete="new-password"
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
              />
              <Field
                as={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                helperText={touched.confirmPassword && errors.confirmPassword}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default Register;
