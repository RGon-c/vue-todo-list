<script>
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast';

export default {
    emits: ['onAddTask'],
    setup(props, { emit }) {
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
            toast.add({ severity: 'success', summary: 'Успешно', detail: 'Задача добавлена', life: 3000  })
            title.value = ''
            description.value = ''
            titleReqired.value = true
            descriptionReqired.value = true
        }

        return {
            title,
            description,
            onAddTask,
            titleReqired,
            descriptionReqired
        }
    }

}

</script>
<template>
    <div class="task-input my-list">
        <div class="container">
            <div class="flex flex-col gap-2">
                <label for="title">Название</label>
                <InputText id="title" v-model="title" type="text" :invalid="!titleReqired" />
                <Message severity="error" v-if="!titleReqired">Поле обязательно</Message>
            </div>

            <div class="flex flex-col gap-2">
                <label>Описание</label>
                <Textarea v-model="description" type="text" rows="5" cols="30" :invalid="!descriptionReqired" />
                <Message severity="error" v-if="!descriptionReqired">Поле обязательно</Message>
            </div>

        </div>
        <Button label="Добавить" class="mt-6" severity="success" @click="onAddTask" />
    </div>
</template>



<style scoped>
.container{
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