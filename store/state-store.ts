"use client";

import { create } from "zustand";
import { chatDummyData } from "./dummy-data";

type ChatMessage = {
  message: string;
  messageType: "user" | "assistant";
};

type StateStore = {
  rightSidebarOpen: boolean;
  setRightSidebarOpen: (value: boolean) => void;
  toggleRightSidebar: () => void;
  leftSidebarOpen: boolean;
  setLeftSidebarOpen: (value: boolean) => void;
  toggleLeftSidebar: () => void;
  chatWithTeamOpen: boolean;
  setChatWithTeamOpen: (value: boolean) => void;
  chatMessages: ChatMessage[];
  setChatMessages: (value: ChatMessage[]) => void;
};

const getInitialState = (key: string, defaultValue: boolean = false) => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  }
  return defaultValue;
};

const useStateStore = create<StateStore>((set) => ({
  rightSidebarOpen: getInitialState("rightSidebarOpen", false),
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
  leftSidebarOpen: getInitialState("leftSidebarOpen", false),
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
  chatWithTeamOpen: getInitialState("chatWithTeamOpen", true),
  setChatWithTeamOpen: (value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chatWithTeamOpen", JSON.stringify(value));
    }
    set({ chatWithTeamOpen: value });
  },
  chatMessages: (chatDummyData as ChatMessage[]) || [],
  setChatMessages: (value) => {
    set({ chatMessages: value });
  },
}));

export default useStateStore;
