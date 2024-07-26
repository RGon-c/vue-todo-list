<script setup lang="ts">
import { useTaskForm } from '../composables/useAddTaskForm.ts';
const { task, $v, addTaskWrapper } = useTaskForm();
</script>

<template>
    <div class="task-input my-list">
        <div class="container">
            <div class="flex flex-col gap-2">
                <label for="title">Название</label>
                <p-inputText id="title" v-model="task.title"></p-inputText>
                <p-message v-if="$v.title.$dirty && $v.title.required.$invalid" severity="error">Поле обязательно</p-message>
            </div>
            <div class="flex flex-col gap-2">
                <label>Описание</label>
                <p-textarea v-model="task.description" rows="5" cols="30"></p-textarea>
                <p-message v-if="$v.description.$dirty && $v.description.required.$invalid" severity="error">Поле обязательно</p-message>
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