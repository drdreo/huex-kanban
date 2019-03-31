<template>
    <div class="task">
        <h2>{{ title }}</h2>
        <p>{{description}}</p>
        <button v-if="active" @click="toggleActive()">Done!</button>
        <button v-if="!active" @click="toggleActive()">Activate!</button>
        <span>Task is active? {{active}}</span>
    </div>
</template>

<script>
    export default {
        name: 'Task',
        props: {
            title: String,
            description: String,
            active: Boolean,
        },
        methods: {
            toggleActive() {
                this.active = !this.active;
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "Task.scss";
</style>
