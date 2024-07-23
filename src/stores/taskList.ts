import { ref } from "vue";
import { defineStore } from "pinia";

// Определяем магазин с типом состояния
export const useTaskListStore = defineStore("taskList", () => {
  // Определение типа Task
  type Task = {
    id: number;
    title: string;
    description: string;
    status: boolean;
  };

  // Состояние
  const tasks = ref<Task[]>([
    {
      id: 0,
      title: "",
      description: "",
      status: false
    }
  ]);

  return {
    tasks
  };
});