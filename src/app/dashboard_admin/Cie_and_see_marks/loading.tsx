import React from "react";
import { CircleLoader } from "react-spinners";

export default function DashboardLoading() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-800">
      <CircleLoader color="white" size={50} />
    </div>
  );
}
