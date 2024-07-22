<script>
import taskCard from './components/taskCard.vue';
import taskInput from './components/taskInput.vue';
import { ref } from 'vue'


export default {
  name: 'App',
  components: {
    taskCard,
    taskInput
  },
  setup() {
    const taskList = ref([{id: 0, title: 'Create video', description: 'And upload on YT', status: false}])

    const addTask = ({title, description}) => {
      taskList.value = [...taskList.value, {id: taskList.value[taskList.value.length - 1].id + 1, title, description, status: false}]
    }

    const setDoneTask = (id) => {
      taskList.value = taskList.value.map(x => {
        if(x.id === id)
          x.status = true
        return x
      })
    }

    const removeTask = (id) => {
      taskList.value = taskList.value.filter(x => x.id !== id)
    }

    return {
      taskList,
      addTask,
      removeTask,
      setDoneTask
    }
  }
}

</script>

<template>
  <main>
    <taskInput @onAddTask="addTask"></taskInput>
    <ul class="task-list my-list">
      <li v-for="item in taskList" :key="item.id">
        <taskCard @onRemove="() => removeTask(item.id)" @onDone="() => setDoneTask(item.id)" :model="item"></taskCard>
      </li>
    </ul>
  </main>
</template>


<style scoped>
.task-list{
  list-style: none;
  margin: 0;
  padding: 0;
}
main{
  width: 50%;
  margin: 0 auto;
}
</style>
