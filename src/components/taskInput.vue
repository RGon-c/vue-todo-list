<script>
import { ref } from 'vue'
export default {
    emits: {
        onAddTask({ title, description }) {
            if (title == '' || description == '') {
                alert('Заполните все поля')
                return false
            } else {
                return true
            }
        }
    },
    setup(props, { emit }) {
        const title = ref('')
        const description = ref('')

        const onAddTask = () => {
            emit('onAddTask', { title: title.value, description: description.value })
            title.value = ''
            description.value = ''
        }

        return {
            title,
            description,
            onAddTask
        }
    }

}

</script>
<template>
    <div class="task-input my-list">
        <div class="container">
            <FloatLabel>
                <InputText id="title" v-model="title" type="text"/>
                <label for="title">Название</label>
            </FloatLabel>
    
            <FloatLabel>
                <Textarea v-model="description" type="text" rows="5" cols="30" />
                <label>Описание</label>
            </FloatLabel>
        </div>

        
        <Button label="Добавить" severity="success" @click="onAddTask" />

    </div>
</template>



<style scoped>
.task-input .container{
    display: flex;
    flex-direction: column;
    gap: 20px 0px;
}
.task-input input,
.task-input textarea{
    width: 100%;
}
</style>