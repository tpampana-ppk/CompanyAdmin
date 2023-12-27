import axios from "axios"
import { tableData } from "../components/Edit_Admin";
import { MyFormData } from "../components/Add_Admin";

const baseUrl = `https://dev-admin.sunrises.io/api/`;

export const getCompanies = async(tocken:string) => {
  const dataTableParams = {
  columns: [
    { data: 'username', name: '', searchable: true, orderable: true, search: { value: '', regex: false } },
    { data: 'role', name: '', searchable: true, orderable: true, search: { value: '', regex: false } },
    { data: 'email', name: '', searchable: true, orderable: true, search: { value: '', regex: false } },
    { data: 'createdAt', name: '', searchable: false, orderable: true, search: { value: '', regex: false } },
  ],
  draw: 1,
  length: 10,
  order: [
    { column: 0, dir: 'asc' },
  ],
  search: { value: '', regex: false },
  start: 0,
};
  const response=await axios.post(baseUrl+`get-admins/companyadmin`,dataTableParams,{
    headers: {
      'Authorization': `Bearer ${tocken}`,
      'Content-Type': 'application/json'
    }})
    return response.data.data;
}

export const getAdminEditData=async(dataFromParent:string,tocken:string)=>{
  const responese = await axios.get(baseUrl+`get-user-by-id?id=${dataFromParent}`,{
    headers: {
      'Authorization': `Bearer ${tocken}`,
      'Content-Type': 'application/json'
    }})
    return responese.data;
  }

export const updateAdmin = (editData:tableData,tocken:string)=>{
  const response = axios.post(baseUrl+`update-user`,editData,{
    headers: {
      'Authorization': `Bearer ${tocken}`,
      'Content-Type': 'application/json'
    }
  })
  return response;
}

export const addAdmin = async(formData:MyFormData,tocken:string) =>{
   
  const newformData = (({ confirmPassword, ...rest }) =>
      rest)(formData);

  const data={...newformData,role:'companyadmin'}

  const response=await axios.post(baseUrl+`create-companyadmin`,data,{
    headers: {
      'Authorization': `Bearer ${tocken}`,
      'Content-Type': 'application/json'
    }
  });
  console.log(response)
}
