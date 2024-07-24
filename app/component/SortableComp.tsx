"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import SelectComp from "./SelectComp";
import InputComp from "./InputComp";
import BtnComp from "./BtnComp";

function SortableComp(props: any) {
  const { attributes, transform, transition, listeners, setNodeRef } =
    useSortable({ id: props.id });
  const {id,
    index,
    register,
    shutterList,
    errors,
    setValue,
    dListWatch,
    remove,
    insert,
  } = props;
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      className="flex"
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
      key={id}
    >
      <span className="self-end mb-3 me-2 cursor-move" {...listeners}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </span>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 mt-4">
        <SelectComp
          htmlFor="shutterName"
          label="Shutter Name"
          register={register}
          registerName={`dList.${index}.shutterName`}
          value={shutterList}
          error={errors}
        />
        <InputComp
          htmlFor="width"
          label="Width"
          register={register}
          registerName={`dList.${index}.width`}
          type="text"
          placeholder="0"
          error={errors}
          onchange={(e: any) => {
            setValue(
              `dList.${index}.area`,
              String(
                Number(e.target.value) *
                  Number(dListWatch && dListWatch[index].height)
              )
            );
          }}
        />
        <InputComp
          htmlFor="height"
          label="Height"
          register={register}
          registerName={`dList.${index}.height`}
          error={errors}
          placeholder="0"
          onchange={(e: any) => {
            setValue(
              `dList.${index}.area`,
              String(
                Number(e.target.value) *
                  Number(dListWatch && dListWatch[index].width)
              )
            );
          }}
          type="text"
        />

        <InputComp
          htmlFor="area"
          label="Area"
          register={register}
          registerName={`dList.${index}.area`}
          isDisable={true}
          type="text"
          error={errors}
          placeholder="0"
        />

        <BtnComp
          text="Remove"
          color="blue"
          onclick={() => {
            remove(index);
          }}
        />
        <BtnComp
          text="Clone"
          color="blue"
          onclick={() => {
            insert(
              index + 1,
              dListWatch
                ? dListWatch[index]
                : [
                    {
                      shutterName: "",
                      area: "",
                      height: "",
                      width: "",
                    },
                  ]
            );
          }}
        />
      </div>
    </div>
  );
}

export default SortableComp;
