import { Box, Button } from "@mui/material";
import Admin_Table from "./Admin_Table";
import { useContext, useState } from "react";
import Add_Admin from "./Add_Admin";
import Edit_Admin from "./Edit_Admin";
import Admin_Delete from "./Admin_Delete";
import { authTocken } from "../context/authContext";

const Company_Dashboard = () => {
  const { tocken } = useContext(authTocken);
  const [selectedRow, setSelectedRow] = useState<string>("");
  const [status, setStatus] = useState({
    operation: "",
  });

  const handleDataSelect = (id: string) => {
    setSelectedRow(id);
  };

  const handleButtonClick = (operation: string) => {
    setStatus({ operation });
  };

  const handleForm = (data: boolean) => {
    if (data == false) {
      setStatus({ operation: "" });
    }
  };

  return (
    <div>
      <Box sx={{ position: "absolute", top: "10%", left: "20%" }}>
        <Button onClick={() => handleButtonClick("add")}>Add</Button>
        <Button onClick={() => handleButtonClick("edit")}>Edit</Button>
        <Button onClick={() => handleButtonClick("delete")}>Delete</Button>
      </Box>

      {!status.operation && (
        <Admin_Table onDataSelect={handleDataSelect} tocken={tocken} />
      )}

      {status.operation === "add" ? (
        <Add_Admin tocken={tocken} onForm={handleForm} />
      ) : status.operation === "edit" ? (
        <Edit_Admin
          dataFromParent={selectedRow}
          tocken={tocken}
          onForm={handleForm}
        />
      ) : (
        <Admin_Delete />
      )}
    </div>
  );
};

export default Company_Dashboard;
