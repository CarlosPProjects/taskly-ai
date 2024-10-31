"use client";

import { FormEvent, useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

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

  const addTask = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData();
    console.log(formData.get('task'));
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
    <div className="flex bg-background w-full">
      <div className="flex flex-col mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-semibold mb-6">Tasks</h1>

        <Card className="col-span-full md:col-span-2 lg:col-span-3 mb-3 shadow-lg">
          <CardHeader>
            <CardTitle>Add New Task</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex" onSubmit={addTask}>
              <Input
                type="text"
                name="task"
                placeholder="Enter task name"
                className="flex-grow mr-2"
                required
              />
              <Button type="submit">
                <Plus className="w-4 h-4 mr-2" />
                Add Task
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tasks.map((task) => (
            <Card key={task.id} className="rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-md font-medium">{task.name}</h2>
                <span className="text-xs text-muted-foreground">
                  {task.dueDate}
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
                  checked={task.completed}
                  onCheckedChange={() => toggleComplete(task.id)}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
