"use client";

import { deleteTask, updateTaskStatus } from "@/app/actions/tasks";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { cn, formatDate, showErrorToast } from "@/lib/utils";
import { TTask } from "@/utils/types";
import { Edit2, Trash2 } from "lucide-react";
import { useState, type FC } from "react";
import TaskName from "./task-name";

interface Props {
  task: TTask;
}

const TaskCard: FC<Props> = ({ task }) => {
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

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

  const toggleDeleteTask = async () => {
    setLoading(true);

    const { error } = await deleteTask(task.id);

    if (error) {
      showErrorToast("Error deleting task.");
      return;
    }

    toast({
      title: "Deleted",
      description: "Task deleted successfully",
    });

    setLoading(false);
  };

  return (
    <Card
      key={task.id}
      className={cn(
        "rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg",
        loading && "opacity-50 cursor-not-allowed"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <TaskName
          task={task}
          isUpdating={isUpdating}
          setIsUpdating={setIsUpdating}
        />
        <span className="text-xs text-muted-foreground">
          {formatDate(task.created_at)}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => setIsUpdating(true)}
            className="text-muted-foreground"
            variant="secondary"
            disabled={isUpdating}
          >
            <Edit2 className="size-5" />
          </Button>
          <Button
            onClick={() => toggleDeleteTask()}
            className="text-muted-foreground"
            variant="secondary"
            disabled={isUpdating}
          >
            <Trash2 className="size-5" />
          </Button>
        </div>

        <Switch
          checked={task.status}
          onCheckedChange={() => toggleComplete()}
          disabled={isUpdating}
        />
      </div>
    </Card>
  );
};

export default TaskCard;
