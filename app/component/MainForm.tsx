"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InputComp from "./InputComp";
import CardComp from "./CardComp";
import SelectComp from "./SelectComp";
import BtnComp from "./BtnComp";
import { useEffect, useState } from "react";
import RadioComp from "./RadioComp";
import ModalComp from "./ModalComp";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalSchema } from "../yupValidations/modalValidation";
import { addCustomerDetails } from "../RTK/Features/customer/customerSlice";
import { shutterDetailsInf } from "../interfaces/compInterface";
import {
  addItem,
  updateItem,
} from "../RTK/Features/shutterSell/shutterSellSlice";
import { mainFormSchema } from "../yupValidations/mainFormValidation";
import { useRouter, useSearchParams } from "next/navigation";

export default function MainForm() {
  const dispatch = useDispatch();
  const searchparam = useSearchParams();
  const id = searchparam.get("id");
  const shutterSellListArr = useSelector((state: any) => state.shutterSellList);

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mainFormSchema),
    defaultValues: {
      dList: [{ shutterName: "", width: "", height: "", area: "" }],
      discount: "0",
      discountType: "Ammount",
      customerName: "",
      finalAmount:"0"
    },
  });
  useEffect(() => {
    id && reset({...shutterSellListArr[id],finalAmount:Total});
  }, []);
  const {
    register: modalRegister,
    handleSubmit: modalHandalSubmit,
    reset: modalReset,
    formState: { errors: modalError },
  } = useForm({ resolver: yupResolver(modalSchema) });
  const { fields, append, remove, insert } = useFieldArray({
    control,
    name: "dList",
  });
  const navigate = useRouter();
  const [showModal, setShowModal] = useState(false);
  function onSubmit(data: any) {
    id ? dispatch(updateItem({ id: id, data: data })) : dispatch(addItem(data));
    navigate.push("/List");
    console.log(data);
  }
  const dListWatch: shutterDetailsInf[] | undefined = watch("dList");

  const discountWatch = watch("discount");
  const discountTypeWatch = watch("discountType");
  const Total = sumOfArray(
    dListWatch ? dListWatch.map((item: any) => Number(item.area)) : [0]
  );
  useEffect(()=>{setValue('finalAmount',String(Total))},[Total])
  const customers = useSelector((state: any) => state.customerDetails);
  const shutterList = useSelector((state: any) => state.shutterList);
  function sumOfArray(arr: number[]) {
    let sum = 0;
    arr.forEach((item) => (sum += item));
    return sum;
  }
  return (
    <>
    <BtnComp color="blue" text="Listing Page" onclick={()=>navigate.push("/List")} solid={true}/>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 mx-auto mt-5 flex flex-col"
      >
        <div className="w-full max-w-lx p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="text-xl font-medium text-gray-900 mb-5 dark:text-white">
            Genral Details
          </h5>
          <div className="grid grid-cols-2 gap-4">
            <InputComp
              type="text"
              label="Person Name"
              htmlFor="personName"
              register={register}
              registerName="personName"
              placeholder="ex. john"
              error={errors}
            />
            <div className="grid grid-cols-2 gap-3">
              <BtnComp
                color="blue"
                text="+ customer"
                onclick={() => setShowModal(true)}
              />
              <SelectComp
                htmlFor="customer"
                label="Customer Name"
                register={register}
                registerName="customerName"
                value={customers.map((item: any) => item.modal.Name)}
                error={errors}
              />
            </div>
          </div>
          <InputComp
            type="date"
            label="Due Date"
            htmlFor="dueDate"
            registerName="dueDate"
            register={register}
            error={errors}
          />
        </div>
        <CardComp title="shutter Details">
          {fields.map((field, index) => (
            <div
              className="grid grid-cols-1 gap-6 sm:grid-cols-6 mt-4"
              key={field.id}
            >
              <SelectComp
                htmlFor="shutterName"
                label="Shutter Name"
                register={register}
                registerName={`dList.${index}.shutterName`}
                value={shutterList}
                error={errors}
              />
              <InputComp
                htmlFor="width"
                label="Width"
                register={register}
                registerName={`dList.${index}.width`}
                type="text"
                error={errors}
                onchange={(e: any) => {
                  setValue(
                    `dList.${index}.area`,
                    String(
                      Number(e.target.value) *
                        Number(dListWatch && dListWatch[index].height)
                    )
                  );
                }}
              />
              <InputComp
                htmlFor="height"
                label="Height"
                register={register}
                registerName={`dList.${index}.height`}
                error={errors}
                onchange={(e: any) => {
                  setValue(
                    `dList.${index}.area`,
                    String(
                      Number(e.target.value) *
                        Number(dListWatch && dListWatch[index].width)
                    )
                  );
                }}
                type="text"
              />

              <InputComp
                htmlFor="area"
                label="Area"
                register={register}
                registerName={`dList.${index}.area`}
                isDisable={true}
                type="text"
                error={errors}
              />

              <BtnComp
                text="Remove"
                color="red"
                onclick={() => {
                  remove(index);
                }}
              />
              <BtnComp
                text="Clone"
                color="blue"
                onclick={() => {
                  insert(
                    index + 1,
                    dListWatch
                      ? dListWatch[index]
                      : [
                          {
                            shutterName: "",
                            area: "0",
                            height: "0",
                            width: "0",
                          },
                        ]
                  );
                }}
              />
            </div>
          ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              append({ shutterName: "", width: "0", height: "0", area: "0" });
            }}
            className="mt-5 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            + Add
          </button>
          <InputComp htmlFor="total" register={register} registerName="finalAmount" label="Total" type="text" isDisable={true}/>
        </CardComp>
        <CardComp title="Discount">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 mt-4">
            <div className="flex flex-col space-y-3">
              <span className="text-2xl">Types of discount</span>
              <div className="flex space-x-3 ">
                <RadioComp
                  register={register}
                  registerName="discountType"
                  value={["Ammount", "Percentage"]}
                  error={errors}
                />
              </div>
              <InputComp
                htmlFor="discount"
                label="discount"
                register={register}
                registerName="discount"
                type="number"
                error={errors}
              />
            </div>
            <CardComp title="Summary">
              <p>
                <strong>Total:</strong> {Total}
              </p>
              <p>
                <strong>Discount:</strong>{" "}
                {discountTypeWatch === "Ammount"
                  ? Number(discountWatch) <= Total && "$ " + discountWatch
                  : Number(discountWatch) <= 100 && discountWatch + " %"}
              </p>
              <p>
                <strong>After discount:</strong>{" "}
                {discountTypeWatch === "Ammount"
                  ? Number(discountWatch) <= Total &&
                    "$ " + (Total - Number(discountWatch))
                  : Number(discountWatch) <= 100 &&
                    "$ " + (Total - (Total * Number(discountWatch)) / 100)}
              </p>
            </CardComp>
          </div>
        </CardComp>
        <input
          className="w-1/5 my-5 mx-auto focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          type="submit"
          value="Submit"
        />
      </form>
      {showModal && (
        <ModalComp
          btnText="+ customer"
          title="Add Customer"
          onclick={modalHandalSubmit((data) => {
            dispatch(addCustomerDetails(data));
            modalReset();
            setShowModal(false);
          })}
          closeOnclick={() => {
            modalReset();
            setShowModal(false);
          }}
        >
          <form>
            <InputComp
              htmlFor="name"
              label="Name"
              type="text"
              register={modalRegister}
              registerName="modal.Name"
            />
            {
              <span className="text-red-600 mt-2">
                {modalError.modal?.Name?.message}
              </span>
            }
            <InputComp
              htmlFor="email"
              label="Email"
              register={modalRegister}
              registerName="modal.Email"
              type="text"
            />
            {
              <span className="text-red-600 mt-2">
                {modalError.modal?.Email?.message}
              </span>
            }
            <InputComp
              htmlFor="phone"
              label="Phone Number"
              register={modalRegister}
              registerName="modal.Phone"
              type="text"
            />
            {
              <span className="text-red-600 mt-2">
                {modalError.modal?.Phone?.message}
              </span>
            }
          </form>
        </ModalComp>
      )}
    </>
  );
}
