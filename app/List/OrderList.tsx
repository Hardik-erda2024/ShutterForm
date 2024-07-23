"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import BtnComp from "../component/BtnComp";
import { useRouter } from "next/navigation";
import { deleteItem } from "../RTK/Features/shutterSell/shutterSellSlice";

export default function OrderList() {
  const shutterList = useSelector((state: any) => state.shutterSellList);
  const navigate = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-center my-3 text-3xl">Listing page</h1>
      <div className="w-1/2 mx-auto">
        <BtnComp
          solid={true}
          color="green"
          text="+ Create"
          onclick={() => navigate.push("/")}
        />
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-1/2 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Person Name
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {shutterList.map((item: any, index: number) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.personName}
                </th>
                <td className="px-6 py-4">{item.customerName}</td>
                <td className="px-6 py-4">{item.finalAmount}</td>
                <td className="px-6 py-4">{item.dueDate}</td>
                <td className="px-6 py-4">
                  <Link
                    href={`/?id=${index}`}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Edit
                  </Link>
                  <BtnComp
                    solid={true}
                    color="red"
                    text="Remove"
                    onclick={() => dispatch(deleteItem(index))}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
