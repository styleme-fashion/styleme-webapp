import { createStore } from "zustand/vanilla";

export type AvatarState = {
  uid: string | null;
  assetId: string | null;
};

export type AvatarActions = {
  setUid: (uid: string | null) => void;
  setAssetId: (assetId: string | null) => void;
};

export type AvatarStore = AvatarState & AvatarActions;

export const defaultAvatarState: AvatarState = {
  uid: null,
  assetId: null,
};

export const createAvatarStore = () => {
  return createStore<AvatarStore>((set) => ({
    ...defaultAvatarState,
    setUid: (uid) => set({ uid }),
    setAssetId: (assetId) => set({ assetId }),
  }));
};
