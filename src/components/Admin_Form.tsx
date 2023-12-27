import React, { ChangeEvent, FormEvent } from "react";
import { TextField, Button, Grid, Paper, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MyFormData } from "../types/types";

interface MyFormProps {
  label: string;
  formData: MyFormData;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

const MyForm: React.FC<MyFormProps> = ({
  label,
  formData,
  onInputChange,
  onSubmit,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  const isFormEmpty = Object.values(formData).some((value) => value === "");

  const isPasswordMatch = formData.password === formData.confirmPassword;

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ position: "absolute", top: "25%" }}
    >
      <Grid
        item
        xs={12}
        sm={10}
        md={8}
        lg={6}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Paper
          elevation={3}
          style={{ padding: "20px", maxWidth: "600px", width: "100%" }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            {label} Form
          </Typography>

          <Box style={{ position: "absolute", left: "60%", top: "6%" }}>
            <Button>
              <CloseIcon />
            </Button>
          </Box>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Middle Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="middlename"
                  value={formData.middlename}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!isPasswordMatch}
                  helperText={!isPasswordMatch && "Passwords do not match"}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              style={{ marginTop: "20px" }}
              disabled={isFormEmpty || !isPasswordMatch}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MyForm;
