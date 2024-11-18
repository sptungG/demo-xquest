import { action, Action, createStore, createTypedHooks } from "easy-peasy";
import { MockOnboardingQuests, MockTemplateQuests } from "../common/constants";

export interface TQuest {
  name: string;
  desc: string;
  star: number;
  type?: "ONCE" | "DAILY";
  category?: string;
}

export interface TQuestsState {
  templateQuests: TQuest[];
  quests: TQuest[];
}
export interface TQuestsActions {
  addTemplateQuests: Action<TQuestsState, TQuest>;
  addQuest: Action<TQuestsState, TQuest>;
}

type TStoreModel = TQuestsState & TQuestsActions;

// MAIN
const store = createStore<TStoreModel>({
  templateQuests: MockTemplateQuests,
  quests: MockOnboardingQuests,
  addTemplateQuests: action((state, payload) => {
    state.templateQuests.push(payload);
  }),
  addQuest: action((state, payload) => {
    state.quests.push(payload);
  }),
});

const typedHooks = createTypedHooks<TStoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export default store;
