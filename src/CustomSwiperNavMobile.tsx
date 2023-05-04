import { useAppSelector } from "./store";
import { CustomChevron } from "./components/common/CustomChevron";
import { SeeAnotherButton } from "./components/common/SeeAnotherButton";

export const CustomSwiperNavMobile = () => {
  const breedsState = useAppSelector((state) => state.cats.breedsState);

  return (
    <>
      {breedsState === "fulfilled" && (
        <div className="absolute bottom-0 z-50 flex w-full items-center justify-center gap-4 p-4 pb-12">
          <CustomChevron type={"prev"} />
          <SeeAnotherButton />
          <CustomChevron type={"next"} />
        </div>
      )}
    </>
  );
};
