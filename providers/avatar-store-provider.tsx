"use client";

import { AvatarStore, createAvatarStore } from "@/store/avatar";
import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

type AvatarApi = ReturnType<typeof createAvatarStore>;
export const AvatarContext = createContext<AvatarApi | undefined>(undefined);

export const AvatarStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef<AvatarApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createAvatarStore();
  }

  return (
    <AvatarContext.Provider value={storeRef.current}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatarStore = <T,>(selector: (store: AvatarStore) => T): T => {
  const avatarStoreContext = useContext(AvatarContext);

  if (!avatarStoreContext) {
    throw new Error("useAvatarStore must be used within a AvatarProvider");
  }

  return useStore(avatarStoreContext, selector);
};
