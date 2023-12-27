import { ChangeEvent, FormEvent, useState } from "react";
import Admin_Form from "./Admin_Form";
import { addAdmin } from "../apiCalls/apiCalls";
import { MyFormData } from "../types/types";

const initialData = {
  firstname: "",
  middlename: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Add_Admin = ({ tocken, onForm }: { tocken: string; onForm :(data:boolean)=>void}) => {
  const [formData, setFormData] = useState<MyFormData>(initialData);

  const [formControll,setFormControll]=useState<boolean>(true)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = await addAdmin(formData, tocken);
    console.log(data)
    setFormControll(false)
    onForm(formControll)
  };

  return (
    <div>
      <Admin_Form
        label={"Add"}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default Add_Admin;
