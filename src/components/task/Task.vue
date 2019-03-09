<template>
    <div class="task">
        <h2>{{ title }}</h2>
        <p>{{description}}</p>
        <input type="checkbox" v-model="active">
    </div>
</template>

<script>
    export default {
        name: 'Task',
        props: {
            title: String,
            description: String,
            active: Boolean,
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "Task.scss";
</style>
