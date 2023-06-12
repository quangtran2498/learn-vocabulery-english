import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./searchSlice";
import { pokemonApi } from "./pokemonApi";
import userInfo from './slice/infoUser';
import learnVocabulery from './slice/vocabulery';
export const store = configureStore({
  reducer: {
    search: searchReducer,
    pokemonApi: pokemonApi.reducer,
    userInfo:userInfo,
    learnVocabulery:learnVocabulery
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(pokemonApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;