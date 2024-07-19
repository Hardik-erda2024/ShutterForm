import { inputCompInf } from "../interfaces/compInterface"
import _ from "lodash";
export default function InputComp(prop:inputCompInf){
    const {register,htmlFor,label,placeholder="",registerName,type,isDisable=false,onchange,error} = prop
    return(<>
    <div>
            <label
              htmlFor={htmlFor}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
              {label}
            </label>
            <input
              type={type}
              id={htmlFor}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder={placeholder}
              {...register(registerName,{onChange:onchange})}
              disabled={isDisable}
              />
              
              <span className="text-red-600">{_.get(error,`${registerName}`)?.message}</span>
          </div>
    </>)
}