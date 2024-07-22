<script>
import { onMounted, ref } from 'vue'

export default {
    emits: ['onDone', 'onRemove'],
    props: {
        model: {
            required: true,
            default: {
                id: 0,
                title: 'Create Video',
                description: 'Upload video',
                status: true,
            }
        }
    },
    setup(props, { emit }) {
        const emitOnDone = () => {
            emit('onDone')
        }
        const emitOnRemove = () => {
            emit('onRemove')
        }
        return {
            emitOnDone,
            emitOnRemove
        }
    }

}

</script>
<template>
    <Toast />

    <Button label="Success" severity="success" @click="showSuccess" />

    <div class="task-card-body">
        <div class="task-card-header">
            <h4>{{ model.title }}</h4>
            <p>{{ model.description }}</p>
        </div>
        <div class="task-card-btn">
            <Button label="Выполнено" severity="success" raised @click="emitOnDone" v-if="!model.status"
                icon="pi pi-check" />
            <Button label="Удалить" severity="danger" raised @click="emitOnRemove" v-else icon="pi pi-trash" />
        </div>
    </div>
</template>



<style scoped>
.task-card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;

}
</style>