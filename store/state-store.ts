"use client";

import { create } from "zustand";

type StateStore = {
  rightSidebarOpen: boolean;
  setRightSidebarOpen: (value: boolean) => void;
  toggleRightSidebar: () => void;
};

// Helper function to safely access localStorage
const getInitialRightSidebarState = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("rightSidebarOpen");
    return stored ? JSON.parse(stored) : false;
  }
  return false;
};

const useStateStore = create<StateStore>((set) => ({
  rightSidebarOpen: getInitialRightSidebarState(),
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
}));

export default useStateStore;
