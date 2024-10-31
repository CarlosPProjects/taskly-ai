import AddTaskForm from "@/components/dashboard/task/task-form";
import { getTasks } from "@/app/actions/tasks";
import TaskCard from "@/components/dashboard/task/task-card";

export default async function Tasks() {
  const { tasks } = await getTasks();

  if (!tasks) return <div>Loading...</div>;

  return (
    <div className="flex bg-background w-full">
      <div className="flex flex-col mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-semibold mb-6">Tasks</h1>

        <AddTaskForm />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task}/>
          ))}
        </div>
      </div>
    </div>
  );
}
