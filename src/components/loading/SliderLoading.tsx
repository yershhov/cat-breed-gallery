import { useMediaQuery } from "usehooks-ts";
import { SlideImageLoading } from "./SlideImageLoading";

export const SliderLoading = () => {
  return (
    <div className="flex h-screen w-full flex-col gap-4 bg-white p-4 md:h-[90%] md:rounded-3xl">
      <SlideImageLoading />
      <div className="grid gap-4">
        <div className="h-5 w-1/3 rounded-xl bg-antiFlash"></div>
        <div className="grid gap-2">
          <div className="h-3 w-full rounded-xl bg-antiFlash" />
          <div className="h-3 w-full rounded-xl bg-antiFlash" />
          <div className="h-3 w-full rounded-xl bg-antiFlash" />
          <div className="h-3 w-1/2 rounded-xl bg-antiFlash" />
        </div>
      </div>
    </div>
  );
};
