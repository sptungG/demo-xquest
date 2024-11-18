import { action, Action, createStore, createTypedHooks } from "easy-peasy";

export interface TAppState {
  isOpenSidebar: boolean;
  theme: string;
  lang: string;
}
export interface TQuestsActions {
  toggleSidebar: Action<TAppState, void>;
}

type TStoreModel = TAppState & TQuestsActions;

// MAIN
const store = createStore<TStoreModel>({
  isOpenSidebar: false,
  theme: "light",
  lang: "en",
  toggleSidebar: action((state) => {
    const newState = !state.isOpenSidebar;
    state.isOpenSidebar = newState;
  }),
});

const typedHooks = createTypedHooks<TStoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export default store;
