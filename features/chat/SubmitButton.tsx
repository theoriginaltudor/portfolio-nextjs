"use client";

import { useFormStatus } from "react-dom";
import { useEffect } from "react";

export function SubmitButton({
  onPendingChange,
  disabled,
}: {
  onPendingChange: (pending: boolean) => void;
  disabled: boolean;
}) {
  const { pending } = useFormStatus();
  useEffect(() => {
    onPendingChange(pending);
  }, [pending, onPendingChange]);
  return (
    <button
      type="submit"
      className="bg-primary text-primary-foreground rounded-3xl px-4 py-2 flex items-center justify-center shadow hover:bg-primary/90 transition-colors text-xs font-semibold cursor-pointer"
      aria-label="Send"
      disabled={pending || disabled}
    >
      {pending ? "Sending..." : "Send"}
    </button>
  );
}
