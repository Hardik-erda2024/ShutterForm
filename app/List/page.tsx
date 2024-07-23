"use client";

import { Provider } from "react-redux";
import { store } from "../RTK/store";
import OrderList from "./OrderList";
import { Providers } from "../RTK/provider";

export default () => {
  return (
    // <Providers>
    <OrderList />
    // </Providers>

  );
};
