import { swiperSlideIndexSet } from "../../redux/swiper.slice";
import { store, useAppSelector } from "../../store";

export const NavButton = (props: { index: number }) => {
  const currentSlideIndex = useAppSelector(
    (state) => state.swiper.currentSlideIndex
  );

  const swiper = useAppSelector((state) => state.swiper.swiper);

  return (
    <button
      className={`
    aspect-square h-3 rounded-xl ${
      currentSlideIndex === props.index ? `bg-primary` : `bg-lightGray`
    }
    `}
      onClick={() => {
        swiper.slideTo(props.index);
        store.dispatch(swiperSlideIndexSet(props.index));
      }}
    />
  );
};
