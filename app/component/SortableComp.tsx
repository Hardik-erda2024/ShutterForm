"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

function SortableComp(props: any) {
  const { attributes, transform, transition, listeners, setNodeRef } =
    useSortable({ id: props.id });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
    >
      sortableComp
    </div>
  );
}

export default SortableComp;
