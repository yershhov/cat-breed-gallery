import { fetchAnotherCatOfTheBreed } from "../../redux/cats.slice";
import { store, useAppSelector } from "../../store";

export const SeeAnotherButton = () => {
  const breeds = useAppSelector((state) => state.cats.breeds);
  const currentSlideIndex = useAppSelector(
    (state) => state.swiper.currentSlideIndex
  );
  return (
    <button
      type="button"
      className="w-full rounded-[15px] bg-gradient-to-b from-gradientPrimaryFrom 
                to-gadientPrimaryTo px-5 py-2 text-center text-sm
                font-medium text-white hover:opacity-90 focus:outline-none"
      onClick={() => {
        const anotherCatOfTheBreedRequest = {
          breedId: breeds![currentSlideIndex].id,
          currentSlideIndex: currentSlideIndex,
        };
        store.dispatch(fetchAnotherCatOfTheBreed(anotherCatOfTheBreedRequest));
      }}
    >
      See a
    </button>
  );
};
