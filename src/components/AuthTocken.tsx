import React, { ChangeEvent, useState } from "react";
import { Button, TextField, Box } from "@mui/material";

interface AuthTokenProps {
  onSubmit: (token: string) => void;
}

const AuthTocken: React.FC<AuthTokenProps> = ({ onSubmit }) => {
  const [token, setToken] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setToken(inputValue);
    setIsButtonDisabled(!inputValue.trim());
  };

  const handleSubmit = () => {
    onSubmit(token);
  };

  return (
    <Box
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        onChange={handleInputChange}
        label="Authorization Token"
        sx={{ marginBottom: 2 }}
      />
      <Box marginTop="auto">
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={isButtonDisabled}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AuthTocken;
