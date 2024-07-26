import { reactive, ref } from "vue";
import { defineStore } from "pinia";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

export const useTaskListStore = defineStore("taskList", () => {
  const tasks = reactive<Task[]>([]);

  const addTask = (newTask: Task) => {
    const taskToAdd: Task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title: newTask.title,
      description: newTask.description,
      status: false,
    };

    
    tasks.push(taskToAdd);
  };

  return {
    tasks,
    addTask
  };
});
