import { btnInputComboCompInf } from "../interfaces/compInterface";

export const btnInputComboComp = (prop: btnInputComboCompInf) =>{
  const {
    htmlFor,
    label,
    btnText,
    type,
    placeholder = "",
    register,
    onclick,
  } = prop;
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="grid grid-cols-2 gap-4">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          {btnText}
        </button>
        <input
          type={type}
          id={htmlFor}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder={placeholder}
          {...register(htmlFor)}
          onClick={(e) => {
            e.preventDefault();
           onclick && onclick();
          }}
        />
      </div>
    </div>
  );
}
