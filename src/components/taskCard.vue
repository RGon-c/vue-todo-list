<script setup>
const props = defineProps({
    model: {
        type: Object,
        required: true,
    }
})
</script>
<template>
    <div class="task-card-body">
        <div class="task-card-header">
            <p>Задача №{{ model.id }}</p>
            <h4>{{ model.title }}</h4>
            <p>{{ model.description }}</p>
        </div>
        <div class="task-card-btn">
            <slot name="actions" :model="model"></slot>
          </div>
    </div>
</template>



<style scoped>
.task-card-header{
    text-align: left;
}
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