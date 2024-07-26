import { reactive } from "vue";
import { useToast } from "primevue/usetoast";
import { useTaskListStore, type Task } from "../stores/useTaskListStore";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { defineStore } from "pinia";

export const useTaskForm = defineStore("taskForm", () => {
  const toast = useToast();
  const { addTask } = useTaskListStore();

  const task = reactive<Task>({
    id: 0,
    title: "",
    description: "",
    status: false,
  });

  const rules = {
    title: { required },
    description: { required },
  };

  const $v = useVuelidate(rules, task);

  const addTaskWrapper = () => {

    $v.value.$touch();
    if ($v.value.$invalid) return;

    addTask(task);

    toast.add({
      severity: "success",
      summary: "Успешно",
      detail: "Задача добавлена",
      life: 3000,
    });

    task.title = "";
    task.description = "";
    $v.value.$reset();
    
  };

  return {
    task,
    $v,
    addTaskWrapper,
  };
});
