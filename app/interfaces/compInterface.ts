import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface inputCompInf {
  htmlFor: string;
  label: string;
  type: string;
  registerName: string;
  register: any;
  placeholder?: string;
  isDisable?: boolean;
  onchange?: any;
  onblur?: Function;
  error?:any
}

export interface btnInputComboCompInf {
  htmlFor: string;
  label: string;
  btnText: string;
  type: string;
  placeholder?: string;
  register: any;
  onclick?: () => void;
}

export interface cardCompInf {
  title: string;
  children?: any;
}

export interface selectCompInf {
  value: string[];
  label: string;
  htmlFor: string;
  registerName: string;
  register: any;
  error:any
}

export interface btnCompInf {
  text: string;
  color: string;
  onclick: any;
}

export interface radioCompInf {
  label?: string;
  register: any;
  registerName: string;
  htmlFor?: string;
  value: string[];
  error:any;
}

export interface ModalCompInf {
  btnText: string;
  title: string;
  children: string | React.JSX.Element | React.JSX.Element[];
  onclick: any;
  closeOnclick: any;
}

export interface customerDetailsInf {
  modal: { Name: string; Email: string; Phone: string };
}

export interface shutterDetailsInf{
  shutterName: string;
  width:string;
  height:string;
  area?:string;
}
