"use client";

import { createTask } from "@/app/actions/tasks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";
import React from "react";

const AddTaskForm = () => {
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const { error } = await createTask(formData);

    if (error) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Error creating task.",
      });

      return;
    }

    toast({
      title: "Created",
      description: "Task created successfully",
    });

    formRef.current?.reset();
  };

  return (
    <Card className="col-span-full md:col-span-2 lg:col-span-3 mb-3">
      <CardHeader>
        <CardTitle>Add New Task</CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} className="flex" onSubmit={handleSubmit}>
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
  );
};

export default AddTaskForm;