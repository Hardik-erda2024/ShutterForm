import _ from "lodash";
import { selectCompInf } from "../interfaces/compInterface";

export default function SelectComp(prop: selectCompInf) {
  const { value, label, htmlFor, register,registerName,error } = prop;
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={htmlFor}
        {...register(registerName)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Select</option>
        {value.map((item,index) => (
          <option value={item} key={index}>{item}</option>
        ))}
      </select>
      <span className="text-red-600">{_.get(error,`${registerName}`)?.message}</span>
    </div>
  );
}
