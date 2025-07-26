"use client";
import React, { useState } from "react";
import { Tables } from "@/types/database.types";
import { RemoveButton } from "./remove-button";
import { PlusCircleIcon } from "lucide-react";

interface SkillsProps {
  skills: Tables<"skills">[];
  edit?: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ skills, edit = false }) => {
  const [list, setList] = useState<Tables<"skills">[]>(skills);

  return (
    <div className="max-w-2xl w-full px-4 mt-8">
      <h2 className="text-xl font-semibold mb-2">Skills:</h2>
      <div className="flex flex-wrap gap-2">
        {list.map((skill) => (
          <span
            key={skill.id}
            className="inline-flex gap-2 items-center rounded-full px-3 py-1 text-sm bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
          >
            {skill.name}{" "}
            {edit && <RemoveButton setList={setList} id={skill.id} />}
          </span>
        ))}
        {edit && (
          <span className="inline-flex gap-2 rounded-full p-1 text-sm bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
            <PlusCircleIcon />
          </span>
        )}
      </div>
    </div>
  );
};
