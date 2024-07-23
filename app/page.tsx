"use client";
import { Providers } from "./RTK/provider";
import { store } from "./RTK/store";
// import { Providers } from "./RTK/provider";
import BtnComp from "./component/BtnComp";
import MainForm from "./component/MainForm";
import { Provider, useSelector } from "react-redux";

export default function Home() {
  return (
      <MainForm />
  );
}
