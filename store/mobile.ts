import { create } from "zustand";

type Menu = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useMobileStore = create<Menu>((set) => ({
  isOpen: false,
  open: () => {
    set((state) => ({ isOpen: true }));
  },
  close: () => {
    set((state) => ({ isOpen: false }));
  },
}));
