import { reactive, onMounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const useTaskListStore = defineStore("taskList", () => {
  const tasks = reactive<Task[]>([]);

  onMounted(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => {
        tasks.push(...response.data);
      });
  });

  const addTask = (newTask: Task): void => {
    const taskToAdd: Task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title: newTask.title,
      description: newTask.description,
      completed: false,
    };

    tasks.push(taskToAdd);
  };

  return {
    tasks,
    addTask,
  };
});
