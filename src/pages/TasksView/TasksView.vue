<template>
    <div class="tasks-view">
        <div class="tasks-view__task-create">
            <input v-model.trim="newTaskName" placeholder="Task Name"/>
            <input v-model.trim="newTaskDescription" placeholder="Task Description"/>
            <button @click="doCreateTask">Add Task</button>
        </div>
        <div class="tasks-view__column-area">
            <Column :tasks="filterTasksByState(1)" :name="'To-Do'"></Column>
            <Column :tasks="filterTasksByState(2)" :name="'In Progress'"></Column>
            <Column :tasks="filterTasksByState(3)" :name="'Done'"></Column>
        </div>
    </div>
</template>

<script lang="ts">
    import {State, Action} from "vuex-class";
    import {Component, Vue} from "vue-property-decorator";
    import Column from "@/components/Column/Column.vue";
    import {TasksState} from "@/pages/TasksView/tasks";
    import {taskStateEnum} from "@/taskStateEnum";

    @Component({
        components: {Column}
    })
    export default class TasksView extends Vue {
        @State tasks!: TasksState;
        @Action("getTasks") getTasks: any;
        @Action("createTask") createTask: any;
        @Action("addChange") addChange: any;

        private projectId!: string;
        private newTaskName = '';
        private newTaskDescription = '';

        created() {
            this.projectId = this.$route.params.id;
            this.getTasks(this.projectId);
        }
        
        filterTasksByState(state: number) {
            return this.tasks.tasks.filter(task => task.state === state);
        }

        doCreateTask() {
            if (this.newTaskName && this.newTaskDescription) {
                const response= this.createTask({
                    name: this.newTaskName,
                    description: this.newTaskDescription,
                    state: taskStateEnum.ToDo,
                    project: this.projectId
                });
                this.addChange({
                    description: `The task [${this.newTaskName}] has been created.`,
                    projectId: this.projectId
                });
                this.newTaskName = '';
                this.newTaskDescription = '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "TasksView.scss";
</style>