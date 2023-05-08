import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { SeeAnotherButton } from "./components/common/SeeAnotherButton";
import { SlideImageLoading } from "./components/loading/SlideImageLoading";
import { useAppSelector } from "./store";

export const BreedSlide = (props: { index: number }) => {
  const breeds = useAppSelector((state) => state.cats.breeds);
  const breedsState = useAppSelector((state) => state.cats.breedsState);

  const [cats, catsState] = [
    useAppSelector((state) => state.cats.cats),
    useAppSelector((state) => state.cats.catsState),
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex h-full w-full flex-col gap-2 bg-white md:rounded-3xl md:p-4 ">
      <div className="h-full md:h-[25rem] md:rounded-3xl">
        {catsState === "pending" && <SlideImageLoading />}
        {catsState === "fulfilled" && (
          <img
            src={cats![props.index][0].url}
            className="h-full w-full border-antiFlash object-cover md:rounded-3xl
            md:border"
          />
        )}
      </div>
      <div
        className="pb-30 absolute bottom-0 flex flex-col gap-1 bg-black bg-opacity-50 p-4 pb-28 text-antiFlash backdrop-blur-xl md:relative 
        md:bg-white md:bg-opacity-100 md:p-0 md:text-darkBlue md:backdrop-blur-none"
      >
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">{breeds![props.index].name}</h1>
          {!isMobile && (
            <div className="w-36">
              <SeeAnotherButton />
            </div>
          )}
        </div>
        <p className="text-sm">{breeds![props.index].description}</p>
      </div>
    </div>
  );
};
