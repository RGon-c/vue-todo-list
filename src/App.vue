<script setup>
import taskCard from "./components/taskCard.vue";
import taskInput from "./components/taskInput.vue";
import { useActionTaskCard } from './composables/useActionTaskCard.ts';
const { removeTask, setDoneTask, tasks } = useActionTaskCard();
</script>

<template>
  <main>
    <h1 class="title">TodoList</h1>
    <p-toast ref="toastMessage"></p-toast>
    <taskInput></taskInput>
    <taskCard v-for="item in tasks" :key="item.id" :model="item">
      <template #actions="{ model }">
        <p-button label="Выполнено" severity="success" raised @click="setDoneTask(model.id)" v-if="!model.status"
          icon="pi pi-check"></p-button>
        <p-button label="Удалить" severity="danger" raised @click="removeTask(model.id)" v-else
          icon="pi pi-trash"></p-button>
      </template>
    </taskCard>
    <div class="empty-section" v-if="!tasks.length">
      <img src="./assets/empty.png" alt="Empty list" />
      Список задач пуст
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
