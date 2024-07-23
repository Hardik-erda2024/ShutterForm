"use client";
import { Suspense } from "react";
import MainForm from "./component/MainForm";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <MainForm />
    </Suspense>
  );
}
