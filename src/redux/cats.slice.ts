import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getBreeds, getRandomCat } from "../api/catBreedGalleryService";

interface CatsState {
  breeds?: any[];
  breedsState: string;

  cats?: any[];
  catsState: string;
}

const initialState: CatsState = {
  breedsState: "idle",
  catsState: "idle",
};

export const fetchBreeds = createAsyncThunk("cats/fetchBreeds", async () => {
  const response = await getBreeds();

  const shuffled = response.data.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 5);
  console.log(selected);

  return selected;
});

export const fetchInitialCats = createAsyncThunk(
  "cats/fetchCats",
  async (breeds: any[]) => {
    const initialCats: any[] = [];
    for (const breed of breeds) {
      const cat = await getRandomCat(breed.id);
      initialCats.push(cat.data);
    }
    return initialCats;
  }
);

export const fetchAnotherCatOfTheBreed = createAsyncThunk(
  "cats/fetchfetchAnotherCatOfTheBreed",
  async (anotherCatOfTheBreedRequestModel: any, _) => {
    //@ts-ignore
    const cat = await getRandomCat(anotherCatOfTheBreedRequestModel.breedId);
    return {
      newCat: cat.data,
      //@ts-ignore
      currentSlideIndex: anotherCatOfTheBreedRequestModel.currentSlideIndex,
    };
  }
);

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBreeds.pending, (state, _) => {
        state.breedsState = "pending";
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.breeds = action.payload;
        state.breedsState = "fulfilled";
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        console.error(action.payload);
        state.breedsState = "error";
      });

    builder
      .addCase(fetchInitialCats.pending, (state, _) => {
        state.catsState = "pending";
      })
      .addCase(fetchInitialCats.fulfilled, (state, action) => {
        state.cats = action.payload;
        state.catsState = "fulfilled";
      })
      .addCase(fetchInitialCats.rejected, (state, action) => {
        console.error(action.payload);
      });

    builder
      .addCase(fetchAnotherCatOfTheBreed.pending, (state, _) => {
        state.catsState = "pending";
      })
      .addCase(fetchAnotherCatOfTheBreed.fulfilled, (state, action) => {
        state.cats?.splice(
          action.payload.currentSlideIndex,
          1,
          action.payload.newCat
        );
        state.catsState = "fulfilled";
      })
      .addCase(fetchAnotherCatOfTheBreed.rejected, (state, action) => {
        console.error(action.payload);
      });
  },
});

export const {} = catsSlice.actions;

export default catsSlice.reducer;
