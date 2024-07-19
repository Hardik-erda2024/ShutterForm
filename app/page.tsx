"use client"
import MainForm from "./component/MainForm";
import { useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state:any) => state.counter.value);
  return (
    <>
    <MainForm/>
    <h1>{count}</h1>
    </>
  );
}
