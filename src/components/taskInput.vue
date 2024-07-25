<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useToast } from 'primevue/usetoast';
import { useTaskListStore, type Task } from '../stores/useTaskListStore';

import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { computed } from '@vue/reactivity';

const toast = useToast()
const { addTask } = useTaskListStore()



const task = reactive<Task>({
    id: 0,
    title: '',
    description: '',
    status: false
})

const rules = computed(() => ({
    title: { required },
    description: { required }
}));

const $v = useVuelidate(rules, task);

const addTaskWrapper = () => {
    $v.value.$touch();

    if ($v.value.$invalid) return;
    addTask(task);
    toast.add({ severity: 'success', summary: 'Успешно', detail: 'Задача добавлена', life: 3000 });
    
    task.title = '';
    task.description = '';

    $v.value.$reset();
};


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