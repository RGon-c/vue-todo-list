import { useToast } from "primevue/usetoast";
import { useTaskListStore, type Task } from "../stores/useTaskListStore.ts";
import { defineStore } from "pinia";

export const useActionTaskCard = defineStore("ActionTaskCard", () => {
  const { tasks } = useTaskListStore();
  const toast = useToast();
  const setDoneTask = (id: number) => {
    toast.add({
      severity: "success",
      summary: "Успешно",
      detail: "Задача выполнена",
      life: 3000,
    });
    tasks.map((x) => {
      if (x.id === id) x.completed = true;
      return x;
    });
  };

  const removeTask = (id: number) => {
    const index: number = tasks.findIndex((x) => x.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      toast.add({ severity: "error", summary: "Задача удалена", life: 3000 });
    }
  };
  return {
    removeTask,
    setDoneTask,
    tasks,
  };
});
