"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface ApplyModalInitialData {
  serviceType?: string;
  destination?: string;
}

interface ApplyModalContextType {
  isOpen: boolean;
  openApplyModal: (initialData?: ApplyModalInitialData) => void;
  closeApplyModal: () => void;
  initialData?: ApplyModalInitialData;
}

const ApplyModalContext = createContext<ApplyModalContextType | undefined>(undefined);

export function ApplyModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<ApplyModalInitialData | undefined>(undefined);

  const openApplyModal = useCallback((data?: ApplyModalInitialData) => {
    setInitialData(data);
    setIsOpen(true);
  }, []);

  const closeApplyModal = useCallback(() => {
    setIsOpen(false);
    setInitialData(undefined);
  }, []);

  return (
    <ApplyModalContext.Provider
      value={{
        isOpen,
        openApplyModal,
        closeApplyModal,
        initialData,
      }}
    >
      {children}
    </ApplyModalContext.Provider>
  );
}

export function useApplyModal() {
  const context = useContext(ApplyModalContext);
  if (!context) {
    return {
      isOpen: false,
      openApplyModal: () => {},
      closeApplyModal: () => {},
      initialData: undefined,
    };
  }
  return context;
}
