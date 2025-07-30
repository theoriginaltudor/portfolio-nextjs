"use client";

import React, { useActionState } from "react";
import { MinusCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils/client";
import { Database } from "@/types/database.types";
import { updateArticle } from "../actions/update-article";
import { usePathname } from "next/navigation";

interface RemoveButtonProps {
  setList: React.Dispatch<
    React.SetStateAction<Database["public"]["Tables"]["skills"]["Row"][]>
  >;
  id: number;
}

export const RemoveButton: React.FC<RemoveButtonProps> = ({ setList, id }) => {
  const path = usePathname();
  const removeAction = async (
    prevState: { success: boolean } | undefined,
    formData: FormData
  ) => {
    const rawId = formData.get("skillId");
    if (typeof rawId !== "string") {
      throw new Error("Invalid id");
    }
    const idToDelete = parseInt(rawId, 10);
    const response = await updateArticle(formData, path);
    if (response.success === true) {
      setList((prev) => prev.filter((skill) => skill.id !== idToDelete));
    }
    return response;
  };
  const [state, formAction, pending] = useActionState(removeAction, undefined);

  if (pending) return null;

  return (
    <form action={formAction} className="inline-flex items-center">
      <input type="hidden" name="skillId" value={id} />
      <button type="submit" disabled={pending} aria-label="Remove">
        <MinusCircleIcon
          className={cn("cursor-pointer", {
            "text-green-500": state?.success === true,
            "text-red-500": state?.success === false,
          })}
        />
      </button>
    </form>
  );
};
