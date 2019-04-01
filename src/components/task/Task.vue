<template>
    <div class="task">
        <div class="task__header">
            <button class="move-button" v-if="state > 1" @click="doUpdateTaskState(-1)">&#8678;</button>
            <h3>{{ name }}</h3>
            <button v-if="state < 3" @click="doUpdateTaskState(1)">&#8680;</button>
        </div>
        <hr class="separator-line">
        <p>{{description}}</p>
        <button class="delete-button" @click="doDeleteTask">&#10006; Delete</button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Action} from "vuex-class";

    @Component({})
    export default class Task extends Vue {
        @Prop() id!: string;
        @Prop() name!: string;
        @Prop() description!: string;
        @Prop() state!: number;
        @Prop() project!: string;

        @Action("deleteTask") deleteTask: any;
        @Action("updateTaskState") updateTaskState: any;

        doDeleteTask() {
            this.deleteTask(this);
        }

        doUpdateTaskState(value: number) {
            //this.state += value;
            //this.updateTaskState(this);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "Task.scss";
</style>
