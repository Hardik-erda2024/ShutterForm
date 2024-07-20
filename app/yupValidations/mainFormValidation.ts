import * as yup from "yup";
export const mainFormSchema = yup.object({
  dList: yup.array(
    yup.object({
      shutterName: yup.string().nonNullable("select any one").required("select any one"),
      width: yup.string().matches(/^[1-9][0-9]*$/, "Only grater then 0 number allowed").required("width required"),
      height: yup.string().matches(/^[1-9][0-9]*$/, "Only grater then 0 number allowed").required("height required"),
      area:yup.string()
    })
  ),
  discount:yup.string().matches(/^[0-9]+$/, "Only number allowed").required("discount required").test("discount error","Must be between 0 or 100",(value,contaxt)=>{return contaxt.parent.discountType ==="Ammount"?true:Number(value)<=100}),
  discountType:yup.string().required("select any one"),
  customerName:yup.string().required("select any one"),
  personName:yup.string().required("person Name required"),
  dueDate: yup.string().required("date required"),
});
