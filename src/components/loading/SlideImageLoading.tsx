import React from "react";
import { LoadingSpinner } from "./LoadingSpinner";

export const SlideImageLoading = () => {
  return (
    <div className="h-full w-full rounded-3xl border bg-antiFlash md:h-[25rem]">
      <LoadingSpinner />
    </div>
  );
};
