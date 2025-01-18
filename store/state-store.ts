"use client";

import { create } from "zustand";

type StateStore = {
  rightSidebarOpen: boolean;
  setRightSidebarOpen: (value: boolean) => void;
  toggleRightSidebar: () => void;
  leftSidebarOpen: boolean;
  setLeftSidebarOpen: (value: boolean) => void;
  toggleLeftSidebar: () => void;
};

const getInitialSidebarState = (key: string) => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : false;
  }
  return false;
};

const useStateStore = create<StateStore>((set) => ({
  rightSidebarOpen: getInitialSidebarState("rightSidebarOpen"),
  setRightSidebarOpen: (value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("rightSidebarOpen", JSON.stringify(value));
    }
    set({ rightSidebarOpen: value });
  },
  toggleRightSidebar: () =>
    set((state) => {
      const newState = !state.rightSidebarOpen;
      if (typeof window !== "undefined") {
        localStorage.setItem("rightSidebarOpen", JSON.stringify(newState));
      }
      return { rightSidebarOpen: newState };
    }),
  leftSidebarOpen: getInitialSidebarState("leftSidebarOpen"),
  setLeftSidebarOpen: (value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("leftSidebarOpen", JSON.stringify(value));
    }
    set({ leftSidebarOpen: value });
  },
  toggleLeftSidebar: () =>
    set((state) => {
      const newState = !state.leftSidebarOpen;
      if (typeof window !== "undefined") {
        localStorage.setItem("leftSidebarOpen", JSON.stringify(newState));
      }
      return { leftSidebarOpen: newState };
    }),
}));

export default useStateStore;
