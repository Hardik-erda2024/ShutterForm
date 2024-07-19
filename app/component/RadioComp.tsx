import _ from "lodash";
import { radioCompInf } from "../interfaces/compInterface";

export default function RadioComp(prop:radioCompInf) {
    const {register,registerName,value,error} = prop
  return (
    <>
    {value.map((item,index)=>
      <div className="flex items-center mb-4" key={index}>
        <input
          id={item}
          type="radio"
          value={item}
          {...register(registerName)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        <label
          htmlFor={item}
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
          {item}
        </label>
        <span className="text-red-600">{_.get(error,`${registerName}`)?.message}</span>
      </div>
            )}
          </>
  );
}
