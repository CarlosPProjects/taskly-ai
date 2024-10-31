"use client";

import { useState, type FC } from "react";

import { toast } from "@/hooks/use-toast";
import { showErrorToast } from "@/lib/utils";

import { updateTaskName } from "@/app/actions/tasks";
import { TTask } from "@/utils/types";
import { Input } from "@/components/ui/input";

interface Props {
  task: TTask;
  isUpdating: boolean;
  setIsUpdating: (value: boolean) => void;
}

const TaskName: FC<Props> = ({ task, isUpdating, setIsUpdating }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(task.name);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await updateTaskName(task.id, name);
    if (error) {
      showErrorToast("Error updating task name.");
      return;
    }

    toast({
      title: "Updated",
      description: "Task updated successfully",
    });

    setLoading(false);
    setIsUpdating(false);
  };

  return isUpdating ? (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        defaultValue={task.name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />
    </form>
  ) : (
    <h3 className="text-md font-medium">{task.name}</h3>
  );
};

export default TaskName;
