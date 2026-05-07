/**
 * Portfolio UI State
 * Manages modal open/close state for each radar section.
 */

import { create } from "zustand";

export type ModalKey = "projects" | "skills" | "curiosity" | "about" | "contact";

type ModalRecord = Record<ModalKey, { open: boolean }>;

interface PortfolioState {
  modals: ModalRecord;
  openModal: (key: ModalKey) => void;
  closeModal: (key: ModalKey) => void;
}

const initialModals: ModalRecord = {
  projects: { open: false },
  skills: { open: false },
  curiosity: { open: false },
  about: { open: false },
  contact: { open: false },
};

export const usePortfolioStore = create<PortfolioState>((set) => ({
  modals: initialModals,

  openModal: (key) =>
    set((state) => ({
      modals: { ...state.modals, [key]: { open: true } },
    })),

  closeModal: (key) =>
    set((state) => ({
      modals: { ...state.modals, [key]: { open: false } },
    })),
}));

// Selectors — use these in components for optimised re-renders
export const selectModalOpen =
  (key: ModalKey) => (state: PortfolioState) =>
    state.modals[key].open;
