'use client'

import { updateTaskStatus } from "@/app/actions/tasks";
import { Switch } from "@/components/ui/switch";
import { formatDate, showErrorToast } from "@/lib/utils";
import { TTask } from "@/utils/types";
import { useState, type FC } from "react";

interface Props {
  task: TTask;
}

const TaskSummaryCard: FC<Props> = ({ task }) => {
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const toggleComplete = async () => {
    setLoading(true);
    const newStatus = !isActive;
    setIsActive(newStatus);

    const { error: statusError } = await updateTaskStatus(task.id, newStatus);
    if (statusError) {
      showErrorToast("Error changing task status.");
      setLoading(false);
      return;
    }

    setLoading(false);
  };

  return (
    <li
      key={task.id}
      className="flex items-center justify-between py-3 border-b  last:border-b-0"
    >
      <div className="flex flex-col">
        <span
          className={`text-base ${
            task.status && "text-muted-foreground line-through"
          }`}
        >
          {task.name}
        </span>
        <span className="text-sm">Due: {formatDate(task.created_at)}</span>
      </div>
      <Switch
        checked={task.status}
        onCheckedChange={() => toggleComplete()}
        disabled={loading}
      />
    </li>
  );
};

export default TaskSummaryCard;
