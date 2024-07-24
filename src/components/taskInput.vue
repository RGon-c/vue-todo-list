<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useToast } from 'primevue/usetoast';
import { useTaskListStore, type Task } from '../stores/useTaskListStore';


const toast = useToast()
const {addTask} = useTaskListStore()

const task = reactive<Task>({
    id: 0,
    title: '',
    description: '',
    status: false
})

const addTaskWrapper = () => {
    addTask(task)
    toast.add({ severity: 'success', summary: 'Успешно', detail: 'Задача добавлена', life: 3000 })
}


</script>

<template>
    <div class="task-input my-list">
        <div class="container">
            <div class="flex flex-col gap-2">
                <label for="title">Название</label>
                <p-inputText id="title" v-model="task.title" type="text"></p-inputText>
            </div>

            <div class="flex flex-col gap-2">
                <label>Описание</label>
                <p-textarea v-model="task.description" type="text" rows="5" cols="30"></p-textarea>
            </div>

        </div>
        <p-button label="Добавить" class="mt-6" severity="success" @click="addTaskWrapper"></p-button>
    </div>
</template>



<style scoped>
.container {
    margin-bottom: 20px;
}

.task-input .container {
    display: flex;
    flex-direction: column;
    gap: 20px 0px;
}

.task-input input,
.task-input textarea {
    width: 100%;
}
</style>