<template>
    <div class="task">
        <div class="task__header">
            <h3 class="task__heading">{{ name }}</h3>

        </div>
        <hr>
        <div class="task__content">
            <p>{{description}}</p>
        </div>
        <div class="task__actions">
            <button class="move-button" v-if="state > 1" @click="doUpdateTaskState(-1)">&#8678;</button>
            <button class="delete-button" @click="doDeleteTask">&#10006; Delete</button>
            <button v-if="state < 3" @click="doUpdateTaskState(1)">&#8680;</button>
        </div>
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
            this.updateTaskState({id: this.id, state: this.state + value});
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "Task.scss";
</style>
