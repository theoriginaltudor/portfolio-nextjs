import React from "react";
import { Input } from "@/components/ui/input";

interface SkillsProps {
  skills: string[];
  edit?: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ skills, edit = false }) => (
  <div className="max-w-2xl w-full px-4 mt-8">
    <h2 className="text-xl font-semibold mb-2">Skills:</h2>
    {edit ? (
      <form action="">
        <Input
          value={skills.join(", ")}
          name="skills"
          placeholder="Enter skills separated by commas"
        />
      </form>
    ) : (
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-block rounded-full px-3 py-1 text-sm bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
          >
            {skill}
          </span>
        ))}
      </div>
    )}
  </div>
);
