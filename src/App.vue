<script setup>
import taskCard from "./components/taskCard.vue";
import taskInput from "./components/taskInput.vue";
import { useToast } from "primevue/usetoast";
import { useTaskListStore } from "./stores/useTaskListStore";
import { ref } from "vue";

const { tasks } = useTaskListStore();
const toast = useToast();

const setDoneTask = (id) => {
  toast.add({
    severity: "success",
    summary: "Успешно",
    detail: "Задача выполнена",
    life: 3000,
  });
  tasks.map((x) => {
    if (x.id === id) x.status = true;

    return x;
  });
};

const removeTask = (id) => {
  const index = tasks.findIndex((x) => x.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    toast.add({ severity: "error", summary: "Задача удалена", life: 3000 });
  }
};
</script>

<template>
  <main>
    <h1 class="title">TodoList</h1>
    <p-toast />
    <taskInput />
    <taskCard
      v-for="item in tasks"
      :key="item.id"
      @onRemove="() => removeTask(item.id)"
      @onDone="() => setDoneTask(item.id)"
      :model="item"
    />
    

    <div class="empty-section" v-if="!tasks.length">
      <img src="./assets/empty.png" alt="" />
      Список задача пуст
    </div>
  </main>
</template>

<style scoped>
main {
  width: 50%;
  margin: 0 auto;
}

.empty-section {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.empty-section img {
  width: 150px;
}
</style>
