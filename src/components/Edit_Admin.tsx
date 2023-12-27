import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Admin_Form from "./Admin_Form";
import { getAdminEditData, updateAdmin } from "../apiCalls/apiCalls";

export interface tableData {
  _id: string;
  username: string;
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Edit_Admin = ({
  dataFromParent,
  tocken,
  onForm
}: {
  dataFromParent: string;
  tocken: string;
  onForm:(data:boolean)=>void;
}) => {

  const [formControll, setFormControll] = useState<boolean>(true);

  const [editData, setEditData] = useState<tableData>({
    _id: "",
    username: "",
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdminEditData(dataFromParent, tocken);
      setEditData(data);
    };
    fetchData();
  }, [dataFromParent]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(editData);
    const data = await updateAdmin(editData, tocken);
    console.log(data);

    setFormControll(false);
    onForm(formControll);
  };
  return (
    <div>
      <Admin_Form
        label={"Edit"}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        formData={editData}
      />
    </div>
  );
};

export default Edit_Admin;
