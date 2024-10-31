import { Card } from "@/components/ui/card";
import TaskProgressCard from "@/components/dashboard/task/task-progress-card";
import TaskSummaryCard from "@/components/dashboard/task/task-summary-card";
import { Suspense } from "react";
import { getTasks } from "../actions/tasks";
import Loading from "./loading";

export default async function IosDashboard() {
  const { tasks } = await getTasks();

  if (!tasks) return <div>Data Not Found</div>;

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex w-full bg-background">
        <div className="flex-1">
          <div className="flex flex-col max-h-[700px] h-full mx-auto max-w-3xl">
            <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

            <TaskProgressCard tasks={tasks} />

            <Card className="shadow-lg rounded-2xl overflow-y-scroll __hideScrollBar">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Task Summary</h2>
                <ul className="space-y-4">
                  {tasks.map((task) => (
                    <TaskSummaryCard key={task.id} task={task} />
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
