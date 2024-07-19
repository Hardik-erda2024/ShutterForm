import * as yup from "yup";
export const modalSchema = yup.object({
  modal: yup.object({
    Name: yup.string().min(2, "minimum 2 characters required").required("Name is required"),
    Email: yup.string().email("Enter valid email").required("Email is required"),
    Phone: yup.string().matches(/^[6-9]\d{9}$/,"Enter indian phone number").required("Phone Number is required"),
  }),
});
