import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { store, useAppDispatch, useAppSelector } from "./store";
import { fetchBreeds, fetchInitialCats } from "./redux/cats.slice";
import { BreedSlide as BreedSwiperSlide } from "./BreedSwiperSlide";
import { swiperSetSwiper } from "./redux/swiper.slice";
import { NavButton } from "./components/common/NavButton";
import { CustomChevron } from "./components/common/CustomChevron";
import { useMediaQuery } from "usehooks-ts";
import { SliderLoading } from "./components/loading/SliderLoading";
import { v4 as uuid } from "uuid";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { CustomSwiperNavMobile } from "./CustomSwiperNavMobile";

const App = () => {
  const dispatch = useAppDispatch();
  const [breeds, breedsState] = [
    useAppSelector((state) => state.cats.breeds),
    useAppSelector((state) => state.cats.breedsState),
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    dispatch(fetchBreeds()).then((res) => {
      dispatch(fetchInitialCats(res.payload));
    });
  }, []);

  return (
    <div
      className="h-screen w-full bg-gray-200 font-noto font-normal
               text-darkBlue md:grid md:place-items-center"
    >
      <div className="relative flex items-center gap-4">
        {!isMobile && <CustomChevron type={"prev"} />}

        <div className="flex h-[80%] w-full flex-col gap-4 md:h-[40rem] md:w-[40rem]">
          {breedsState === "pending" && <SliderLoading />}
          {breedsState === "fulfilled" && (
            <Swiper
              className="h-screen w-full bg-white delay-1000 md:h-[90%] md:rounded-3xl"
              modules={[Navigation]}
              onInit={(swiper) => dispatch(swiperSetSwiper(swiper))}
              slidesPerView={1}
            >
              {breeds!.map((item, index) => {
                return (
                  <SwiperSlide>
                    <BreedSwiperSlide index={index} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
          {!isMobile && breedsState === "fulfilled" && (
            <div className="flex justify-center gap-2">
              {breeds!.map((item, index) => {
                return <NavButton key={uuid()} index={index} />;
              })}
            </div>
          )}
          {isMobile && <CustomSwiperNavMobile />}
        </div>
        {!isMobile && <CustomChevron type={"next"} />}
      </div>
    </div>
  );
};

export default App;
