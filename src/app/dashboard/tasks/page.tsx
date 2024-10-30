"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, CheckCircle, Circle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface Task {
  id: number;
  name: string;
  dueDate: string;
  completed: boolean;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Design new logo", dueDate: "2023-06-15", completed: false },
    {
      id: 2,
      name: "Update website content",
      dueDate: "2023-06-20",
      completed: true,
    },
    {
      id: 3,
      name: "Plan team meeting",
      dueDate: "2023-06-18",
      completed: false,
    },
  ]);

  const addTask = () => {
    // Placeholder for adding a new task
    console.log("Add new task");
  };

  const editTask = (id: number) => {
    // Placeholder for editing a task
    console.log("Edit task", id);
  };

  const deleteTask = (id: number) => {
    // Placeholder for deleting a task
    console.log("Delete task", id);
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex w-full bg-background">
      <div className="flex-1 px-4 py-8 md:px-8">
        <div className="flex flex-col max-h-[700px] h-full mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">Tasks</h1>

          <Button
            onClick={addTask}
            className="h-auto flex items-center justify-center w-full mb-8 py-3 text-white rounded-lg shadow-md"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Task
          </Button>

          <div className="flex flex-col gap-3">
            {tasks.map((task) => (
              <div key={task.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium text-gray-800">
                    {task.name}
                  </h2>
                  <span className="text-sm text-gray-500">{task.dueDate}</span>
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
                    checked={task.completed}
                    onCheckedChange={() => toggleComplete(task.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
