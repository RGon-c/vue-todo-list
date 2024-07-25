<script setup>
const emit = defineEmits(['onDone', 'onRemove'])
const props = defineProps({
    model: {
        type: Object,
        required: true,
    }
})
const emitOnDone = () => {
    emit('onDone')
}
const emitOnRemove = () => {
    emit('onRemove')
}

</script>
<template>
    <div class="task-card-body">
        <div class="task-card-header">
            <p>Задача №{{ model.id }}</p>
            <h4>{{ model.title }}</h4>
            <p>{{ model.description }}</p>
        </div>
        <div class="task-card-btn">
            <p-button label="Выполнено" severity="success" raised @click="emitOnDone" v-if="!model.status"
                icon="pi pi-check"></p-button>
            <p-button label="Удалить" severity="danger" raised @click="emitOnRemove" v-else
                icon="pi pi-trash"></p-button>
        </div>
    </div>
</template>



<style scoped>
.task-card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    border: 1px solid rgb(178, 178, 178);
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    -moz-backdrop-filter: blur(15px);
    -o-backdrop-filter: blur(15px);
    -ms-backdrop-filter: blur(15px);
    border-radius: 10px;
    padding: 0 20px;
}
</style>