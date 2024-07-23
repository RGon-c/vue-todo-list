<script>
import taskCard from './components/taskCard.vue';
import taskInput from './components/taskInput.vue';
import { useToast } from 'primevue/usetoast';

import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    taskCard,
    taskInput
  },
  setup() {
    const taskList = ref([])
    const toast = useToast();
    const addTask = ({ title, description, id }) => {
      if ([...taskList.value] == '') {
        id = 1
      } else {
        id = taskList.value[taskList.value.length - 1].id + 1
      }
      taskList.value = [...taskList.value, { id, title, description, status: false }]
    }

    const setDoneTask = (id) => {
      toast.add({ severity: 'success', summary: 'Успешно', detail: 'Задача выполнена', life: 3000 })
      taskList.value = taskList.value.map(x => {
        if (x.id === id)
          x.status = true

        return x
      })

    }

    const removeTask = (id) => {
      taskList.value = taskList.value.filter(x => x.id !== id)
      toast.add({ severity: 'error', summary: 'Задача удалена', life: 3000 })

    }
    return {
      taskList,
      addTask,
      removeTask,
      setDoneTask,
    }
  }
}

</script>

<template>
  <main>
    <h1 class="title">TodoList</h1>
    <Toast />
    <taskInput @onAddTask="addTask"/>
    <taskCard v-for="item in taskList" :key="item.id" @onRemove="() => removeTask(item.id)"
      @onDone="() => setDoneTask(item.id)" :model="item"/>

    <div class="empty-section" v-if="!taskList.length">
      <img src="./assets/empty.png" alt="">
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
