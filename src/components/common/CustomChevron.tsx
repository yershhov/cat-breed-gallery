import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  swiperSlideIndexNext,
  swiperSlideIndexPrev,
} from "../../redux/swiper.slice";
import { useAppDispatch, useAppSelector } from "../../store";

type CustomChevronProps = {
  type: "prev" | "next";
};

export const CustomChevron = (props: CustomChevronProps) => {
  const dispatch = useAppDispatch();
  const currentSlideIndex = useAppSelector(
    (state) => state.swiper.currentSlideIndex
  );
  const swiper = useAppSelector((state) => state.swiper.swiper);
  const [breeds, breedsState] = [
    useAppSelector((state) => state.cats.breeds),
    useAppSelector((state) => state.cats.breedsState),
  ];
  return (
    <>
      {props.type === "prev" && breedsState === "fulfilled" && (
        <button
          disabled={currentSlideIndex === 0}
          onClick={() => {
            swiper.slidePrev();
            dispatch(swiperSlideIndexPrev());
          }}
        >
          <FaChevronLeft
            size={24}
            className={`text-primary ${
              currentSlideIndex === 0 && `opacity-50`
            }`}
          />
        </button>
      )}

      {props.type === "next" && breedsState === "fulfilled" && (
        <button
          disabled={currentSlideIndex === breeds!.length - 1}
          onClick={() => {
            swiper.slideNext();
            dispatch(swiperSlideIndexNext());
          }}
        >
          <FaChevronRight
            size={24}
            className={`text-primary ${
              currentSlideIndex === breeds!.length - 1 && `opacity-50`
            }`}
          />
        </button>
      )}
    </>
  );
};
