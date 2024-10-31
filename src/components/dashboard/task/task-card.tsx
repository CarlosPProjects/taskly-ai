import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { formatDate } from "@/lib/utils";
import { TTask } from "@/utils/types";
import { Edit2, Trash2 } from "lucide-react";
import { type FC } from "react";

interface Props {
  task: TTask;
}

const TaskCard: FC<Props> = ({ task }) => {

  const editTask = async() => {

  }

  return (
    <Card key={task.id} className="rounded-xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-md font-medium">{task.name}</h2>
        <span className="text-xs text-muted-foreground">
          {formatDate(task.created_at)}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => editTask(task.id)}
            className="text-muted-foreground"
            variant="secondary"
          >
            <Edit2 className="size-5" />
          </Button>
          <Button
            onClick={() => deleteTask(task.id)}
            className="text-muted-foreground"
            variant="secondary"
          >
            <Trash2 className="size-5" />
          </Button>
        </div>

        <Switch
          checked={task.status}
          onCheckedChange={() => toggleComplete(task.id)}
        />
      </div>
    </Card>
  );
};

export default TaskCard;
