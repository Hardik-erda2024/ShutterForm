import { cardCompInf } from "../interfaces/compInterface";

export default function CardComp(prop: cardCompInf) {
  const { title, children } = prop;
  return (
    <div className="w-full mt-5 max-w-lx p-4 bg-white border border-gray-200 rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-xl font-medium text-gray-900 mb-5 dark:text-white">
        {title}
      </h5>
      {children}
    </div>
  );
}
