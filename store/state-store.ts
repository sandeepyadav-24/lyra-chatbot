import { create } from "zustand";

type StateStore = {
  count: number;
  increment: () => void;
};

const useStateStore = create<StateStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useStateStore;
