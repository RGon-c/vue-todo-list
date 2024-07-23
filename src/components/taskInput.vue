<script setup>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast';


const emit = defineEmits(['onAddTask'])
const toast = useToast();
const title = ref('')
const description = ref('')
const titleReqired = ref(true)
const descriptionReqired = ref(true)

const onAddTask = () => {
    if (title.value === '' || description.value === '') {
        titleReqired.value = false
        descriptionReqired.value = false
        return
    }
    emit('onAddTask', { title: title.value, description: description.value })
    toast.add({ severity: 'success', summary: 'Успешно', detail: 'Задача добавлена', life: 3000 })
    
    title.value = ''
    description.value = ''
    titleReqired.value = true
    descriptionReqired.value = true
}




</script>
<template>
    <div class="task-input my-list">
        <div class="container">
            <div class="flex flex-col gap-2">
                <label for="title">Название</label>
                <p-inputText id="title" v-model="title" type="text" :invalid="!titleReqired"></p-inputText>
                <p-message severity="error" v-if="!titleReqired">Поле обязательно</p-message>
            </div>

            <div class="flex flex-col gap-2">
                <label>Описание</label>
                <p-textarea v-model="description" type="text" rows="5" cols="30"
                    :invalid="!descriptionReqired"></p-textarea>
                <p-message severity="error" v-if="!descriptionReqired">Поле обязательно</p-message>
            </div>

        </div>
        <p-button label="Добавить" class="mt-6" severity="success" @click="onAddTask"></p-button>
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