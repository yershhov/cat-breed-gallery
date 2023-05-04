import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Swiper from "swiper";

interface SwiperSliceState {
  swiper?: any;
  currentSlideIndex: number;
}

const initialState: SwiperSliceState = {
  currentSlideIndex: 0,
};

export const swiperSlice = createSlice({
  name: "swiper",
  initialState,
  reducers: {
    swiperSetSwiper: (state, action: PayloadAction<any>) => {
      state.swiper = action.payload;
    },
    swiperSlideIndexNext: (state) => {
      state.currentSlideIndex += 1;
    },
    swiperSlideIndexPrev: (state) => {
      state.currentSlideIndex -= 1;
    },
    swiperSlideIndexSet: (state, action: PayloadAction<number>) => {
      state.currentSlideIndex = action.payload;
    },
  },
});

export const {
  swiperSetSwiper,
  swiperSlideIndexNext,
  swiperSlideIndexPrev,
  swiperSlideIndexSet,
} = swiperSlice.actions;

export default swiperSlice.reducer;
