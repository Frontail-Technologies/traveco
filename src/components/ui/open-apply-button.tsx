"use client";

import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { useApplyModal } from "@/context/apply-modal-context";
import { Button, buttonVariants } from "@/components/ui/button";

export interface OpenApplyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  initialService?: string;
  initialDestination?: string;
  children?: React.ReactNode;
}

export const OpenApplyButton = React.forwardRef<HTMLButtonElement, OpenApplyButtonProps>(
  ({ initialService, initialDestination, children, onClick, ...props }, ref) => {
    const { openApplyModal } = useApplyModal();

    return (
      <Button
        ref={ref}
        {...props}
        onClick={(e) => {
          openApplyModal({
            serviceType: initialService,
            destination: initialDestination,
          });
          onClick?.(e);
        }}
      >
        {children}
      </Button>
    );
  }
);

OpenApplyButton.displayName = "OpenApplyButton";
