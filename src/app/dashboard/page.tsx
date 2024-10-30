"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";

export default function IosDashboard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Complete project proposal",
      dueDate: "15 Mar",
      completed: false,
    },
    {
      id: 2,
      name: "Review team performance",
      dueDate: "20 Mar",
      completed: true,
    },
    {
      id: 3,
      name: "Update client presentation",
      dueDate: "22 Mar",
      completed: false,
    },
    {
      id: 4,
      name: "Schedule quarterly meeting",
      dueDate: "25 Mar",
      completed: false,
    },
  ]);

  const completedTasks = tasks.filter((task) => task.completed).length;
  const completionPercentage = (completedTasks / tasks.length) * 100;

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex w-full bg-background">
      <div className="flex-1">
        <div className="flex flex-col max-h-[700px] h-full mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

          <Card className="mb-6 shadow-lg rounded-2xl overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold  mb-4">Task Progress</h2>
              <Progress
                value={completionPercentage}
                className="h-2 bg-gray-200"
              />
              <p className="text-sm mt-2">
                {completedTasks} of {tasks.length} tasks completed
              </p>
            </div>
          </Card>

          <Card className="shadow-lg rounded-2xl overflow-y-scroll __hideScrollBar">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Task Summary</h2>
              <ul className="space-y-4">
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className="flex items-center justify-between py-3 border-b  last:border-b-0"
                  >
                    <div className="flex flex-col">
                      <span
                        className={`text-base ${
                          task.completed && "text-muted-foreground line-through"
                        }`}
                      >
                        {task.name}
                      </span>
                      <span className="text-sm">Due: {task.dueDate}</span>
                    </div>
                    <Switch
                      checked={task.completed}
                      onCheckedChange={() => toggleTaskCompletion(task.id)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
