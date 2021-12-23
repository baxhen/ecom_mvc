import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { reducers } from "./reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = createStore(reducers, composeWithDevTools());

const makeStore = () => {
  return store;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export an assembled wrapper
export const storeWrapper = createWrapper(makeStore, { debug: false });
