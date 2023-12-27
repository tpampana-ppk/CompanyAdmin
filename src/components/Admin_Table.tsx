import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getCompanies } from "../apiCalls/apiCalls";
import { admindata } from "../types/types";

const Admin_Table = ({
  onDataSelect,
  tocken,
}: {
  onDataSelect: (data: string) => void;
  tocken: string;
}) => {
  const [adminData, setAdminData] = useState<admindata[]>([]);

  useEffect(() => {
    const fetchdata = async () => {
      const data = await getCompanies(tocken);
      setAdminData(data);
    };
    fetchdata();
  }, [tocken]);

  const handleRowClick = (data: admindata) => {
    onDataSelect(data._id);
  };

  return (
    <Box sx={{ position: "absolute", top: "25%", left: "20%" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>AdminName</TableCell>
            <TableCell>role</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>created at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminData.map((element, index) => (
            <TableRow
              key={index}
              onClick={() => handleRowClick(element)}
              hover
              style={{ cursor: "pointer" }}
            >
              <TableCell>{element.username}</TableCell>
              <TableCell>{element.role}</TableCell>
              <TableCell>{element.email}</TableCell>
              <TableCell>{element.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Admin_Table;
